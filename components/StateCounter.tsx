import React, { useState } from 'react';
import { Text, View } from 'react-native';

const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Display Count: {count}</Text>
    </View>
  );
};

export default StateCounter;
