 
/* CHUCK NORRIS */
let count = 0

let button = document.getElementById('button') 
button.addEventListener('click', function ramdom_jokes () {  

    count++

    console.log(count);

    fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
        return response.json();
    })
    .then(function (joke) {
        let main = document.getElementById('chucknorris')    
        let div = document.createElement('div');
        let chuckNorris_RandomJoke = document.createTextNode(joke.value);
        div.appendChild(chuckNorris_RandomJoke);
        main.appendChild(div)        
    })
} )



/* DOG 

fetch("https://dog.ceo/api/breeds/image/random")
.then(function (response) {
    return response.json()
})

.then(function (dog) {
    let main = document.getElementById('dog')    
    let img = document.createElement('img');
    img.setAttribute("src", dog.message)
    main.appendChild(img)        
})

*/
/* CAT 

fetch("https://thatcopy.pw/catapi/rest/")
.then(function (response) {
    return response.json()
})

.then(function (cat) {
    let main = document.getElementById('cat')    
    let img = document.createElement('img');
    img.setAttribute("src", cat.url)
    main.appendChild(img)   
})

*/
