const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("funciona bem pra caralho")
})

let listaDdePedidos = [
    {
        "id": 1,
        "cliente": "Eduardo Beretta",
        "idCliente": 100,
        "produto": "X-Bacon",
        "valor": 29.9
    },
    {
        "id": 2,
        "cliente": "Felipe Fagundes",
        "idCliente": 153,
        "produto": "X-Tudo",
        "valor": 39.9
    },
    {
        "id": 3,
        "cliente": "Lorenna Andreassa",
        "idCliente": 1204,
        "produto": "X-Salada",
        "valor": 25.9
    },
]

//listar
app.get("/listarpedidos", function (req, res) {
    res.send(listaDdePedidos)
})

//listar um
app.get("/listarpedido/:id", function (req, res) {
    let id_informado = req.params.id
    if(id_informado > listaDdePedidos.length){
        res.send("Pedido Inválido")
    }else{
        res.send(listaDdePedidos[id_informado - 1])
    }
})

app.listen(3000)