import { Knex } from "knex";
import { seedIssueType } from "./data";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("issueTypes").insert(seedIssueType);
};
