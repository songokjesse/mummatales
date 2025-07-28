declare module 'postgres-js' {
    import { QueryResult } from 'drizzle-orm/postgres-js';

    interface PostgresClient {
        (sql: string, ...params: any[]): Promise<QueryResult>;
        prepare: (name: string, sql: string, ...params: any[]) => Promise<QueryResult>;
        transaction: (callback: () => Promise<void>) => Promise<void>;
    }

    const client: PostgresClient;
    export default client;
}
