export default class TodoController
{
    constructor(listview, addView)
    {
        this.todos = [
            { id: 1, omschrijving: "Ik moet nog een C maken"},
            { id: 2, omschrijving: "Ik moet nog een M maken"},
            { id: 3, omschrijving: "Ik moet nog een V maken"}
        ];

        this.listview = listview;

        this.listview.addEventHandler('completeTodo', (todoid) => {
            this.completeTodo(todoid);
        })
        
        
        this.addView = addView;

        this.addView.setOnSubmitCallback((todo) => {
            this.addTodo(todo);
            this.showAllTodos();
        })


        this.showAllTodos();
    }

    completeTodo(todoid){
        let todo =this.todos.find(t => t.id == todoid);
        let index = this.todos.indexOf(todo);

        this.todos.splice(index, 1);

        this.showAllTodos();
    }

    showAllTodos()
    {

        this.listview.show(this.todos);
    }

    addTodo(todo){
        this.todos.push(todo);
    }


    deleteTodo()
    {

    }

    editTodo()
    {

    }

}

