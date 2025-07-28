import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '@/lib/env';
import * as schema from './schema';
import { neon } from '@neondatabase/serverless';

const connectionString = env.DATABASE_URL;
const client = neon(connectionString);
export const db = drizzle(client);

export { schema };
