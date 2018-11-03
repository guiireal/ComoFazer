const api = require('../api')

const novaForm = async (req, res) => {
    const categorias = await api.list('categoria')
    res.render('publicacoes/nova', { categorias })
}

const nova = async (req, res) => {
    await api.add(`publicacao/${req.body.categoria}`, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/' + req.body.categoria)
}

const list = async (req, res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacao/' + categoria)
    res.render('publicacoes/index', { publicacoes, categoria})
}

const excluir = async (req, res) => {
    await api.apagar('publicacao/' + req.params.categoria, req.params.id)
    res.redirect(`/publicacoes/categoria/${req.params.categoria}`)
}

const editarForm = async (req, res) => {
    const publicacao = await api.get('publicacao/' + req.params.categoria, req.params.id)
    res.render('publicacoes/editar', { 
        publicacao, 
        categoria: req.params.categoria 
    })
}

const editar = async (req, res) => {
    await api.update('publicacao/' + req.params.categoria, req.params.id, { 
        titulo: req.body.titulo,
        conteudo: req.body.conteudo 
    })
    res.redirect(`/publicacoes/categoria/${req.params.categoria}`)
}

module.exports = {
    novaForm, nova, list, excluir, editarForm, editar
}