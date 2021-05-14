import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'postgres',
        database: 'task_db',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: true,
        synchronize: true,
      }),
  },
];
