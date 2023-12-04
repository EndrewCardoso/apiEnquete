const usuarioModel = require('../models/UsuarioModel');

const save = async (req, res)=> {

    let nome = req.body.nome;
    let senha = req.body.senha;
    let email = req.body.email;

    let usuario = await usuarioModel.save(nome, senha, email);
    let content = {error:'', result:{}};
    if (usuario) {
        content.result = usuario;
    }

    res.json(content);
}

module.exports = {
    save
}