//let key = 
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
let planets;
let planetInfo;
const sectionTwo = document.querySelector(`.partTwo`)
const sectionOne = document.querySelector(`.partOne`)
const btn = document.querySelector(`.buttonBack`)
const figurePlanets = document.querySelectorAll(`figure`);

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
  }
runCode()

    figurePlanets.forEach((figurePlanets, index) => {
        figurePlanets.addEventListener('click', (e) => {
            const clickedPlanet =  planets[index]//planeten du klickat på
            console.log(index)
            createArticle(clickedPlanet)
            sectionTwo.style.display = `block`  
            sectionOne.style.display = `none`

        })
    })   

function createArticle(planets){

    sectionTwo.innerHTML = ``;
    let planetInfo = `<article  class="${planets.name}">
    <h1>${planets.name}</h1>
    <h6>${planets.latinName}</h6>
    <p>${planets.desc}</p><br>
        <aside>
        <p>Omkrets ${planets.circumference}</p><p>Kilometer från solen ${planets.distance}</p><br>
        <p>Max temperatur ${planets.temp.day}</p><p>Min temperatur ${planets.temp.night}</p>
        </aside>
    <p>Månar: ${planets.moons}</p>
    <button class="buttonBack">Back</button>
    <footer><img src="img/originalzocom.png" alt=""></footer> 
    </article> `
 console.log(planetInfo)
 
 sectionTwo.insertAdjacentHTML(`beforeend`, planetInfo)
}

function backToPlanets(){
    btn.addEventListener(`click`, function(){
        sectionTwo.style.display = `none`  
        sectionOne.style.display = `block`
    })
}
backToPlanets()

// Hämta API med nyckel.
// for each Planet for of loop, loppa ut planeterna till articlar.
// function displayarticle, visa articklarna på sidan sectonTwo
// skapa planeterna js eller html?
// länka artiklarna till planeterna med klickevent, 
// skapa click på knapp som backar tillbaka till planeterna
