import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Chip from "./Chip";
import { Item } from "../constants/types/MovieHome";

type TagListProps = {
  id: string;
  title: string;
  tags: Item[];
};

const TagList = ({ title, tags, id }: TagListProps) => {
  return (
    <View key={id!} style={styles.container}>
      <Text style={styles.header}>{title.toUpperCase()}</Text>
      <View style={styles.tagContainer}>
        <FlatList
          data={tags}
          renderItem={({ item }) => <Chip title={item.text!.toUpperCase()} />}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default TagList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    paddingBottom: 8,
    paddingHorizontal: 20,

    color: "#fff",
    fontSize: 16,
    fontFamily: "WorkSans_Bold",
  },
  tagContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 8,
  },
});
