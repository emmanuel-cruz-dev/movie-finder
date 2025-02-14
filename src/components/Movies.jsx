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
          <aside className="movie__text">
            <p>
              <strong>Título:</strong> {movie.title}
            </p>
            <p>
              <strong>Año:</strong> {movie.year}
            </p>
            <p className="movie__type">
              <strong>Tipo:</strong> {movie.type}
            </p>
            <p>
              <strong>ID:</strong> {movie.id.slice(2)}
            </p>
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
