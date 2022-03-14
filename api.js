const {Router} = require("express")
const db = require("./db.js")

const router = Router()

router.get('/users', async (req, res) => {
    const arr = await db.listar();
    res.json(arr)
})

router.post('/users', (req, res) => {
    db.ingresar(req.body)
    res.json({"message": "todo ok" })
})

router.delete('/users/:id', (req, res) => {
    const { id } = req.params
    db.eliminar(id)
    res.json({"message": "todo ok"})
})


module.exports = router