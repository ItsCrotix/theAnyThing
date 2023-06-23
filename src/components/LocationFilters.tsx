import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Chip from "./Chip";

type LocationFiltersProps = {
  selectedFilters?: (filters: string[]) => void;
  isLocationEnabled?: (isEnabled: boolean) => void;
};

const possibleFilters = ["2 PEOPLE", "5 PEOPLE", "7 PEOPLE"];

const ItemSeparatorComponent = () => <View style={{ width: 8 }} />;

const LocationFilters = ({
  selectedFilters = () => {},
  isLocationEnabled = () => {},
}: LocationFiltersProps) => {
  const [filters, setFilters] = useState<string[]>([]);
  const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
  const keyExtractor = useCallback((title: string) => title, []);

  const handleFilters = useCallback((title: string) => {
    setFilters((prev) => {
      if (prev.includes(title)) return prev.filter((item) => item !== title);
      return [...prev, title];
    });
  }, []);

  useEffect(() => {
    selectedFilters(filters);
  }, [filters]);

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item: title }) => (
      <Chip
        title={title}
        onPress={handleFilters}
        isSelected={filters.includes(title)}
      />
    ),
    [filters]
  );

  useEffect(() => {
    isLocationEnabled(locationEnabled);
  }, [locationEnabled]);

  const headerItem = useCallback(() => {
    return (
      <View style={styles.headerItem}>
        <Chip
          icon={"location-arrow"}
          title={"MIJN LOCATIE"}
          onPress={() => setLocationEnabled(!locationEnabled)}
          isSelected={locationEnabled}
        />
      </View>
    );
  }, [locationEnabled]);

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={possibleFilters}
        horizontal
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        ListHeaderComponent={headerItem}
      />
    </View>
  );
};

export default LocationFilters;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  headerItem: {
    marginLeft: 16,
    marginRight: 8,
  },
});
