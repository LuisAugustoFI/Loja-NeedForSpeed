import mongoose from "mongoose";
import produto from "./produto.js";
import usuario from "./usuario.js";

const vendasSchema = new mongoose.Schema({
    nomeUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "nomeUsuario", required: true },
    valorVenda: { type: Number, required: true },
    dataVenda: { type: Date, default: Date.now },
    produtosVendidos: [{ type: mongoose.Schema.Types.ObjectId, ref: "nomeProduto" }]
});

export default mongoose.model('vendas', vendasSchema);