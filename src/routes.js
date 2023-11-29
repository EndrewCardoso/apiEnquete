const express = require('express');
const router = express.Router(); 

const autorizacaoController = require('./controllers/AutorizacaoController');
router.post('/login', autorizacaoController.logar)

const usuarioController = require('./controllers/UsuarioController');
router.get('/usuarios', usuarioController.get);
router.post('/usuario', usuarioController.save);

const perguntaController = require('./controllers/PerguntaController');
router.get('/perguntas/:codigo', perguntaController.getByCodigo);
router.post('/pergunta', perguntaController.save);

const resultadoController = require('./controllers/ResultadoController');
router.get('/resultados', autorizacaoController.verificarToken, resultadoController.get);
router.post('/resultado', autorizacaoController.verificarToken, resultadoController.save);

module.exports = router;