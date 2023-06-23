// Module imports
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, View, Text } from "react-native";

// Component imports
import MovieCard from "./movieCard";
import ComponentHeader from "./ComponentHeader";

// Type imports
import { Movie } from "../constants/types/Movie";
import { MovieComponent } from "../constants/types/MovieComponent";
import SpotlightCard from "./SpotlightCard";
import LocationFilters from "./LocationFilters";
import { VenueLocation, locationList } from "../constants/locations";
import LocationCard from "./LocationCard";

// Type definitions
type HomeSectionProps = {
  componentData: MovieComponent;
};

// Separator and header components for the flatlist
const ItemSeparatorComponent = () => <View style={{ width: 8 }} />;
const ListHeaderComponent = () => <View style={{ width: 16 }} />;

// Component definition
const HomeSection = ({ componentData }: HomeSectionProps) => {
  const [locationEnabled, setLocationEnabled] = useState<boolean>(false);

  const isNotSpotlightLane = useMemo(
    () => componentData.laneType !== "spotlight-lane",
    [componentData]
  );

  const isLocationLane = useMemo(
    () => componentData.apiCall === "Locations",
    [componentData]
  );

  const [filteredLocations, setFilteredLocations] = useState<VenueLocation[]>(
    []
  );

  const keyExtractor = useCallback(
    (movie: Movie | VenueLocation) => movie.id.toString(),
    []
  );

  const handleFilters = useCallback((filters: string[]) => {
    if (filters.length === 0) return setFilteredLocations(locationList.items);

    // Sloppy solution to extract a number from filter string
    const higestPax = Math.max(...filters.map((filter) => parseInt(filter)));

    setFilteredLocations(
      locationList.items.filter((location) => {
        return location.pax <= higestPax;
      })
    );
  }, []);

  // Create a memoized version of the renderItem so that it doesn't re-render in the flatlist
  const renderItem: ListRenderItem<Movie | VenueLocation> = useCallback(
    ({ item: movie, index }) => {
      // check if the object has a porperty called image, so we know we have the VenueLocation object
      if (movie.type === "location") {
        return (
          <LocationCard
            location={movie}
            bookmarked={movie.bookmarked}
            locationEnabled={locationEnabled}
            distance={movie.distance}
          />
        );
      }

      // If the laneType is spotlight-lane, render the spotlight card
      if (componentData.laneType === "spotlight-lane") {
        return (
          <SpotlightCard
            category={movie as Movie}
            isFirstElement={index === 0}
            isLastElement={index === componentData.items!.length - 1}
          />
        );
      }

      // Otherwise, render the movie card
      return <MovieCard movie={movie as Movie} />;
    },
    [locationEnabled]
  );

  // Makes so the heroHeader doesn't render in the flatlist
  if (componentData.type === "heroHeader") return null;

  // Makes so the rest of the Api Routes won't show up in the flatlist
  if (componentData.apiCall && componentData.apiCall !== "Locations")
    return null;

  // Default Return
  return (
    <View style={styles.container}>
      <ComponentHeader
        title={componentData.title}
        hasLink={isNotSpotlightLane}
      />
      {isLocationLane && (
        <LocationFilters
          selectedFilters={(filters) => handleFilters(filters)}
          isLocationEnabled={(isEnabled) => setLocationEnabled(isEnabled)}
        />
      )}
      <FlatList
        horizontal
        data={!isLocationLane ? componentData.items : filteredLocations}
        renderItem={renderItem}
        ItemSeparatorComponent={
          isNotSpotlightLane ? ItemSeparatorComponent : null
        }
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListHeaderComponent}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
      />
    </View>
  );
};

export default HomeSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: "#000",
  },
});
