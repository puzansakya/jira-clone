import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex("comments").del();
    // await knex("projectUsers").del();
    await knex("issues").del();
    await knex("issuePriorities").del();
    await knex("issueStatuses").del();
    await knex("issueTypes").del();
    await knex("projects").del();
    await knex("users").del();
    await knex("projectCategories").del();


};
