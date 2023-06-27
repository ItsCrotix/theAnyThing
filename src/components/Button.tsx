import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  text: string;
  color?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const Button = ({
  text,
  color = "#FFFFFF10",
  iconLeft,
  iconRight,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      {iconLeft && iconLeft}
      <Text style={styles.text}>{text}</Text>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 48,
    backgroundColor: "#FFFFFF20",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    gap: 8,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "WorkSans_Regular",
    letterSpacing: -0.5,
    lineHeight: 16,
  },
});
