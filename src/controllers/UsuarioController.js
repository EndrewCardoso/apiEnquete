const usuarioModel = require('../models/UsuarioModel');

const get = async (req, res)=> {
    let lstUsuarios = await usuarioModel.getAll();
    let content = {error:'', result:[]};
    for (let usuario of lstUsuarios) {
        content.result.push({
            id: usuario.id,
            nome: usuario.nome,
            apelido: usuario.apelido,
            senha: usuario.senha,
            email: usuario.email,
            dtCadastro: usuario.dtCadastro
        })
    }

    res.json(content);
}
const getById = async (req, res)=> {
    let id = req.params.id;
    let usuario = await usuarioModel.getById(id);
    let content = {error:'', result:[]};
    if (usuario) {
        content.result = usuario;
    }

    res.json(content);
}
const save = async (req, res)=> {

    let nome = req.body.nome;
    let apelido = req.body.apelido;
    let senha = req.body.senha;
    let email = req.body.email;

    let usuario = await usuarioModel.save(nome, apelido, senha, email);
    let content = {error:'', result:[]};
    if (usuario) {
        content.result = usuario;
    }

    res.json(content);
}

module.exports = {
    get,
    getById,
    save
}