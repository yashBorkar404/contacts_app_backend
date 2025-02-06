const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB connected: ${conn.connection.host}`,conn.connection.name);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

}
    module.exports = connectDb;