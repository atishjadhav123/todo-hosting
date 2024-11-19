const Todo = require("../model/Todo")

exports.addTodo = async (req, res) => {
    await Todo.create({ ...req.body, userId: req.user })
    res.json({ message: "Todo add success" })
}
exports.getAlltodo = async (req, res) => {
    const result = await Todo.find({ userId: req.user })
    res.json({ message: "Todo fetch success", result })
}
exports.updateTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "Todo update success" })
}
exports.deleteTodo = async (req, res) => {
    const { id } = req.parmas
    await Todo.findByIdAndDelete(id)
    res.json({ message: "Todo delete success" })
}