// Update with your config settings.

const prodDBConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./src/database/dev.sqlite3"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  production: {
    client: "pg",
    connection: prodDBConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./src/database/migrations"
    }
  }
};
