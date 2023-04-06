import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("projectUsers", (table: any) => {
        table.string("id")
            .primary()
        // .defaultTo(knex.raw("(UUID())"));


        table.string('projectId').references('projects.id');
        table.string('userId').references('users.id');

        table.date("createdAt").defaultTo(knex.fn.now());
        table.date("modifiedAt");
        table.date("deletedAt");

        table.boolean("isDeleted").defaultTo(false);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("projectUsers");
}

