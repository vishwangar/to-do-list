const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
},{
    timestamps : true
});
const todomodel = mongoose.model('Todo', todoSchema);

async function createTodo(title, description) {
    const todo = await todomodel.create({
        title,
        description
    });
    return todo;
}

async function deleteTodo(_id){
    const deltodo = await todomodel.deleteOne({_id});
    return deltodo;
}

async function updateTodo(_id, title, description) {
    const todo = await todomodel.updateOne({_id}, {
        title,
        description
    });
    return todo;
}

module.exports = {
    createTodo,deleteTodo,updateTodo
};