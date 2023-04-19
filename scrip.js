
//Funzione per rimuovere il link twitter
// il numero tra le quadre contiente l'indice dell'array di restituzione 
 let twitter= document.getElementsByClassName("list-unstyled") [1] 
 twitter = twitter.children[1].innerText =""
 console.log(twitter);


// funzione per rimuovere il posto dopo il click di "continua a leggere"

let linkOff = document.getElementsByClassName("stretched-link");

console.log(linkOff);

for ( let deleteItem of linkOff ) {
    deleteItem.addEventListener("click", (event) => {
        event.target.parentNode.parentNode.parentNode.remove();
        //.parentNode e .childNode sevono per servono per salire di livello dei div padri o figli
    })
}


let firstA =document.querySelector(".font-weight-bold");
console.log(firstA);

firstA.addEventListener("click", (event) => {
    event.target.remove();
} )

// Col .querySelectorAll seleziono gli elementi utilizzando le classi come si scrive in css 
// Col for Of creo una variabile che va a ciclare gli elementi contenuti nell'array restituito dal querySelectorAll che al passaggio del mouse creino un alert grazie al addEventListener. 
let autori = document.querySelectorAll(".blog-post-meta a");
console.log(autori);


for (const autore of autori) {
    autore.addEventListener("mouseover", () => {
        alert(autore.innerText);
    });
    }


