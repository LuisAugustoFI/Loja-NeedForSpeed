import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nomeUsuario: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    dadosCartao: {
        numeroCartão: { type: Number },
        validadeCartão: { type: Date },
        cvvCartão: { type: Number }
    }
});

export default mongoose.model('usuario', usuarioSchema);