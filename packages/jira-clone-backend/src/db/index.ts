import Knex from 'knex';
import { Model } from 'objection';
import { development } from '../../knexfile';

export const initialize_database_connection = async () => {

    console.log(`⚡️[server]: INITIALIZING DATABASE USING CLIENT: ${"development"}.`);

    // Initialize knex.
    const newDelveopment = {
        ...development, connection: {
            ...development.connection,
            filename: './packages/jira-clone-backend/pzt.pz'
        }
    }

    console.log({
        newDelveopment
    })

    const knex = Knex(newDelveopment);


    Model.knex(knex);
}
