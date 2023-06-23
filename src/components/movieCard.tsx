import React, { useMemo } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Movie } from "../constants/types/Movie";
import formatImageUrl, { ImageFormat } from "../constants/enums/formatImageUrl";
import { useNavigation } from "@react-navigation/native";
import { MovieCardNavigationProp } from "../constants/types/Navigation";
import { movieData } from "../constants/moviedata";

type movieCardProps = {
  movie: Movie;
};

type ErrorCardProps = {
  error: string;
};

const ErrorCard = ({ error }: ErrorCardProps) => {
  return (
    <View style={[styles.container, styles.errorContainer]}>
      <Text style={styles.errorText}>{error.toUpperCase()}</Text>
    </View>
  );
};

const MovieCard = ({ movie }: movieCardProps) => {
  const navigation = useNavigation<MovieCardNavigationProp>();

  const { posterImage } = movie;

  const imageUri = useMemo(() => {
    if (!posterImage) return "";
    return formatImageUrl(posterImage, ImageFormat.ProductLaneItem);
  }, [posterImage]);

  if (!movie) {
    return <ErrorCard error="Movie is lost in space" />;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Movie", { movieData: movieData })}
    >
      {imageUri === "" ? (
        <ErrorCard error="No image found" />
      ) : (
        <ImageBackground
          source={{ uri: imageUri }}
          resizeMode="cover"
          style={[styles.image]}
        />
      )}
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 200,
    backgroundColor: "#2E31FF",
    borderRadius: 5,
    overflow: "hidden",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "white",
    fontFamily: "WorkSans_Bold",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
