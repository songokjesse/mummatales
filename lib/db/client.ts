import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres-js';
import { env } from '@/lib/env';
import * as schema from './schema';

const connectionString = env.DATABASE_URL;

export const db = drizzle(postgres(connectionString));

export { schema };
