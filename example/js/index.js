
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
let planets;
const sectionTwo = document.querySelector(`.partTwo`)
const sectionOne = document.querySelector(`.partOne`)
const btn = document.querySelector(`button`)
const figurePlanet = document.querySelector(`figurePlanet1`)
//const figures = []
//const article = []

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies?`, {
        headers: {
            'x-zocom': 'solaris-4wOFSa0vV0WtlFYK'
        }
    });
    const data = await response.json();
    planets = data.bodies
    console.log(data);
    console.log(planets)
}
async function init(){

    await getKey();
    await getPlanets();
  
  }
init()

/* function createPlanets(){

   figurePlanet.addEventListener(`click`, function(){
        figurePlanet.push(figues)


         if (figures === article){
            sectionTwo.style.display = `block`  
            sectionOne.style.display = `none`
            displayArticle()
         }  
   })

} */

function createArticle(planets){
    let planetInfo = `<article>
    <h1>${planets.latinName}</h1>
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
// skapa click på sidna som backar tillbaka till planeterna
//