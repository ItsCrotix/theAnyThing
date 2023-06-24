import {
  Animated,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovieComponent } from "../constants/types/MovieComponent";
import formatImageUrl, { ImageFormat } from "../constants/enums/formatImageUrl";
import HeaderBar from "./HeaderBar";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
type HeroHeaderProps = {
  componentData: MovieComponent | undefined;
  animatedValue: Animated.Value;
};

const HEADER_MAX_HEIGHT = 320;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HeroHeader = ({ animatedValue, componentData }: HeroHeaderProps) => {
  if (!componentData) return null;

  const insets = useSafeAreaInsets();

  const { image } = componentData;

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT + insets.top],
    extrapolate: "clamp",
  });

  const headerOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });

  const imageUri = formatImageUrl(image!, ImageFormat.HomeHeroHeader);

  return (
    <Animated.View style={[styles.container, { height: headerHeight }]}>
      <Animated.Image
        style={[styles.backgroundImage, { opacity: headerOpacity }]}
        source={{ uri: imageUri }}
      />
      <LinearGradient
        style={styles.bottomGradient}
        colors={["#00000000", "#000"]}
      />
      <Animated.View style={{ height: headerHeight }}>
        <LinearGradient
          style={[styles.gradient, { paddingTop: insets.top }]}
          colors={["#000", "#00000000"]}
        >
          <HeaderBar />
        </LinearGradient>
      </Animated.View>
      <Animated.View style={styles.headerTextContainer}>
        <Animated.Text style={[styles.heroText, { opacity: headerOpacity }]}>
          {componentData.title}
        </Animated.Text>
        <TouchableOpacity>
          <Animated.View
            style={[styles.buttonContainer, { opacity: headerOpacity }]}
          >
            <Icon name="arrow-right" size={12} color="#fff" />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default HeroHeader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#000",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
  buttonContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2E31FF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    maxWidth: "100%",
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  heroText: {
    width: "80%",
    color: "#fff",
    fontSize: 40,
    fontFamily: "Canopee_Regular",
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
});
