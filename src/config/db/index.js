import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/local_db');
        console.log('Connect Success!');
    } catch (error) {
        console.log('Connect Fail!')
    }
}

export default { connect };