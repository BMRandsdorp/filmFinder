const movieBlock = document.getElementById(`movieBlock`);

const addMoviesToDom = function(movies){
    const movieList = movies.map((movie) => {
      const listedMovie = document.createElement("li");
      const movieLink = function() {
        const linkPageId = movie.imdbID;
        return "https://www.imdb.com/title/" + linkPageId; 
      };
      const imdbLink = document.createElement("a");
       imdbLink.href = (movieLink()); 
       imdbLink.target= "_blank"
      
      const moviePoster = document.createElement("img");
      moviePoster.setAttribute("src" , movie.poster);
      moviePoster.setAttribute("alt" , movie.title);
      listedMovie.appendChild(imdbLink);
      imdbLink.appendChild(moviePoster);
      return listedMovie;
    });
      while (movieBlock.firstChild){
        movieBlock.removeChild(movieBlock.lastChild);
      };
      movieList.forEach((node) => {
        movieBlock.appendChild(node);
    });
};
addMoviesToDom(movies)

const addEventListeners = function(){
  const radioBtn = document.querySelectorAll(`[name="movie-filter"]`);
  radioBtn.forEach(radio => radio.addEventListener("change", handleOnChangeEvent))
};
addEventListeners(); 

function handleOnChangeEvent(event) {
  switch (event.target.value){
    case "avenger":
        filterMovies("Avengers");
      break;
    case "x-men":
         filterMovies("X-Men")
      break;
    case "princess":
          filterMovies("Princess");
      break;    
    case "batman":
          filterMovies("Batman");
      break;
    case "latest":
          filterLatestMovies(2014)
      break;              
  }
};

function filterMovies(wordInMovie){
  let filterMovies = movies.filter((movie) => {
   if (movie.title.includes(wordInMovie)) {
      return (movie)
    }})
  addMoviesToDom(filterMovies);
};

function filterLatestMovies(year){
  let filterYearMovies = movies.filter((movie) => {
    if (movie.year >= (year)) {
       return (movie)
     }})
   addMoviesToDom(filterYearMovies);
};


/* bonus 
let search = document.getElementById(`text-finder`).value;

function textFilter(search){
//console.log(search);
  let filterMovies = movies.filter((movie) => {
    if (movie.title.includes(search)) {
       return (movie)
     }})
   addMoviesToDom(filterMovies);
};
console.log(textFilter()); */ 