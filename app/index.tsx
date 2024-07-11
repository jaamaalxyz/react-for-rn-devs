import React from 'react';
import { View } from 'react-native';
import LoginStatus from '@/components/LoginStatus';

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <LoginStatus />
    </View>
  );
}
