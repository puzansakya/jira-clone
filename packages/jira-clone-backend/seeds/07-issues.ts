import { Knex } from "knex";
import { faker } from '@faker-js/faker'
import { seedIssues, seedIssueType } from "./data";

export async function seed(knex: Knex): Promise<void> {

    // console.log(seedIssueType)
    // console.log(seedIssues)
    // Inserts seed entries
    await knex("issues").insert(seedIssues);
};
