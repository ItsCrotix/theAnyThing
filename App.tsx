import Main from "./src/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </Provider>
  );
};

export default App;
