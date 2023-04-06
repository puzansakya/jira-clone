import { Knex } from "knex";
import { seedIssuePriorities } from "./data";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("issuePriorities").insert(seedIssuePriorities);
};
