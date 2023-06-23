import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";

const HomeListFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>LOOKING FOR</Text>
      <View style={styles.emphasisContainer}>
        <Text style={styles.footerTextEmphasis}>(</Text>
        <Text style={styles.footerText}>MORE</Text>
        <Text style={styles.footerTextEmphasis}>)</Text>
        <Text style={styles.footerText}> THINGS ?</Text>
      </View>
      <Button text={"SEE ALL MOVIES"} />
    </View>
  );
};

export default HomeListFooter;

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 36,
    paddingBottom: 400,
  },
  emphasisContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  footerText: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "WorkSans_Bold",
    letterSpacing: -4,
  },
  footerTextEmphasis: {
    color: "#2E31FF",
    fontSize: 40,
    fontFamily: "Canopee_Regular",
    textAlign: "center",
    letterSpacing: -4,
  },
});
