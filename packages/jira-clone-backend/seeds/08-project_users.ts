import { Knex } from "knex";
import { seedProjectUsers } from "./data";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("projectUsers").insert(seedProjectUsers);
};
