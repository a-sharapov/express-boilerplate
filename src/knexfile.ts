import { Knex } from 'knex';
import dotenv from 'dotenv';
dotenv.config();

interface IKnexConfig {
  [key: string]: Knex.Config;
}

export default {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME as string,
      user: process.env.DATABASE_USER as string,
      password: process.env.DATABASE_PASSWORD as string
    },
    debug: true,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

  // staging: {
  // },

  // production: {
  // }
} as IKnexConfig;
