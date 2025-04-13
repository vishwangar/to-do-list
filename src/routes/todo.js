const express=require('express');
const { createTodo,deleteTodo,updateTodo} = require('../models/todo');
const router=express.Router();

router.post('/',async  (req, res) => {
    console.log({body:req.body});
    const {title, description} = req.body;
    const todo=await createTodo(title, description);
    res.send(todo);
});

router.delete('/:id',async  (req, res) => {
    const {id} = req.params;
    const resp=await deleteTodo(id);
    res.send(resp);
});

router.put('/:id',async  (req, res) => {
    const {id} = req.params;
    const {title, description} = req.body;
    const resp=await updateTodo(id, title, description);
    res.send(resp);
});

module.exports=router;