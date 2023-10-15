const usuarioModel = require('../models/UsuarioModel');

module.exports = {
    getAll: async (req, res)=>{
        let retorno = {error:'', result:[]};

        let lstUsuarios = await usuarioModel.getAll();
        for(let i in lstUsuarios){
            retorno.result.push({
                id: lstUsuarios[i].id,
                nome: lstUsuarios[i].nome,
                apelido: lstUsuarios[i].apelido,
                senha: lstUsuarios[i].senha,
                email: lstUsuarios[i].email,
                dtCadastro: lstUsuarios[i].dtCadastro
            })
        }

        res.json(retorno);
    }
}