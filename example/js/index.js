
const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
let planets;
let planetInfo;
const sectionTwo = document.querySelector(`.partTwo`)
const sectionOne = document.querySelector(`.partOne`)

const figurePlanets = document.querySelectorAll(`figure`);

async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json(); //nycklar i en array
    //return data.key;
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        method: "GET",
        headers: {
            'x-zocom': 'solaris-4wOFSa0vV0WtlFYK' //  key
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
            sectionTwo.style.display = `flex`  
            sectionOne.style.display = `none`

        })
    })   

function createArticle(planets){

    sectionTwo.innerHTML = ``;
    let planetInfo = `<article  class="${planets.name}">
    <h1 class="headerA">${planets.name}</h1>
    <h6 class="headerB">${planets.latinName}</h6>
    <p>${planets.desc}</p><br>
        <aside>
        <p class="circumference"><span style='font-weight:bold'>Omkrets</span><br> ${planets.circumference}</p><p class="fromSun"><span style='font-weight:bold'>Kilometer från solen </span><br> ${planets.distance} km</p>
        <p><span style='font-weight:bold'>Max temperatur</span><br> ${planets.temp.day}</p><p class="minTemp" ><span style='font-weight:bold'>Min temperatur</span><br> ${planets.temp.night}</p>
        </aside>
    <div class="moons"> <span style='font-weight:bold'>Månar </span> <br> ${planets.moons.join(' ')} </div>
    <button class="buttonBack">Back</button>
    <figure class="blueSun"></figure>
    <figure class="blueSunLight"></figure>
    <figure class="blueSunLighter"></figure>
    <footer class="zocom"><img src="img/originalzocom.png" alt=""></footer> 
    </article> `
 
 sectionTwo.insertAdjacentHTML(`beforeend`, planetInfo)
 backToPlanets()

}

function backToPlanets(){
    const backBtn = document.querySelector(`.buttonBack`)
    backBtn.addEventListener(`click`, function(){
        sectionTwo.style.display = `none`  
        sectionOne.style.display = `flex`
    })
}

// Hämta API med nyckel.
// for each Planet for of loop, loppa ut planeterna till articlar.
// function displayarticle, visa articklarna på sidan sectonTwo
// skapa planeterna js eller html?
// länka artiklarna till planeterna med klickevent, 
// skapa click på knapp som backar tillbaka till planeterna
