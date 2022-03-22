// const imgpath = document.getElementById('imgpath');
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const img = document.getElementById('img');
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getMovies(APIURL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        
        showMovies(data.results);
    })
}

function showMovies(data ){
    main.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path ,vote_average,overview} = movie;

//!Creation des balise
const movieEl = document.createElement('div');
const img = document.createElement('img');
const divinfo = document.createElement('div');
const h3 = document.createElement('h3');
const span = document.createElement('span');
const ovserview = document.createElement('div')
const h3info = document.createElement('h3')


//!attribution des class 
img.setAttribute('class','img');
divinfo.setAttribute('class', 'movie-info');
h3.setAttribute('class', 'lh3');
h3.innerText = title;
span.setAttribute('class', getcolor(vote_average));
span.innerHTML = vote_average;
ovserview.setAttribute('class', 'overview');
movieEl.setAttribute('class', 'movie');
h3info.setAttribute('class', 'h3info');
img.setAttribute('src', IMGPATH+poster_path)
ovserview.textContent = overview;

//!Chargement de parrents


main.appendChild(movieEl);
movieEl.appendChild(img)
movieEl.appendChild(divinfo)
movieEl.appendChild(ovserview)

ovserview.appendChild(h3info);
divinfo.appendChild(h3)
divinfo.appendChild(span)
    })
}

function getcolor(vote){
    if (vote>=8){
        return 'green'
    }else if(vote>=5){
        return "orange"
        }else{
            return "red"
        }
}


form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm){
        getMovies(SEARCHAPI+ searchTerm)
    }

})

    




// const {title, poster_path ,vote_average,overview} = movie;
// const movieEl = document.createElement('div');
// movieEl.classList.add('movie');
// movieEl.innerHTML = `   <img src="${IMGPATH+poster_path }" alt="">
// <div class="movie-info">
//     <h3>${title}</h3>
//     <span class="${getcolor(vote_average)}">${vote_average}</span>
// </div>
// <div class="overview">
//     <h3>overview</h3>
//     ${overview}
    
// </div>`
// main.appendChild(movieEl);


























































// fetch(APIURL).then(function (response)
// {
//     return response.json();
// })

// .then(function(response)
// {
//   let apiimage =  (IMGPATH+response.results[0].backdrop_path)
//     img.src=apiimage 
//     return apiimage
// })


