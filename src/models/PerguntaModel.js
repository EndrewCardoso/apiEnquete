const db = require('../db')

const getByCodigo = (codigo)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT * FROM perguntas WHERE codigo = ?', [codigo], 
        (error, results)=> {
            if(error){ reject(error); return; }
            resolve(results);
        });
    });
}
const getMaiorCodigo = ()=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT MAX(codigo) AS maiorCodigo FROM perguntas', 
        (error, results)=> {
            if(error){ reject(error); return; }
            if (results.length > 0) {
                resolve(results);
            } else {
                resolve(0);
            }
        });
    });
}
const save = (titulo, descricao, usuarioId)=> {
    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO usuarios (codigo, titulo, descricao, dtCadastro usuarioId,) VALUES (?, ?, ?, NOW(), ?)', [1, titulo, descricao, usuarioId], 
        (error, results) => {
            if (error) { reject(error); return; }
            resolve(results.insertId);
        });
    });
}

module.exports = {
    getByCodigo,
    getMaiorCodigo,
    save
}