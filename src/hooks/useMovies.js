import { useState, useRef, useMemo } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async () => {
      if (search == previousSearch.current) return;

      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;

        const newMovies = await searchMovies({ search });

        setMovies(newMovies);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    };
  }, [search]);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  // useEffect(() => {
  //   fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${input}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //console.log(data.Search);

  //       if (data.Search === undefined) {
  //         return setMovies(undefined);
  //       }
  //       const movieFilter = data.Search.filter(
  //         (movie) => movie.Type == "movie"
  //       );
  //       const moviePosterFilter = movieFilter.filter(
  //         (movie) => movie.Poster !== "N/A"
  //       );
  //       const movieYear = moviePosterFilter.sort((a, b) => b.Year - a.Year);
  //       setMovies(movieYear);
  //     });
  // }, [input]);

  return { movies: sortedMovies, getMovies, loading };
}
