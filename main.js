const quote = document.querySelector('#text')
const author = document.querySelector('#author')
const button = document.querySelector('#new-quote')
const list = document.querySelector("#language")

let id = Math.random() * 1000

fetch(`https://quotes15.p.rapidapi.com/quotes/random/?language_code=en`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "de15918203msh70d142e3ca5a558p1ca066jsn3ca5e396b746"
	}
}).then(response => response.json())
.then(data => {
        data.id = id
        quote.textContent = data.content
        author.textContent = data.originator.name
})
.catch(err => {
	    console.error(err)
});

button.addEventListener("click", () => {
        fetch(`https://quotes15.p.rapidapi.com/quotes/random/?language_code=${list.value}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "quotes15.p.rapidapi.com",
		    "x-rapidapi-key": "de15918203msh70d142e3ca5a558p1ca066jsn3ca5e396b746"
	    }
         }).then(response => response.json())
        .then(data => {
            data.id = id
            quote.textContent = data.content
            author.textContent = data.originator.name
        })
        .catch(err => {
	        console.error(err)
        });
})

