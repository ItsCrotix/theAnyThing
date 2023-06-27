import React, { useMemo } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Movie } from "../constants/types/Movie";
import formatImageUrl, { ImageFormat } from "../constants/enums/formatImageUrl";

type SpotlightCardProps = {
  category: Movie;
  isFirstElement: boolean;
  isLastElement: boolean;
};

const SpotlightCard = ({
  category,
  isFirstElement,
  isLastElement,
}: SpotlightCardProps) => {
  const { image } = category;

  const imageUri = useMemo(() => {
    if (!image) return "";
    return formatImageUrl(image, ImageFormat.SpotlightLaneItem);
  }, [image]);

  const extraStyles = useMemo(() => {
    if (isFirstElement)
      return { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 };
    if (isLastElement)
      return { borderTopRightRadius: 8, borderBottomRightRadius: 8 };
    return {};
  }, [isFirstElement, isLastElement]);

  return (
    <View style={[styles.container, extraStyles]}>
      <ImageBackground
        source={{ uri: imageUri }}
        resizeMode="cover"
        style={[styles.image]}
      />
    </View>
  );
};

export default SpotlightCard;

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 400,
    backgroundColor: "#2E31FF",
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
