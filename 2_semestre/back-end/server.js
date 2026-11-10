const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const porta = 3000

// Importação de Rotas
//http://localhost:3000/exemplos/exemplo

const adminroutes = require("./src/routes/admin.routes")
app.use("/admin", adminroutes)

const coordroutes = require("./src/routes/coord.routes")
app.use("/coord", coordroutes)

const gestorroutes = require("./src/routes/gestor.routes")
app.use("/gestor", gestorroutes)

const profroutes = require("./src/routes/prof.routes")
app.use("/prof", profroutes)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})
