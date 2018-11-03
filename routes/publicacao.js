const express = require('express')
const router = express.Router();
const controller = require('../controllers/publicacao')

router.get('/categoria/:categoria', controller.list)
router.get('/nova', controller.novaForm)
router.get('/editar/:categoria/:id', controller.editarForm)
router.get('/excluir/:categoria/:id', controller.excluir)

router.post('/nova', controller.nova)
router.post('/editar/:categoria/:id', controller.editar)

module.exports = router