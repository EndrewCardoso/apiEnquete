const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/UsuarioModel');

const logar = async (req, res)=> {

    let email = req.body.email;
    let senha = req.body.senha;
    
    let content = {error:'', result:[]};
    if (email && senha) {
        let usuario = await usuarioModel.getUser(email, senha);
        if (usuario) {
            const token = jwt.sign({name: usuario.nome}, process.env.SECRET);

            content.result = usuario;
            // content.result = token;

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
        
    const tokenHeader = req.tokenHeader['authorization'];
    const token = tokenHeader && tokenHeader.split(' ')[1];

    if (token) {
        require('dotenv').config();
        jwt.verify(token, SECRET);
        next();
    } else {
        return false;
    }
};

module.exports = {
    logar,
    verificarToken
}