/*const express = require("express")
const { response } = require("../app")
const router = express.Router()
router.get("/" , (requets, response)=>{
    response.status(200).json({
    "titulo": "To-do Api - Reprograma",
    "version": "1.0.0",
    "mensagem": "bem vinda bebe"
    })
})

module.experts = router */

const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "To-do Api - Reprograma",
        "version": "1.0.0",
        "mensagem": "bem vinda bebe"
    })
})
module.exports = router
