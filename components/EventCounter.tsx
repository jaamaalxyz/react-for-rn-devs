import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const DisplayCount = ({ count }: { count: number }) => {
  return (
    <View>
      <Text>Display Count: {count}</Text>
    </View>
  );
};

const EventCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <DisplayCount count={count} />
      <View>
        <Pressable onPress={() => setCount(count + 1)}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable onPress={() => setCount(count - 1)}>
          <Text>Decrement</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EventCounter;
