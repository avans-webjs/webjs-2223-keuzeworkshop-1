export default class TodoListView
{
    constructor(containerid){
        this.handlers = {};

        this.container = document.getElementById(containerid);
        this.list = document.createElement('ul');
        this.container.appendChild(this.list);
    }

    addEventHandler(name, handler){
        this.handlers[name] = handler;
    }

    show(todos)
    {
        //ff leegooien?
        this.list.innerHTML = ""; //??

        todos.forEach(todo => {
            let item = document.createElement('li');

            let button = document.createElement('button');
            button.innerText = 'complete';

            button.addEventListener('click', () => {
                this.handlers['completeTodo'](todo.id);
            })

            item.appendChild(button);

            let span = document.createElement('span');
            span.innerText = todo.omschrijving;
            item.appendChild(span);


            this.list.appendChild(item);
        });
    }
}

