import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { selectFirstName } from "../redux/slices/userSlice";
import Icon from "react-native-vector-icons/FontAwesome";

const HeaderBar = () => {
  const firstName = useAppSelector(selectFirstName);

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontFamily: "WorkSans_Bold",
        }}
      >
        HI AGAIN {firstName.toUpperCase()}
      </Text>
      <View style={styles.iconView}>
        <TouchableOpacity>
          <Icon name="bell-o" size={18} color="#fff"></Icon>
          <View style={styles.notification} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 11,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  notification: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2E31FF",
    position: "absolute",
    top: -4,
    right: 0,
  },
});
