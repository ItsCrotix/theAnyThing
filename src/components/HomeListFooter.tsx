import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";

const HomeListFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.topText}>
        <Text style={styles.footerText}>LOOKING FOR</Text>
      </View>
      <View style={styles.bottomText}>
        <Text style={styles.footerText}>
          <Text style={styles.footerTextEmphasis}>(</Text>MORE
          <Text style={styles.footerTextEmphasis}>)</Text> THINGS ?
        </Text>
      </View>
      <Button text={"SEE ALL MOVIES"} />
    </View>
  );
};

export default HomeListFooter;

const styles = StyleSheet.create({
  footerContainer: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingBottom: 400,
  },
  footerText: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "WorkSans_Bold",
    letterSpacing: -4,
    lineHeight: 40,
  },
  footerTextEmphasis: {
    color: "#2E31FF",
    fontSize: 40,
    fontFamily: "Canopee_Regular",
    textAlign: "center",
    letterSpacing: -4,
    lineHeight: 40,
  },
  bottomText: {
    marginTop: -10,
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  topText: {
    width: "100%",
    alignItems: "flex-start",
  },
});
