const test = {
    client: 'sqlite3',
    connection: {
        filename: './pzt-test.pz'
    },
    useNullAsDefault: true,
    debug: true,
}

export const development = {
    client: 'sqlite3',
    connection: {
        // filename: './packages/jira-clone-backend/pzt.pz'
        filename: 'pzt.pz'
    },
    pool: {
        afterCreate: function (conn: any, done: any) {
            conn.run("PRAGMA cipher_compatibility = 3")
            conn.run("PRAGMA KEY = 'secret'");
            conn.run('PRAGMA foreign_keys = ON', done);
            done();
        }
    },
    useNullAsDefault: true,
    debug: true,

}
const production = {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}
const DBEnv = {
    test,
    development,
    production,
}

// module.exports = {
//     test,
//     development,
//     production,
// }