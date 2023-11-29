const perguntaModel = require('../models/PerguntaModel');

const getByCodigo = async (req, res)=> {
    let codigo = req.params.codigo;

    console.log(codigo);
    let pergunta = await perguntaModel.getByCodigo(codigo);
    let content = {error:'', result:[]};
    if (pergunta) {
        content.result = pergunta;
    }

    console.log(pergunta);
    res.json(content);
}
const save = async (req, res)=> {

    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    let content = {error:'', result:[]};
    await perguntaModel.getMaiorCodigo().then(codigo => {
        
        console.log(codigo); //TODO: Problema com json aqui.
        let pergunta = perguntaModel.save(codigo.maiorCodigo++, titulo, descricao);
        if (pergunta) {
            content.result = pergunta;
        }
    });

    res.json(content);
}

module.exports = {
    getByCodigo,
    save
}