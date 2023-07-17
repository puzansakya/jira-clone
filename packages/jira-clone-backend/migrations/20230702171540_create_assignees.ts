import {Knex} from "knex";

const uuidGenerationRaw = `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`;


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("assignees", (table: any) => {
        table.uuid("id").primary().defaultTo(knex.raw(uuidGenerationRaw));

        table.string('userId').references('users.id');
        table.string('issueId').references('issues.id');

        table.date("createdAt").defaultTo(knex.fn.now());
        table.date("modifiedAt");
        table.date("deletedAt");

        table.boolean("isDeleted").defaultTo(false);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("assignees");
}

