import type { AppRouter } from "~/server/api/root";

import { createTRPCReact } from "@trpc/react-query";

export const trpcApi = createTRPCReact<AppRouter>({});
