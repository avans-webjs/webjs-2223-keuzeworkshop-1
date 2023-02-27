class TodoItemComponent extends HTMLElement
{

    constructor()
    {
        super();
    }


    connectedCallback() {

        if(this.button != null)
            return;

        let category = this.getAttribute('category');
        let omschrijving = this.getAttribute('omschrijving');

        this.button = document.createElement('button');
        this.status = this.getAttribute('status');
        this.button.innerText = status == 'complete' ? 'Undo' : 'complete';
        this.appendChild(this.button);

        let span = document.createElement('span');
        span.innerText = omschrijving;
        this.appendChild(span);

        this.button.addEventListener('click', () => {
            let status = this.getAttribute('status');
            this.setAttribute('status', status == 'complete' ? 'todo' : 'complete'  );
        })

     

    }


    static get observedAttributes() {
        return [ 'omschrijving', 'status' /* array of attribute names to monitor for changes */];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
       if(name == 'status')
       {
            if(newValue == 'complete')
            {
                this.style.setProperty('color', 'green');
            }
            else 
            {
                this.style.setProperty('color', 'black');
            }

            //and change the button
            this.button.innerText = newValue == 'complete' ? 'Undo' : 'complete';

            //Events!
            let onStatusChange = new CustomEvent("onStatusChange", {
                bubbles: true,
                cancelable: false,
                detail: {
                    omschrijving: this.getAttribute('omschrijving'),
                    status: this.getAttribute('status')
                }
            });
            this.dispatchEvent(onStatusChange);

       }
    }

}

customElements.define('todo-item', TodoItemComponent);