import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import { HomeNavigatorParamList } from "../constants/types/Navigation";

const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{
          presentation: "modal",
          gestureDirection: "vertical",
          headerShown: false,
        }}
        name="Movie"
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
