import React, { useState } from 'react';
import { View, Text } from 'react-native';

const DisplayCount = ({ count }: { count: number }) => {
  return (
    <View>
      <Text>Display Count: {count}</Text>
    </View>
  );
};

const PropsCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <DisplayCount count={count} />
    </View>
  );
};

export default PropsCounter;
