const db = require('../db')

const get =  ()=> {
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM usuarios', (error, results)=>{
            if (error) { reject(error); return; }
            resolve(results);
        });
    });
}
const getById = (id)=> {
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results)=>{
            if (error) { reject(error); return; }
            if (results.length > 0) {
                resolve(results);
            } else {
                resolve(false);
            }
        });
    });
}
const getUser = (email, senha)=> {
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], 
        (error, results)=>{
            if (error) { reject(error); return; }
            resolve(results);
        });
    });
}
const save = (nome, senha, email)=> {
    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO usuarios (nome, senha, email, dtCadastro) VALUES (?, ?, ?, NOW())', [nome, senha, email], 
        (error, results) => {
            if (error) { reject(error); return; }
            resolve(results.insertId);
        });
    });
}

module.exports = {
    get,
    getById,
    getUser,
    save
}