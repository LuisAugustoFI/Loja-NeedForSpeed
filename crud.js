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
    
//criação do schema vendas
app.post('/vendas.js', async (req, res) => {
    try {
        const novavendamensal = await VendaMensal.create(req.body);
        res.json(novavendamensal);
    } catch (error) {
        res.json({error: error});
    }
});

app.get('/vendas', async (req, res) => {
    try {
        const venda = await VendaMensal.find();
        res.json(venda);
    } catch (error) {
        res.json({error: error});
    }
});

//criação do schema usuario
app.post('/usuario.js', async (req, res) => {
    try {
        const novoUsuario = await usuario.create(req.body);
        res.json(novoUsuario);
    } catch (error) {
        res.json({error: error.message});
    }
});

const start = async () => {
    await conn();

    app.listen(port, () => {
        console.log(`server esta rodando na porta : http://localhost:${port}`);
    });
};

start(); 