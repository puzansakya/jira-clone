import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("issues", (table: any) => {
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));

        table.string("title").notNull();
        table.integer("listPosition").notNull();
        table.text("description");
        table.text("descriptionText");
        table.integer("estimate");
        table.integer("timeSpent");
        table.integer("timeRemaining");

        table.uuid('typeId').references('issueTypes.id');
        table.uuid('statusId').references('issueStatuses.id');
        table.uuid('priorityId').references('issuePriorities.id');
        table.uuid('reporterId').references('users.id');
        table.uuid('projectId').references('projects.id').notNull();

        table.date("createdAt").defaultTo(knex.fn.now());
        table.date("modifiedAt");
        table.date("deletedAt");

        table.boolean("isDeleted").defaultTo(false);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("issues");
}

