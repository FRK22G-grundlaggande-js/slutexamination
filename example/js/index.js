
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
let planets;
const sectionTwo = document.querySelector(`.partTwo`)
const sectionOne = document.querySelector(`.partOne`)
const btn = document.querySelector(`button`)
const figurePlanets = document.querySelectorAll(`figure`);
let fetchedPlanets = []

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        method: "GET",
        headers: {
            'x-zocom': 'solaris-4wOFSa0vV0WtlFYK'
        }
    });
    
    const data = await response.json();
    planets = data.bodies
    console.log(data);
    console.log(planets)
}
async function runCode(){

    await getKey();
    await getPlanets()
    displayArticle()
    PlanetSystem()
    //connectArticleToPlanet()
  
  }
runCode()

/* function connectArticleToPlanet(){
     planet Id = figurePlanets.currentTarget; // den hämtar id från html
     const planetId = planets.id
} */

function PlanetSystem(){

        figurePlanets.addEventListener(`click`, function(){
            figurePlanets.pusch(fetchedPlanets)//lägg in i array för att jämföra namn med artikel namn
            console.log(fetchedPlanets)
            console.log(figurePlanets)

            sectionTwo.style.display = `block`  
            sectionOne.style.display = `none`
               
        })
    
    
    
}
 



function createArticle(planets){
    let planetInfo = `<article>
    <h1>${planets.name}</h1>
    <h6>${planets.latinName}</h6>
    <p>${planets.desc}</p>
    </article> `
 console.log(planetInfo)
 
 sectionTwo.insertAdjacentHTML(`beforeend`, planetInfo)

}
function displayArticle(){

    for( let planet of planets) {
       createArticle(planet)
    }
}

function backToPlanets(){
    btn.addEventListener(`click`, function(){
        sectionTwo.style.display = `none`  
        sectionOne.style.display = `block`
    })
}
backToPlanets()

// Hämta API med nyckel.
//for each Planet for of loop, loppa ut planeterna till articlar.
//function displayarticle, visa articklarna på sidan sectonTwo
// skapa planeterna js eller html?
// länka artiklarna till planeterna med klickevent
// skapa click på knapp som backar tillbaka till planeterna
//