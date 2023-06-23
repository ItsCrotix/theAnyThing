import React from "react";
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from "./HomeNavigator";
import { TabParamList } from "../constants/types/Navigation";

const Tab = createBottomTabNavigator<TabParamList>();

const CustomTabBar = (props: BottomTabBarProps) => {
  return <BottomTabBar {...props} />;
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={CustomTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#FFFFFF20",
        tabBarItemStyle: {},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="ROOT_HOME"
        component={HomeNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size }) => {
            if (!focused) {
              return <Icon name="square-o" size={size} color={"#FFF"} />;
            }
            return <Icon name="square" size={size} color={"#2E31FF"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
