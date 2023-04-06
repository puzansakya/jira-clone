import { Knex } from "knex";
import { seedComments } from "./data";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("comments").insert(seedComments);
};
