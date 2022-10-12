import { Link } from 'react-router-dom';

export default function ({ movie }) {
    return (
        <>
            <div className="ColGrid2 container">
                <Link to={`details/${movie._id}`}>
                    <img className="cov-img" key={movie.title} src={movie.cover_image} alt="movie-img" height="150px"></img>
                    <div className="overlay"></div>
                </Link>
            </div>
        </>
    );
}