import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

import {useHomeViewModel} from './HomeViewModel';

const HomeScreen = () => {
  const {logOut} = useHomeViewModel();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const onHandlerLogOut = () => {
    logOut();
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Overlay" onPress={toggleOverlay} />
      <Button title="LogOut" onPress={onHandlerLogOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default HomeScreen;
