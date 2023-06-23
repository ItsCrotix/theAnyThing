import { Animated } from "react-native";

const useAnimation = (anim: Animated.Value, duration: number = 200) => {
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(anim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(anim, {
      toValue: 0.4,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  return { fadeIn, fadeOut };
};

export default useAnimation;
