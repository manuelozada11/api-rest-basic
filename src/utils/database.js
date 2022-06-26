const mongoose = require('mongoose');

module.exports.connectMongo = async () => {
    try {
        if (process.env.MONGO_URL) {
            await mongoose.connect(process.env.MONGO_URL);
            console.log('DB is connected 🎊');
        } else console.log('MongoDB error: Missing MongoDB url');
    } catch (err) {
        console.log('MongoDB error:', err);
    }
}