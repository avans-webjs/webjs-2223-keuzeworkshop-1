export default class TodoAddView
{
    constructor(containerid){
        this.container = document.getElementById(containerid);
    
        this.form = document.createElement('form');

        this.addInput('id', { type: 'number'});
        this.addInput('omschrijving');
        this.addInput('submit', {type: 'submit', value: 'add'} )

        this.container.appendChild(this.form);

        //events!
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            //view logica
            const data = new FormData(e.target);
            const formDataObj = {};
            data.forEach((value, key) => (formDataObj[key] = value));

            this.onSubmitCallback(formDataObj);
        })

    }

    setOnSubmitCallback(callback){
        this.onSubmitCallback = callback;
    }

    addInput(name, attributes)
    {
        let input = document.createElement('input');
        input.setAttribute('name', name);

        if(attributes)
        {
            let keys = Object.keys(attributes);
            keys.forEach(key => {
                input.setAttribute(key, attributes[key])
            })
        }
       
        this.form.appendChild(input);
    }

 
}