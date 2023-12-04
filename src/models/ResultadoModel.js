const db = require('../db')

const getByPerguntaId = async (perguntaId)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT resposta FROM resultados WHERE pergunta_id = ?', [perguntaId], 
        (error, results)=> {
            if (error) { reject(error); return; }
            resolve(results);
        });
    });
}
const save = async (perguntaId, resposta)=> {
    return new Promise((resolve, reject)=> {
        db.query('INSERT INTO resultados (resposta, dtCadastro, pergunta_id) VALUES (?, NOW(), ?)', [resposta, perguntaId], 
        (error, results) => {
            if (error) { reject(error); return; }
            resolve(results.insertId);
        });
    });
}

module.exports = {
    getByPerguntaId,
    save
}