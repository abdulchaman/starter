const mongoose = require('mongoose');
const dotenv = require('dotenv');
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! Shutting Down');
    console.log(err.name, err.message);
    process.exit(1);
})
const app = require('./app');
dotenv.config({
    path: './config.env'
});
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
    .then(con => {
        console.log('DB connection successfull!')
    });

const server = app.listen(3000, () => {
    console.log("app has started")
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting Down');
    server.close(() => {
        process.exit(1);
    });

});
console.log(X)