import mongoose from "mongoose";

mongoose.connect("mongodb+srv://DB_ADMIN:1234@cluster0.3s9o0dh.mongodb.net/DB_NodeJS");
//utilizar o banco de dados localmente
//mongoose.connect("mongodb://127.0.0.1:27017/alura-node");

let db = mongoose.connection;

export default db;
