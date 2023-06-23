import { FlatList, ListRenderItem, StyleSheet, View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import HeaderBar from "./components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import useInitialLoading from "./hooks/useInitialLoading";
import * as SplashScreen from "expo-splash-screen";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { selectMovieData } from "./redux/slices/movieSlice";
import HomeSection from "./components/HomeSection";
import { MovieComponent } from "./constants/types/MovieComponent";
import Button from "./components/Button";
import RootNavigator from "./navigators/RootNavigator";
import HomeScreen from "./screens/HomeScreen";

// Prevent native splash screen from autohiding before initialization is done
SplashScreen.preventAutoHideAsync();

const Main = () => {
  return <RootNavigator />;
};

export default Main;
