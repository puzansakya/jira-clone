import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('issues', (table: any) => {
    table.increments('id').unsigned().primary();

    table.string('title').notNull();
    table.integer('listPosition').notNull().defaultTo(0);
    table.text('description');
    table.text('descriptionText');
    table.integer('estimate');
    table.integer('timeSpent');
    table.integer('timeRemaining');

    table.integer('typeId').references('issueTypes.id');
    table.integer('statusId').references('issueStatuses.id');
    table.integer('priorityId').references('issuePriorities.id');
    table.integer('reporterId').references('users.id');
    table.integer('projectId').references('projects.id');

    table.date('createdAt').defaultTo(knex.fn.now());
    table.date('modifiedAt');
    table.date('deletedAt');

    table.boolean('isDeleted').defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('issues');
}
