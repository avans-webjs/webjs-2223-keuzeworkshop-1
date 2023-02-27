class TodoListComponent extends HTMLElement
{

    constructor()
    {
        super();
    }

    setTodos(todos){

        todos.forEach(todo => {
            let li = document.createElement('li');
            let todoitem = document.createElement('todo-item');
            todoitem.setAttribute('omschrijving', todo.omschrijving);
            li.appendChild(todoitem);
            this.ul.appendChild(li);
        })

    }

    addTodo(todoEl)
    {
        let li = document.createElement('li');
        li.appendChild(todoEl);
        this.ul.appendChild(li);
    }

    removeTodo(todoEl)
    {
        //??
    }

    connectedCallback() {


        let category = this.getAttribute('category');
        let h1 = document.createElement('h1');
        h1.innerText = 'List of ' + category;
        this.appendChild(h1);

        this.ul = document.createElement('ul');
        this.appendChild(this.ul);

        //hier verder niet naar kijken please....
        this.addEventListener('onStatusChange', () => {
            let empties = this.querySelectorAll('li:empty')
            empties.forEach(e => e.remove());
        })
    }

    static get observedAttributes() {
        return [ 'todos' /* array of attribute names to monitor for changes */];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.dir(newValue);
    }

}

customElements.define('todo-list', TodoListComponent);