// import {  } from '~/utils/shopify/client/auth';
import { handleShopifyErrors } from "~/libs/shopify/client/_utils/index";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  encryptedShopifyUserData,
  getDecryptedShopifyUserDataFromAccessToKen,
} from "~/server/libs/shopify";
import {
  createTRPCRouter,
  customerProtectedProcedure,
  publicProcedure,
} from "~/server/libs/trpc";
import { customerAccessTokenCreateInputSchema } from "~/libs/shopify/client/auth";
import { ACCESS_TOKEN_COOKIE_KEY } from "~/libs/shopify";

export const shopifyAuthRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(2),
        lastName: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(8),
        phone: z.string().optional(),
        acceptsMarketing: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const data = await ctx.shopify.auth.customer.mutations
        .create(input)
        .then((result) => {
          handleShopifyErrors(result.customerCreate.customerUserErrors, {
            code: "BAD_REQUEST",
            errorCodeMessageMap: {
              TAKEN:
                "Email has already been taken, check your email for confirmation",
            },
          });

          return result;
        });

      const accessTokenInfo = await ctx.shopify.auth.customer.mutations
        .accessTokenCreate({ email: input.email, password: input.password })
        .then((result) => {
          handleShopifyErrors(
            result.customerAccessTokenCreate.customerUserErrors,
            {
              code: "BAD_REQUEST",
              customMessage: "please check your email and password",
            },
          );

          return result.customerAccessTokenCreate.customerAccessToken;
        });

      const expiresAtInMS = new Date(accessTokenInfo.expiresAt).getTime();

      const encryptedAccessToken = encryptedShopifyUserData({
        expiresAtInSec: Math.floor(expiresAtInMS / 1000),
        shopifyAccessToken: accessTokenInfo.accessToken,
        shopifyUserId: data.customerCreate.customer.id,
        shopifyUserEmail: data.customerCreate.customer.email,
      });

      const cookiesStore = ctx.getCookieManger();

      cookiesStore.set(ACCESS_TOKEN_COOKIE_KEY, encryptedAccessToken, {
        maxAge: (expiresAtInMS - Date.now()) / 1000,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });

      return data.customerCreate.customer;
    }),

  login: publicProcedure
    .input(customerAccessTokenCreateInputSchema)
    .mutation(async ({ ctx, input }) => {
      const accessTokenInfo = await ctx.shopify.auth.customer.mutations
        .accessTokenCreate(input)
        .then((result) => {
          handleShopifyErrors(
            result.customerAccessTokenCreate.customerUserErrors,
            {
              code: "BAD_REQUEST",
              customMessage: "please check your email and password",
            },
          );

          return result.customerAccessTokenCreate.customerAccessToken;
        });

      const data = await ctx.shopify.auth.customer.queries.dataByAccessToken({
        customerAccessToken: accessTokenInfo.accessToken,
      });

      const expiresAtInMS = new Date(accessTokenInfo.expiresAt).getTime();

      const encryptedAccessToken = encryptedShopifyUserData({
        expiresAtInSec: Math.floor(expiresAtInMS / 1000),
        shopifyAccessToken: accessTokenInfo.accessToken,
        shopifyUserId: data.customer.id,
        shopifyUserEmail: data.customer.email,
      });

      const cookiesStore = ctx.getCookieManger();
      cookiesStore.set(ACCESS_TOKEN_COOKIE_KEY, encryptedAccessToken, {
        maxAge: (expiresAtInMS - Date.now()) / 1000,
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });

      return data.customer;
    }),

  checkAccessToken: publicProcedure.query(async ({ ctx }) => {
    let shopifyAccessToken: string;
    try {
      const cookiesStore = ctx.getCookieManger();
      shopifyAccessToken = getDecryptedShopifyUserDataFromAccessToKen(
        cookiesStore.get(ACCESS_TOKEN_COOKIE_KEY)?.value,
      ).payload.shopifyAccessToken;
    } catch (error) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Access token not found",
      });
    }

    const data = await ctx.shopify.auth.customer.queries.dataByAccessToken({
      customerAccessToken: shopifyAccessToken,
    });

    return data.customer;
  }),

  signOut: customerProtectedProcedure.mutation(async ({ ctx }) => {
    const data = (await ctx.shopify.auth.customer.mutations.accessTokenDelete({
      customerAccessToken:
        ctx.shopifyUserDecryptedData.payload.shopifyAccessToken,
    })) as {
      customerAccessTokenDelete: {
        deletedAccessToken: string;
        deletedCustomerAccessTokenId: string;
        userErrors: [];
      };
    };

    const cookiesStore = ctx.getCookieManger();
    cookiesStore.delete(ACCESS_TOKEN_COOKIE_KEY);

    return data;
  }),
});
