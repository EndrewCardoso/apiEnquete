const resultadoModel = require('../models/ResultadoModel');

const getByPerguntaId = async (req, res)=> {
    
    let perguntaId = req.body.perguntaId;
    let lstResultados = await resultadoModel.getByPerguntaId(perguntaId);
    let content = {error: '', result: []};
    if (lstResultados) {
        content.result = lstResultados;
    }

    res.json(content);
}
const save = async (req, res)=> {
    let perguntaId = req.body.perguntaId;
    let resposta = req.body.resposta;
    
    let content = {error:'', id: 0};
    if (resposta && perguntaId)  {
        let resultadoId = await resultadoModel.save(perguntaId, resposta);
        if (resultadoId) {
            content.result = resultadoId;
        }
    } else {
        content.error = 'Não foi possível salvar os resultados.';
    }

    res.json(content);
}

module.exports = {
    getByPerguntaId,
    save
}