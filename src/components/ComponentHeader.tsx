import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

type ComponentHeaderProps = {
  title: string;
  hasLink?: boolean;
};

const ComponentHeader = ({ title, hasLink }: ComponentHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.titleText, hasLink && { fontWeight: "bold" }]}>
        {title.toUpperCase()}
      </Text>
      {hasLink && (
        <TouchableHighlight
          activeOpacity={0.6}
          onPress={() => {
            console.log(`Pressed ${title} header SHOW All`);
          }}
        >
          <Text style={styles.linkText}>SHOW ALL</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default ComponentHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },
  titleText: {
    color: "white",
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  linkText: {
    color: "#2E31FF",
    fontSize: 12,
    lineHeight: 12,
  },
});
