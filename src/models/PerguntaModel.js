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
const getByUsuarioId = (usuarioId) => {
    return new Promise((resolve, reject)=> {
        db.query('SELECT * FROM perguntas WHERE usuario_id = ?', [usuarioId], 
        (error, results)=> {
            if(error){ reject(error); return; }
            resolve(results);
        });
    });
}
const save = (codigo, titulo, descricao, usuarioId) => {
    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO perguntas (codigo, titulo, descricao, dtCadastro, usuario_id) VALUES (?, ?, ?, NOW(), ?)', [codigo, titulo, descricao, usuarioId], 
        (error, results) => {
            if (error) { reject(error); return; }
            resolve(results.insertId);
        });
    });
}
const update = (titulo, descricao, usuarioId, id) => {
    return new Promise((resolve, reject)=>{
        db.query('UPDATE perguntas SET titulo = ?, descricao = ?, usuario_id = ? WHERE id = ?', [titulo, descricao, usuarioId, id], 
        (error, results) => {
            if (error) { reject(error); return; }
            resolve(results.insertId);
        });
    });
}
const remove = (id) => {
    return new Promise((resolve, reject)=>{
        db.query('DELETE FROM perguntas WHERE id = ?', [id], 
        (error, results) => {
            if (error) { reject(error); return; }
            resolve(results.insertId);
        });
    });
}

module.exports = {
    getByCodigo,
    getMaiorCodigo,
    getByUsuarioId,
    save,
    update,
    remove
}