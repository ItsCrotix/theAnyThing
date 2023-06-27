import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { VenueLocation } from "../constants/locations";
import LinearGradient from "react-native-linear-gradient";
import LocationInfo from "./LocationInfo";
import Icon from "react-native-vector-icons/FontAwesome";
import Chip from "./Chip";

type LocationCardProps = {
  location: VenueLocation;
  bookmarked?: boolean;
  distance?: number;
  locationEnabled?: boolean;
};

const LocationCard = ({
  location,
  bookmarked = false,
  distance = 0,
  locationEnabled = false,
}: LocationCardProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: location.image }}
        resizeMode="cover"
        style={[styles.image]}
      >
        <LinearGradient
          colors={["transparent", "#000000aa"]}
          style={styles.gradientContainer}
        >
          <Text style={styles.nameText}>{location.name.toUpperCase()}</Text>
          <Text style={styles.locationText}>
            {location.location.toUpperCase()}
          </Text>
          <LocationInfo
            capacity={location.pax}
            locationEnabled={locationEnabled}
            distance={distance}
          />
        </LinearGradient>
      </ImageBackground>

      <View style={{ position: "absolute", right: 12, top: 16 }}>
        <Chip
          containerStyle={styles.priceChipContainer}
          textStyle={styles.priceChipText}
          title={"€29"}
          disabled
        />
      </View>
      {bookmarked && (
        <View
          style={{
            position: "absolute",
            top: -2,
            left: 12,
          }}
        >
          <Icon name="bookmark" size={24} color="#2E31FF" />
        </View>
      )}
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 240,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  nameText: {
    fontSize: 24,
    fontFamily: "WorkSans_Bold",
    color: "#fff",
    letterSpacing: -1,
    lineHeight: 22,
  },
  locationText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "WorkSans_Regular",
    opacity: 0.8,
    letterSpacing: -0.33,
  },
  gradientContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 12,
  },
  priceChipContainer: {
    backgroundColor: "#2E31FF",
    opacity: 1,
    paddingHorizontal: 12,
  },
  priceChipText: {
    color: "#fff",
    fontFamily: "WorkSans_Bold",
    letterSpacing: -0.5,
    lineHeight: 14,
  },
});
