import {
  Animated,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useCallback, useRef } from "react";
import HomeSection from "../components/HomeSection";
import { MovieComponent } from "../constants/types/MovieComponent";
import useInitialLoading from "../hooks/useInitialLoading";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { selectMovieData } from "../redux/slices/movieSlice";
import * as SplashScreen from "expo-splash-screen";
import HeroHeader from "../components/HeroHeader";
import ListfooterComponent from "../components/HomeListFooter";

const HomeScreen = () => {
  const { isLoading } = useInitialLoading();
  const movieData = useAppSelector(selectMovieData);
  const offset = useRef(new Animated.Value(0)).current;

  // Hide splash screen on mount, initiated on component mount.
  // only re-renders on isLoading change
  const onLayoutRootView = useCallback(async () => {
    if (!isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  // Create a memoized version of the component so that it doesn't re-render in the flatlist
  const renderItem: ListRenderItem<MovieComponent> = useCallback(
    ({ item: componentData }) => {
      return <HomeSection componentData={componentData} />;
    },
    [movieData]
  );

  const keyExtractor = useCallback(
    (component: MovieComponent) => component.id.toString(),
    [movieData]
  );

  // While the initial data is loading, don't render anything.
  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <HeroHeader
        animatedValue={offset}
        componentData={movieData!.components.find(
          (comp) => comp.type === "heroHeader"
        )}
      />
      <Animated.FlatList
        style={{ paddingTop: 320 }}
        data={movieData!.components}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListfooterComponent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  absoluteGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 20,
  },
});
