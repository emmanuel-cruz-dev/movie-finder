import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export function useMovies(input) {
  const [movies, setMovies] = useState();

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie,
    poster: movie.Poster,
  }));

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${input}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Search);

        if (data.Search === undefined) {
          return setMovies(undefined);
        }
        const movieFilter = data.Search.filter(
          (movie) => movie.Type == "movie"
        );
        const moviePosterFilter = movieFilter.filter(
          (movie) => movie.Poster !== "N/A"
        );
        const movieYear = moviePosterFilter.sort((a, b) => b.Year - a.Year);
        setMovies(movieYear);
      });
  }, [input]);

  return { movies: mappedMovies };
}
