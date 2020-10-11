const addMoviesToDom = (films) => {
    const movieContainer = document.getElementById("filmzoekercontainer");

    const filteredMovies = films.map((movie) => {
        const movieWebpage = "https://www.imdb.com/title/" + movie.imdbID;
        return "<li class='list-item'><a href=" + movieWebpage + "><img src=" + movie.Poster + "></a></li>";
    });

    filteredMovies.forEach((movie) => {
        movieContainer.innerHTML += movie
    });
};

addMoviesToDom(movies);

const addEventListeners = () => {
    const radiobuttons = document.querySelectorAll("input[name='movie-filter']");
    radiobuttons.forEach((radiobutton) => {
        radiobutton.addEventListener('change', (event) => {
            handleOnChangeEvent(event.target.value);
        });
    });
};

addEventListeners();

const handleOnChangeEvent = (movieName) => {
    switch (movieName) {
        default:
            console.log("Switchen tussen de verschillende filmfilters.");
            break;
        case "new-movies":
            filterLatestMovies();
            break;
        case "avengers-movies":
            filterMovies("Avenger");
            break;
        case "x-men-movies":
            filterMovies("X-Men");
            break;
        case "princess-movies":
            filterMovies("Princess");
            break;
        case "batman-movies":
            filterMovies("Batman");
    }
};

const removeFilter = () => {
    const liItems = document.querySelectorAll(".list-item");
    liItems.forEach(item => item.remove());
};

const filterMovies = (nameMovie) => {
    const filterMoviesResult = movies.filter((movie) => {
        return movie.Title.includes(nameMovie);
    });
    removeFilter();
    addMoviesToDom(filterMoviesResult);
};

const filterLatestMovies = () => {
    const filterLatestMoviesResult = movies.filter((movie) => {
        return parseInt(movie.Year) >= 2014;
    });
    removeFilter();
    addMoviesToDom(filterLatestMoviesResult);
};

