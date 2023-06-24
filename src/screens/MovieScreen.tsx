import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeNavigatorParamList } from "../constants/types/Navigation";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import TrailerHeader from "../components/TrailerHeader";
import TagList from "../components/TagList";
import HomeSection from "../components/HomeSection";
import { MovieComponent } from "../constants/types/MovieComponent";
import Booking from "../components/Booking";

type Props = NativeStackScreenProps<HomeNavigatorParamList, "Movie">;

const MovieScreen = ({ navigation, route }: Props) => {
  // Can be used to navigate back on bad load

  const { movieData } = route.params;
  const metaData = useMemo(
    () => movieData.components.find((comp) => comp.type === "movieMetadata"),
    [movieData]
  );
  const trailerData = useMemo(
    () => movieData.components.find((comp) => comp.type === "trailer"),
    [movieData]
  );

  const tagLists = useMemo(
    () => movieData.components.filter((comp) => comp.type === "tagList"),
    [movieData]
  );

  const lanes = useMemo(
    () => movieData.components.filter((comp) => comp.type === "lane"),
    [movieData]
  );

  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={[styles.container, { marginTop: -insets.top }]}>
        <TrailerHeader
          title={metaData!.title!}
          videoUrl={trailerData!.video!.url!}
          duration={metaData!.duration!}
          genres={metaData!.genres?.map((genre) => genre.text)!}
          language={metaData!.originalLanguage!}
          placeholderImage={metaData!.background?.url!}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{metaData!.content}</Text>
        </View>
        {tagLists.map((tagList) => (
          <TagList
            id={tagList.id}
            title={tagList.title!}
            tags={tagList.items!}
          />
        ))}
        {lanes.map((lane) => (
          <HomeSection componentData={lane as MovieComponent} />
        ))}
        <View style={{ height: 140 }} />
      </ScrollView>

      <Booking />
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    flex: 1,
    marginTop: 420,
    paddingHorizontal: 16,
  },
  contentText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "WorkSans_Regular",
    opacity: 0.6,
    lineHeight: 22,
  },
});
