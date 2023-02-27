import TodoController from "./todocontroller.js"; 
import TodoListView from "./views/todolistview.js"; 
import TodoAddView from "./views/todoaddview.js";

//main
let listview = new TodoListView('todos');
let todoaddview = new TodoAddView('add');
let controller = new TodoController(listview, todoaddview);
