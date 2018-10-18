const baseURL = 'https://api.edamam.com/search?app_id=c52e81c0&app_key=4f48af9d1eb2f988a9a88b086a3b59af';
let url;
const searchTerm = document.querySelector('#search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const noGo = document.querySelector('#nogo')
const section = document.querySelector('#results');
searchForm.addEventListener('submit', fetchResults);
function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    url = baseURL + '&q=' + searchTerm.value + '&excluded=' + noGo.value;
    console.log(url);
    fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        }).then(function (json) {
            console.log(json);
            displayResults(json);
        });
}
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    let recipes = json.hits;
    console.log(recipes);
    if (recipes.length === 0) {
        console.log("No results");
    } else {
        for(let i = 0; i < recipes.length; i++) {
          let mainSlider = document.querySelector('#makeSlider');
          let div = document.createElement('div');
          let divCont = document.createElement('div');
          let heading = document.createElement('h2');
          let link = document.createElement('a');
          let current = recipes[i];
          let image = `url("${current.recipe.image}")`
          console.log(image);
          link.href = current.recipe.url;
          link.textContent = current.recipe.label;
          link.className = 'recipeLink'
          divCont.className = 'imageCapt';
          divCont.appendChild(heading);
          heading.appendChild(link);
          div.className = 'swiper-slide';
          div.style.backgroundImage = image;
          div.appendChild(divCont);
          section.appendChild(div);
            mainSlider.className = 'simple-slider';
        }
      }
    }