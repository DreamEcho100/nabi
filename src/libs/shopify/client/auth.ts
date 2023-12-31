import { gql } from 'graphql-request';
import { z } from 'zod';
import {
	type ShopifyCustomer,
	type ShopifyErrorShape,
	type SHOPIFY_CUSTOMER_ERRORS_CODES,
} from '../types';
import { graphQLClient, customerGQLFields } from './_utils';

export const customerAccessTokenCreateInputSchema = z.object({
	email: z.string().email(),
	password: z.string().min(5),
});
const customerAccessTokenCreateMutation = async (
	input: z.infer<typeof customerAccessTokenCreateInputSchema>,
) => {
	/**
	 * @description [customerAccessTokenCreate](https://shopify.dev/docs/api/storefront/2023-04/mutations/customeraccesstokencreate)
	 * Creates a customer access token.
	 * The customer access token is required to modify the customer object in any way.
	 *
	 *  Requires `unauthenticated_write_customers` access scope.
	 */
	const template = gql`
		mutation customerAccessTokenCreate(
			$input: CustomerAccessTokenCreateInput!
		) {
			customerAccessTokenCreate(input: $input) {
				customerUserErrors {
					code
					field
					message
				}
				customerAccessToken {
					accessToken
					expiresAt
				}
			}
		}
	`;

	return (await graphQLClient.request<{
		customerAccessTokenCreate: {
			customerAccessToken: {
				accessToken: string;
				expiresAt: string;
			};
			customerUserErrors: ShopifyErrorShape<SHOPIFY_CUSTOMER_ERRORS_CODES>[];
		};
	}>(template, { input }));
};

const customerAccessTokenInputSchema = z.object({
	customerAccessToken: z.string(),
});
const customerDataByAccessTokenQuery = async (
	input: z.infer<typeof customerAccessTokenInputSchema>,
) => {
	// https://shopify.dev/docs/api/storefront/2023-04/objects/Customer
	const template = gql`
	query {
	customer(customerAccessToken: ${JSON.stringify(input.customerAccessToken)}) {
		${customerGQLFields}
	}
}
 `;

	return (await graphQLClient.request<{
		customer: ShopifyCustomer;
	}>(template)) ;
};

const customerAccessTokenDeleteSchema = z.object({
	customerAccessToken: z.string(),
});
const customerAccessTokenDeleteMutation = async (
	input: z.infer<typeof customerAccessTokenDeleteSchema>,
) => {
	const template = gql`
		mutation customerAccessTokenDelete($customerAccessToken: String!) {
			customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
				deletedAccessToken
				deletedCustomerAccessTokenId
				userErrors {
					field
					message
				}
			}
		}
	`;

	return (await graphQLClient.request<{
		// customerAccessTokenCreate: {
		// customerAccessToken: {
		// 	customerAccessToken: string;
		// 	expiresAt: string;
		// };
		// customerUserErrors: {
		// 	// https://shopify.dev/docs/api/storefront/2023-04/enums/CustomerErrorCode
		// 	code: TSHOPIFY_ERRORS_CODES;
		// 	field: string[];
		// 	message: string;
		// }[];
		// };
	}>(template, input)) ;
};

const customerCreateSchema = z.object({
	acceptsMarketing: z.boolean(),
	email: z.string().email(),
	phone: z.string().optional(),
	password: z.string().min(8),
	firstName: z.string().min(2),
	lastName: z.string().min(2),
});
const customerCreateMutation = async (
	input: z.infer<typeof customerCreateSchema>,
) => {
	const template = gql`
		mutation customerCreate($input: CustomerCreateInput!) {
			customerCreate(input: $input) {
				customerUserErrors {
					code
					field
					message
				}
				customer { ${customerGQLFields} }
			}
		}
	`;

	return (await graphQLClient.request<{
		customerCreate: {
			customer: ShopifyCustomer;
			customerUserErrors: ShopifyErrorShape<SHOPIFY_CUSTOMER_ERRORS_CODES>[];
		};
	}>(template, { input })) ;
};

const auth = {
	customer: {
		mutations: {
			accessTokenCreate: customerAccessTokenCreateMutation,
			accessTokenDelete: customerAccessTokenDeleteMutation,
			create: customerCreateMutation,
		},
		queries: {
			dataByAccessToken: customerDataByAccessTokenQuery,
		},
	},
};

export default auth;
