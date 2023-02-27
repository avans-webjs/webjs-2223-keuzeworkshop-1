export default class TodoService 
{
    getAllTodos(){
        //gogogadget localstorage
        return [ 
            { omschrijving: "Maak components"},
            { omschrijving: "Maak services"}
        ]
    }

    getRandom()
    {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(json => json.json())
            .then(data => {
                console.log(data);
            })
    }
}