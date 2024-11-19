const { getAlltodo, addTodo, updateTodo, deleteTodo } = require("../controller/todo.controller")
const { userProtected } = require("../middlware/Protected")

const router = require("express").Router()

router
    .get("/getalltodo", userProtected, getAlltodo)
    .post("/addtodo", userProtected, addTodo)
    .put("/update/:id", userProtected, updateTodo)
    .delete("/delete/:id", userProtected, deleteTodo)

module.exports = router