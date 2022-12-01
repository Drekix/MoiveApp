

const APILINK =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");



returnMoives(APILINK)
function returnMoives(url) {
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(Element => {
            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card");

            const div_row = document.createElement("div");
            div_row.setAttribute("class", "row");

            const div_colum = document.createElement("div");
            div_colum.setAttribute("class", "colum");

            const image = document.createElement("img");
            image.setAttribute("class", "thumbnail");
            image.setAttribute("id", "thumbnail");


            const title = document.createElement("h3");
            title.setAttribute("id", "title");

            const center = document.createElement("center");

            title.innerHTML = `${Element.title}`;
            image.src = IMG_PATH + Element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_colum.appendChild(div_card);
            div_row.appendChild(div_colum);
            
            main.appendChild(div_row);
            





        });

    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ""

    const searchItem = search.value;

    if (searchItem) {
        returnMoives(SEARCHAPI + searchItem);
        search.value = "";
    }
})