import {
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import useAnimation from "../hooks/useAnimation";
import Icon from "react-native-vector-icons/FontAwesome";

type ChipProps = {
  title: string;
  icon?: string;
  isSelected?: boolean;
  disabled?: boolean;

  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  iconSize?: number;
  onPress?: (title: string) => void;
};

const Chip = ({
  title,
  icon,
  isSelected,
  containerStyle,
  textStyle,
  iconStyle,
  iconSize = 18,
  disabled = false,
  onPress = () => {},
}: ChipProps) => {
  const opacityChangeAnim = useRef(new Animated.Value(0.4)).current;
  const { fadeIn, fadeOut } = useAnimation(opacityChangeAnim);
  const [color, setColor] = useState<string>("#fff");

  useEffect(() => {
    if (isSelected) {
      fadeIn();
      setColor("#2E31FF");
    } else {
      fadeOut();
      setColor("#fff");
    }
  }, [isSelected]);

  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(title)}
      disabled={disabled}
    >
      <Animated.View
        style={[
          styles.container,
          disabled ? styles.disabledContainer : { opacity: opacityChangeAnim },
          containerStyle,
        ]}
      >
        {icon && (
          <Icon
            name={icon}
            size={iconSize}
            style={[styles.icon, { color: color }, iconStyle]}
          />
        )}
        <Text style={[styles.titleText, textStyle]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 16,
    opacity: 0.8,
    marginBottom: 16,
  },
  disabledContainer: {
    backgroundColor: "#FFFFFF33",
    borderWidth: 0,
  },
  inactiveContainer: {
    opacity: 0.6,
  },
  titleText: {
    color: "#fff",
    fontSize: 12,
  },
  icon: {
    marginRight: 8,
  },
});
