import { User } from 'src/auth/user.entity';
import { Task } from 'src/task/task.entity';
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
        entities: [Task, User],
        logging: true,
        synchronize: true,
      }),
  },
];
