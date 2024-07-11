import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const DisplayCount = ({ count }: { count: number }) => {
  return (
    <View>
      <Text>Display Count: {count}</Text>
    </View>
  );
};

const RefactorCounter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <View>
      <DisplayCount count={count} />
      <View>
        <Pressable onPress={onIncrement}>
          <Text>Increment</Text>
        </Pressable>
        <Pressable onPress={onDecrement}>
          <Text>Decrement</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RefactorCounter;
