export function ListOfMovies({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <article key={movie.imdbID} className="movie__card">
          <img
            src={movie.Poster}
            alt={`${movie.Title} Poster (${movie.Year})`}
            title={`${movie.Title} (${movie.Year})`}
          />
          <aside className="movie__text">
            <p>
              <strong>Título:</strong> {movie.Title}
            </p>
            <p>
              <strong>Año:</strong> {movie.Year}
            </p>
            <p className="movie__type">
              <strong>Tipo:</strong> {movie.Type}
            </p>
            <p>
              <strong>ID:</strong> {movie.imdbID.slice(2)}
            </p>
          </aside>
        </article>
      ))}
    </>
  );
}

function NoMoviesResults() {
  return <p>No se encontraron películas para esta búsqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
