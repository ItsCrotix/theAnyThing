import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Chip from "./Chip";

type LocationInfoProps = {
  capacity: number;
  distance?: number;
  locationEnabled?: boolean;
};

const LocationInfo = ({
  capacity,
  distance = 0,
  locationEnabled = false,
}: LocationInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {locationEnabled && (
          <Chip
            icon="location-arrow"
            title={`${distance} KM`}
            iconSize={12}
            disabled
          />
        )}
        <Chip title={`${capacity} PEOPLE`} disabled />
      </View>
    </View>
  );
};

export default LocationInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
