import { pool } from "./database.js";
import "./dotenv.js";
import giftData from "../data/gift.js";

// Function to create the gifts table if it doesn't exist
const createGiftsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS gifts;
    CREATE TABLE IF NOT EXISTS gifts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        elixir VARCHAR(10) NOT NULL,
        rarity VARCHAR(20) NOT NULL,
        cardType VARCHAR(20) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        cardUsage VARCHAR(10) NOT NULL
    );
    `;
    try {
        await pool.query(createTableQuery);
        console.log('🎉 gifts table created successfully');
    } catch (err) {
        console.error('⚠️ Error creating gifts table', err);
    }
};

// Function to insert a single gift into the database
const insertGift = async (gift) => {
    const insertQuery = {
        text: 'INSERT INTO gifts (name, elixir, rarity, cardType, image, description, cardUsage) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        values: [
            gift.name,
            gift.elixir,
            gift.rarity,
            gift.cardType,
            gift.image,
            gift.description,
            gift.cardUsage
        ]
    };

    try {
        await pool.query(insertQuery);
        console.log(`✅ ${gift.name} added successfully`);
    } catch (err) {
        console.error(`⚠️ Error inserting gift: ${gift.name}`, err);
    }
};

// Function to seed the gifts table with data
const seedGiftsTable = async () => {
    await createGiftsTable();

    // Use a for...of loop to insert gifts one by one (await ensures sequential execution)
    for (const gift of giftData) {
        await insertGift(gift);
    }
};

// Debugging logs
console.log(`Seeding ${giftData.length} gifts...`);

// Run the seeding process
seedGiftsTable().catch(err => console.error('⚠️ Error in seeding process:', err));
