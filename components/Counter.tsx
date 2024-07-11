import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

/**
 * Renders the current count.
 *
 * @param {number} count - The count to display (default: 0).
 * @returns {React.ReactElement} The rendered count display.
 */
const DisplayCount = ({ count = 0 }: { count: number }): JSX.Element => {
  return (
    <View style={styles.countWrapper}>
      <Text style={styles.countText}>{count}</Text>
    </View>
  );
};

/**
 * Renders a custom button with a given title, background color, and onPress function.
 *
 * @param onPress - The function to call when the button is pressed.
 * @param bgColor - The background color of the button.
 * @param title - The text displayed on the button.
 * @returns The rendered custom button.
 */

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  bgColor,
  onPress,
}): JSX.Element => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

/**
 * Renders a button group with increment and decrement buttons.
 *
 * @param onIncrement - The function to call when the increment button is pressed.
 * @param onDecrement - The function to call when the decrement button is pressed.
 * @returns The rendered button group.
 */

interface ButtonGroupProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onIncrement,
  onDecrement,
}) => {
  return (
    <View style={styles.buttonGroup}>
      <CustomButton title="Increment" onPress={onIncrement} bgColor="green" />
      <CustomButton title="Decrement" onPress={onDecrement} bgColor="red" />
    </View>
  );
};

const Counter = () => {
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
    <View style={styles.container}>
      <DisplayCount count={count} />
      <ButtonGroup onIncrement={onIncrement} onDecrement={onDecrement} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countWrapper: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    paddingVertical: 5,
    margin: 10,
    width: 200,
  },
  countText: {
    color: '#983232',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 20,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
