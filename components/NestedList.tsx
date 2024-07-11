import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

interface SectionData {
  title: string;
  data: string[];
}

const DATA: SectionData[] = [
  {
    title: 'Front-end',
    data: ['React', 'Redux', 'React Native'],
  },
  {
    title: 'Back-end',
    data: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Mobile',
    data: ['React Native', 'Kotlin', 'Swift'],
  },
  {
    title: 'Data Science',
    data: ['Python', 'R', 'Julia'],
  },
];

const renderItem = ({ item }: { item: string }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const renderSectionHeader = ({
  section: { title },
}: {
  section: SectionData;
}) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const NestedList: React.FC = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NestedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#A9C2FF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  itemText: {
    fontSize: 18,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
  },
});
