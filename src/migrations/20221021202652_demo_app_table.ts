import { Knex } from 'knex';
const table = 'app';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table, (t) => {
    t.increments('id').primary();
    t.uuid('uuid').notNullable().unique().defaultTo(knex.raw('uuid_generate_v4()'));
    t.string('name').notNullable();
    t.string('description').notNullable();
    t.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table);
}
