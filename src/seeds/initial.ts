import { Knex } from 'knex';

export const seed = async (knex: Knex): Promise<void> => {
  await knex('app').del();
  await knex('app').insert([
    {
      id: 1,
      name: 'My App',
      description: 'My App Description'
    }
  ]);
};
