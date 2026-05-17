import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nomeProduto: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String }
});

export default mongoose.model('produto', produtoSchema);