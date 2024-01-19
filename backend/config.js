import dotenv from "dotenv";
dotenv.config();
const username = process.env.USER_NAME;
const password = process.env.MDB_PASSWORD;
export const PORT = 5555;

export const mongoDBURL = `mongodb+srv://${username}:${password}@book-store-mern.nydkf7r.mongodb.net/?retryWrites=true&w=majority`;

// use username and password of your mongodb
