import { drizzle } from "drizzle-orm/node-postgres";
// You can use cache from react to cache the client during the same request
// this is not mandatory and only has an effect for server components
import { cache } from "react";
import * as schema from "./schema/pg";
import { Pool } from "pg";
import { getCloudflareContext } from "@opennextjs/cloudflare";
 
export const getDb = cache(() => {
  const pool = new Pool({
    connectionString: getCloudflareContext().env.PG_URL,
    // You don't want to reuse the same connection for multiple requests
    maxUses: 1,
  });
  return drizzle({ client: pool, schema });
});