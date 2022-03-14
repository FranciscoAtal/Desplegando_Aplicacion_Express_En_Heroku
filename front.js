const { Router } = require("express")
const db = require("./db.js")
const bodyParser = require("body-parser")

const router = Router()

router.get('/', async (req, res) => {
    const arr = await db.listar();
    res.render('home', { usuarios: arr })
})

router.get('/user-create', (req, res) => {
    res.render('creaUsuario')
})

router.get('/user-delete/:id', async (req, res) => {
    const { id } = req.params
    const {confirmado} = req.query

    if (confirmado) {
        await db.eliminar(id)
        return res.redirect("/")
    }

    const usuario = await db.buscar(id)
    res.render('eliminaUsuario', { usuario })
})

router.post('/crearUsuarios', async (req, res) => {
    await db.ingresar(req.body)
    res.redirect('/')
})

module.exports = router
