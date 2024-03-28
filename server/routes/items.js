const express = require("express")
const router = express.Router()
const cors = require("cors")
const { getItem, addItem, updateItem, deleteItem } = require("../controllers/itemsController")

router.get('/', cors(), getItem)


router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router