const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set('strictQuery', true);

async function main() {
    await mongoose.connect(
        `mongodb+srv://MikeiasPires:${process.env.DB_PASS}@cluster0.3imyc5t.mongodb.net/`
    );
    console.log('Connected successfully');
}

main().catch((err) => console.log(err));

module.exports = main;