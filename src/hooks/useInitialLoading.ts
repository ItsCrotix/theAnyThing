import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import useMovies from "./useMovies";

const useInitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isMovieDataLoading } = useMovies();
  const [loaded] = useFonts({
    Canopee_Regular: require("../assets/fonts/Canopee-Regular.otf"),
    WorkSans_Bold: require("../assets/fonts/WorkSans-Bold.ttf"),
    WorkSans_Regular: require("../assets/fonts/WorkSans-Regular.ttf"),
    WorkSans_Medium: require("../assets/fonts/WorkSans-Medium.ttf"),
    WorkSans_semiBold: require("../assets/fonts/WorkSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (!isMovieDataLoading && loaded) {
      setIsLoading(false);
    }
  }, [isMovieDataLoading, loaded]);

  return { isLoading };
};

export default useInitialLoading;
