import { Knex } from "knex";
import { seedIssueStatuses } from "./data";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("issueStatuses").insert(seedIssueStatuses);
};
