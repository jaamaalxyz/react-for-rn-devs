import React from 'react';
import { Button, Alert, View } from 'react-native';

const AlertButton = () => {
  const showAlert = () => {
    Alert.alert('Button Pressed!', 'You pressed the button.');
  };

  return (
    <View>
      <Button onPress={showAlert} title="Press me" />
    </View>
  );
};

export default AlertButton;
