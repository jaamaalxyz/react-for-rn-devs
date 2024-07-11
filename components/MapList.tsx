import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NAMES = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const MapList = () => {
  return (
    <View style={styles.container}>
      {NAMES.map((name) => (
        <Text key={name} style={styles.text}>
          {name}
        </Text>
      ))}
    </View>
  );
};

export default MapList;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
  },
});
