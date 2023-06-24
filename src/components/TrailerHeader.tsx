import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { Video, ResizeMode, VideoFullscreenUpdateEvent } from "expo-av";
import LinearGradient from "react-native-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import MovieButtonRow from "./MovieButtonRow";
import * as ScreenOrientation from "expo-screen-orientation";
import formatImageUrl, { ImageFormat } from "../constants/enums/formatImageUrl";

type TrailerHeaderProps = {
  videoUrl: string;
  title: string;
  language: string;
  genres: string[];
  duration: string;
  placeholderImage: string;
};

const TrailerHeader = ({
  videoUrl,
  placeholderImage,
  title,
  duration,
  language,
  genres,
}: TrailerHeaderProps) => {
  const video = React.useRef<Video>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const image = formatImageUrl(placeholderImage, ImageFormat.DetailHeader);

  console.log(image);
  useFocusEffect(
    useCallback(() => {
      const timeout = setTimeout(() => {
        setPlaying(true);
      }, 2000);
      return () => {
        setPlaying(false);
        clearTimeout(timeout);
      };
    }, [])
  );

  const handleFullscreenUpdate = useCallback(
    async (status: VideoFullscreenUpdateEvent) => {
      if (status.fullscreenUpdate === 1) {
        setVolume(1);
      }

      if (status.fullscreenUpdate === 3) {
        setVolume(0);
        setPlaying(true);
      }
    },
    []
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        video.current?.presentFullscreenPlayer();
      }}
    >
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        onLoad={() => setVideoLoaded(true)}
        resizeMode={ResizeMode.COVER}
        isLooping
        volume={volume}
        shouldPlay={playing}
        onFullscreenUpdate={handleFullscreenUpdate}
      >
        {!videoLoaded && (
          <ImageBackground
            source={{ uri: image }}
            resizeMode="contain"
            style={[styles.videoOverlay]}
          />
        )}
        <LinearGradient
          style={styles.videoOverlay}
          colors={["#000000aa", "#000"]}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitleText}>{title.toUpperCase()}</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={styles.headerSubText}>{duration}</Text>
            <Text
              style={[styles.headerSubText, { fontFamily: "WorkSans_Bold" }]}
            >
              {genres[0]}
            </Text>
          </View>
          <Text style={styles.headerSubText}>
            <Text style={{ fontFamily: "WorkSans_Bold" }}>Audio: </Text>
            {language}
          </Text>
          <MovieButtonRow />
        </View>
      </Video>
    </TouchableWithoutFeedback>
  );
};

export default TrailerHeader;

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    height: 400,
    width: "100%",
  },
  videoOverlay: {
    position: "absolute",
    height: 400,
    width: "100%",
    zIndex: 10,
  },
  headerTextContainer: {
    width: "100%",
    alignItems: "center",

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 24,
    zIndex: 11,
  },
  headerTitleText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontFamily: "WorkSans_Bold",
  },
  headerSubText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "WorkSans_Regular",
    opacity: 0.8,
    paddingVertical: 2,
  },
});
