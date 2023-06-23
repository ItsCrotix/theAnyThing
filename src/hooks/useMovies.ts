import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { setMovieData } from "../redux/slices/movieSlice";
import { MovieData } from "../constants/types/movieData";

const cachedData = {} as MovieData;

const url =
  "https://t14397395.p.clickup-attachments.com/t14397395/2b1d2598-e425-4401-917c-821c7d73175c/home.json?view=open";

const useMovies = () => {
  const [isMovieDataLoading, setIsMovieDataLoading] = useState(true);
  const dispatch = useAppDispatch();

  const fetchMovies = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data as MovieData;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies().then((data) => {
      if (data) {
        dispatch(setMovieData(data));
      }

      setIsMovieDataLoading(false);
    });
  }, []);

  return { isMovieDataLoading };
};

export default useMovies;
