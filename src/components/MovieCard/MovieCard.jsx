export default function MovieCard({
    movie,
    id,
    poster,
    title,
    date,
    addTo }) {
    // console.log(addTo);


    function addMovies(movie) {
        const movieObj = {
            id,
            poster,
            title,
            date

        }
        addTo(movieObj);
    }

    return (
        <div className="card-div">
            <img className="poster"
                src={`https://image.tmdb.org/t/p/w300/${poster}`}
                alt={title}></img>
            <br />
            <br />
            <div className="searchTitle">
                {title}
            </div>
            <br />
            <button onClick={() => addMovies(movie)}>Add to Collection</button>
            <br />
            <br />
            <br />
        </div>
    );
}