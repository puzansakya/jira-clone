import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("projects", (table: any) => {
        table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));

        table.string("name").notNull();
        table.string("url").notNull();
        table.string("description").notNull();
        table.integer('projectCategoryId').unsigned().references('projectCategories.id');

        table.date("createdAt").defaultTo(knex.fn.now());
        table.date("modifiedAt");
        table.date("deletedAt");

        table.boolean("isDeleted").defaultTo(false);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("projects");
}

