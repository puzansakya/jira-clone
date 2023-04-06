import { Knex } from "knex";
import { faker } from '@faker-js/faker'
import { seedProjects } from "./data";
export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("projects").insert(seedProjects);
};
