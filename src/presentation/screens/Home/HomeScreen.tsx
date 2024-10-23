import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

import {useHomeViewModel} from './HomeViewModel';
import {LIST, ScreenValues, TASK} from '../../../router';

const HomeScreen = () => {
  const {onNavigation} = useHomeViewModel();

  const onHandlerNavigation = (route: ScreenValues) => {
    onNavigation(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button title="Tasks" onPress={() => onHandlerNavigation(TASK)} />
      </View>
      <View style={styles.containerButton}>
        <Button title="List" onPress={() => onHandlerNavigation(LIST)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  containerButton: {
    margin: 10,
  },
});

export default HomeScreen;
