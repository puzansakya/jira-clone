import { Knex } from "knex";
import { seedProjectCategories } from "./data";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("projectCategories").insert(seedProjectCategories);
};
