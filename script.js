async function fetchMovies() {
    const genre = document.getElementById("genre-select").value;
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "<li>Loading...</li>";

    const API_KEY = "AIzaSyDc2hXZg3QiBQZX2rBc3yWGf40vTe8WA68";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
        contents: [{
            parts: [{ text: `List 10 movies in the ${genre} genre. i need different outputs every time` }]
        }]
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        movieList.innerHTML = "";

        if (data && data.candidates && data.candidates.length > 0) {
            const movies = data.candidates[0].content.parts[0].text.split("\n");

            movies.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = movie;
                movieList.appendChild(li);
            });
        } else {
            movieList.innerHTML = "<li>No movies found</li>";
        }
    } catch (error) {
        movieList.innerHTML = "<li>Error fetching movies</li>";
        console.error(error);
    }
}
