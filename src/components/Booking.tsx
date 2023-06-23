import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
import Icon from "react-native-vector-icons/FontAwesome";
const Booking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.subText}>JE EIGEN FILMZAAL</Text>
        <Text style={styles.priceText}>VANAF €39</Text>
      </View>
      <View style={{ width: "40%" }}>
        <Button
          text="KIES LOCATIE"
          color="#2E31FF"
          iconRight={<Icon name="arrow-right" color="white" />}
        />
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#111111fa",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 8,
    padding: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },

  subText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "WorkSans_Regular",
    opacity: 0.8,
    letterSpacing: -0.33,
  },
  priceText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "WorkSans_Bold",
    letterSpacing: -0.5,
    lineHeight: 14,
  },
});
