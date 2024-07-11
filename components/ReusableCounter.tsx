import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const DisplayCount = ({ count }: { count: number }) => {
  return (
    <View>
      <Text>Display Count: {count}</Text>
    </View>
  );
};

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

interface ButtonGroupProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const ButtonGroup = ({ onIncrement, onDecrement }: ButtonGroupProps) => {
  return (
    <View>
      <CustomButton title="Increment" onPress={onIncrement} />
      <CustomButton title="Decrement" onPress={onDecrement} />
    </View>
  );
};

const ReusableCounter = () => {
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
      <ButtonGroup onIncrement={onIncrement} onDecrement={onDecrement} />
    </View>
  );
};

export default ReusableCounter;
