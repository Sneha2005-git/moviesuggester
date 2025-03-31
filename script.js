async function fetchMovies() {
    const genre = document.getElementById("genre-select").value;
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "<li>Loading...</li>";

    try {
        const response = await fetch(`https://api.example.com/gemini?genre=${genre}`);
        const data = await response.json();
        
        movieList.innerHTML = "";
        data.movies.slice(0, 10).forEach(movie => {
            const li = document.createElement("li");
            li.textContent = movie.title;
            movieList.appendChild(li);
        });
    } catch (error) {
        movieList.innerHTML = "<li>Error fetching movies</li>";
        console.error(error);
    }
}
