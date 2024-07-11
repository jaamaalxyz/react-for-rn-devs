import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const NAMES = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const _separator = () => {
  return <View style={{ height: 16 }} />;
};

const RenderFlatList = () => {
  return (
    <FlatList
      data={NAMES}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text>{item}</Text>}
      ItemSeparatorComponent={_separator}
      contentContainerStyle={styles.list}
    />
  );
};

export default RenderFlatList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    padding: 16,
  },
});
