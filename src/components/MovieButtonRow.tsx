import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const MovieButtonRow = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.ctaButton}>
          <Icon
            style={{ marginTop: -6 }}
            name="thumbs-o-up"
            color={"white"}
            size={12}
          />

          <Icon
            // @ts-ignore
            style={{ marginBottom: -6, transform: "scaleX(-1)" }}
            name="thumbs-o-down"
            color={"white"}
            size={12}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.ctaButton}>
          <Icon name="bookmark-o" size={24} color={"white"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieButtonRow;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 16,
    zIndex: 11,
  },
  ctaButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff11",
  },
});
