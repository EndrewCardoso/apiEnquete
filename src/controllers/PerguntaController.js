const perguntaModel = require('../models/PerguntaModel');

const getByCodigo = async (req, res)=> {
    let codigo = req.params.codigo;

    let pergunta = await perguntaModel.getByCodigo(codigo);
    let content = {error:'', result:[]};
    if (pergunta) {
        content.result = pergunta;
    }

    res.json(content);
}
const getByUsuarioId = async (req, res)=> {
    let usuarioId = req.body.usuarioId;

    let lstPerguntas = await perguntaModel.getByUsuarioId(usuarioId);
    let content = {error:'', result:[]};
    if (lstPerguntas) {
        content.result = lstPerguntas;

        // for (let pergunta of lstPerguntas) {
        //     content.result.push({
        //         id: pergunta.id,
        //         codigo: pergunta.codigo,
        //         titulo: pergunta.titulo,
        //         descricao: pergunta.descricao,
        //         dtCadastro: pergunta.dtCadastro,
        //         usuarioId: pergunta.usuario_id
        //     })
        // }
    }

    res.json(content);
}
const save = async (req, res)=> {

    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let usuarioId = req.body.usuarioId;

    let cod = await perguntaModel.getMaiorCodigo();
    let codigo = cod[0].maiorCodigo + 1;

    let pergunta = perguntaModel.save(codigo, titulo, descricao, usuarioId);
    
    let content = {error:'', result:[]};
    if (pergunta) {
        content.result = pergunta;
    }

    res.json(content);
}
const update = async (req, res)=> {

    let id = req.body.perguntaId;
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let usuarioId = req.body.usuarioId;

    let pergunta = perguntaModel.update(titulo, descricao, usuarioId, id);
    
    let content = {error:'', result:[]};
    if (pergunta) {
        content.result = pergunta;
    }

    res.json(content);
}
const remove = async (req, res) => {
    let content = {error:'', result:[]};
    await perguntaModel.remove(req.body.id);
    res.json(content);
}

module.exports = {
    getByCodigo,
    getByUsuarioId,
    save,
    update,
    remove
}