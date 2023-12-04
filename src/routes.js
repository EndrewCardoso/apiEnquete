const express = require('express');
const router = express.Router(); 

const autorizacaoController = require('./controllers/AutorizacaoController');
router.post('/login', autorizacaoController.logar)

const usuarioController = require('./controllers/UsuarioController');
router.post('/usuario', usuarioController.save);

const perguntaController = require('./controllers/PerguntaController');
router.get('/perguntas/:codigo', perguntaController.getByCodigo);
router.post('/perguntasUser', autorizacaoController.verificarToken, perguntaController.getByUsuarioId);
router.post('/pergunta', autorizacaoController.verificarToken, perguntaController.save);
router.post('/perguntaUpdate', autorizacaoController.verificarToken, perguntaController.update);
router.post('/perguntaRemove', autorizacaoController.verificarToken, perguntaController.remove);

const resultadoController = require('./controllers/ResultadoController');
router.post('/resultadosByPergunta', autorizacaoController.verificarToken, resultadoController.getByPerguntaId);
router.post('/resultado', resultadoController.save);

module.exports = router;