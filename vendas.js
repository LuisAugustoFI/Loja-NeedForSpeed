import mongoose from "mongoose";
import produto from "./produto";
import usuario from "./usuario";

const vendasSchema = new mongoose.Schema({
    nomeUsuario: { type: String, required: true },
    valorVenda: { type: Number, required: true },
    dataVenda: { type: Date, default: Date.now },
    produtosVendidos: [{ type: String }]
});

export default mongoose.model('vendas', vendasSchema);