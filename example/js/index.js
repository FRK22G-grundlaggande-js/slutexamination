
const APIKey = `solaris-vKkkQHqQboi7c6JF`
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
let planets;
const sectionTwo = document.querySelector(`.partTwo`)
const sectionOne = document.querySelector(`.partOne`)
// API nyckel att använda ifall man enbart siktar på godkänt: solaris-vKkkQHqQboi7c6JF


async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies/?`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    const data = await response.json();
    planets = data.bodies
    console.log(data);
}

getKey();
getPlanets();


function createPlanets(){

}

function createArticle(planets){
    let planetInfo = `<article>
    '${planets.name}'
    '${planets.latinName}'
    </article> `
 console.log(planetInfo)
 
 sectionTwo.insertAdjacentHTML(`beforeend`, planetInfo)

}
function displayArticle(){

    for( let planets of planets) {
       createArticle(planets)
     
    }
}







function backToPlanets(){
    sectionTwo.addEventListener(`click`, function(){
        sectionTwo.style.display = `none`  
        sectionOne.style.display = `block`
    })
}
backToPlanets()

// Hämta API med nyckel.
//for each Planet for of loop, loppa ut planeterna till articlar.
//function displayarticle, visa articklarna på sidan sectonTwo
// skapa planeterna
// länka artiklarna till planeterna med klickevent
// skapa click på sidna som backar tillbaka till planeterna