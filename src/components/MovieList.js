import Movie from "./Movie";
import './MovieList.css';

function MoviList(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {
                movies.length ? movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie} />
                }) : <h2>Nothing found</h2>
            }
        </div>
    )
}

export default MoviList;