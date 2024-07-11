import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

/**
 * Renders a login status component with a login/logout button.
 *
 * @return {JSX.Element} The rendered login status component.
 */
const LoginStatus: React.FC = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  /**
   * Toggles the login status.
   *
   * @return {void}
   */
  const handleLogin = (): void => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
      </Text>
      <Pressable onPress={handleLogin}>
        <Text style={styles.text}>{isLoggedIn ? 'Logout' : 'Login'}</Text>
      </Pressable>
    </View>
  );
};

export default LoginStatus;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0aaaaa',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
