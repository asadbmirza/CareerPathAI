import Client from "pg";
import dotenv from "dotenv";
dotenv.config();

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(225) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255),
        education VARCHAR(255),
        location VARCHAR(255)
    );
`;

const createSkillsTable = `
    CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        skill VARCHAR(255),
        
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
`;

const createResponsesTable = `
    CREATE TABLE IF NOT EXISTS responses (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        rating INTEGER,
        response1 VARCHAR(255),
        response2 VARCHAR(255),
        response3 VARCHAR(255),
        response4 VARCHAR(255),
        response5 VARCHAR(255),
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
`;

async function main() {
    console.log("seeding....");
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
    });

    try {
        await client.connect();
        
        // Execute each SQL statement separately
        await client.query(createUsersTable);
        await client.query(createSkillsTable);
        await client.query(createResponsesTable);

        
        console.log("done");
    } catch (err) {
        console.error("Error executing queries", err);
    } finally {
        await client.end();
    }
}

main();

