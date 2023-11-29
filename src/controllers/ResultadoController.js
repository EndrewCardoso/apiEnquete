const resultadoModel = require('../models/ResultadoModel');

const get = async (req, res)=> {
    let resultados = await resultadoModel.get();
    
    let content = {error: '', result: []};
    if (resultados) {
        for (resultado of resultados) {
            content.result.push({
                id: resultado.id,
                resposta: resultado.resposta,
                pergunta: resultado.pergunta_id,
                dtCadastro: resultado.dtCadastro
            });
        }
        content.result = resultados;
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
    get,
    save
}