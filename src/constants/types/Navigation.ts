import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MovieHome } from "./MovieHome";

export type TabParamList = {
  ROOT_HOME: undefined;
};

export type HomeNavigatorParamList = {
  Home: undefined;
  Movie: { movieData: MovieHome };
};

export type MovieCardNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "ROOT_HOME">,
  NativeStackNavigationProp<HomeNavigatorParamList>
>;
