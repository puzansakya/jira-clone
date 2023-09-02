import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('issuePriorities', (table: any) => {
    table.increments('id').unsigned().primary();

    table.string('name').notNull();
    table.string('icon').notNull();

    table.date('createdAt').defaultTo(knex.fn.now());
    table.date('modifiedAt');
    table.date('deletedAt');

    table.boolean('isDeleted').defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('issuePriorities');
}
