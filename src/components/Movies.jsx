export function ListOfMovies({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <article key={movie.id} className="movie__card">
          <img
            src={movie.poster}
            alt={`${movie.title} Poster (${movie.year})`}
            title={`${movie.title} (${movie.year})`}
          />
          <aside>
            <div className="movie__text">
              <p>{movie.title}</p>
              <p>{movie.year}</p>
              {/* <p className="movie__type">
                <strong>Tipo:</strong> {movie.type}
              </p>
              <p>
                <strong>ID:</strong> {movie.id.slice(2)}
              </p> */}
            </div>
            <button className="movie__button">Ver más</button>
          </aside>
        </article>
      ))}
    </>
  );
}

function NoMoviesResults() {
  return (
    <p className="movie__no-results">
      No se encontraron películas para esta búsqueda.
    </p>
  );
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
