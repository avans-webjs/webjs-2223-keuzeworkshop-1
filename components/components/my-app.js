import TodoService from '../serivces/todoservice.js';
//??


class AppComponent extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback(){
        let todos = [ 
            { omschrijving: "Maak components"},
            { omschrijving: "Maak services"}
        ]

        let service = new TodoService();
        service.getRandom();

        
        let todolist = document.createElement('todo-list');
        todolist.service = service; //?? Soort van DI
        todolist.setAttribute('category', 'todo');
        
        let completedlist =  document.createElement('todo-list');
        completedlist.setAttribute('category', 'completed');
        
        todolist.addEventListener('onStatusChange', (event) => {
            let todoEl = event.target;
            todolist.removeTodo(todoEl);
            completedlist.addTodo(todoEl);
        })

        completedlist.addEventListener('onStatusChange', (event) => {
            let todoEl = event.target;
            completedlist.removeTodo(todoEl);
            todolist.addTodo(todoEl);
        })

        this.appendChild(todolist);
        this.appendChild(completedlist);

        //nu pas
        todolist.setTodos(todos); 

    }
}

customElements.define('my-app', AppComponent);