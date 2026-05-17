import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const port = 3000;//porta que o servidor vai rodar

app.use(express.json());

//conexão com o banco de dados
const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro, conectar ao MongoDB:", error);
    }
};



const start = async () => {
    await conn();

    app.listen(port, () => {
        console.log(`server esta rodando na porta : http://localhost:${port}`);
    });
};

start();