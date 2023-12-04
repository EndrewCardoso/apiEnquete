const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/UsuarioModel');

const logar = async (req, res)=> {

    let email = req.body.email;
    let senha = req.body.senha;
    
    let content = {error:'', result:{}, token:''};
    if (email && senha) {
        let usuario = await usuarioModel.getUser(email, senha);
        if (usuario) {
            const token = jwt.sign({name: usuario.nome}, process.env.SECRET);

            content.result = usuario;
            content.token = token;
            console.log(content);
        }
        else{
            content.error = 'Usuário não encontrado!';
        }
    } else {
        content.error = 'Favor preencher os campos Email e Senha corretamente!';
    }
    
    res.json(content);
};

const verificarToken = async (req, res, next) => {
    
    const token = req.header('authorization');

    if (token) {
        require('dotenv').config();
        jwt.verify(token, process.env.SECRET);
        next();
    } else {
        return false;
    }
};

module.exports = {
    logar,
    verificarToken
}