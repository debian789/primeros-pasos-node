import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    itemId: String,
    item: String,
    completed: Boolean
}, {collection:"TodoList"});

var ToDoModel= mongoose.model('ToDo', toDoSchema);

export default ToDoModel
