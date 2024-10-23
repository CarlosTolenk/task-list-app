import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';

// Routes
import {HOME, LIST, ScreenNames, TASK} from './routesPage';

// Screens
import {HomeScreen} from '../presentation/screens/Home';
import {TaskScreen} from '../presentation/screens/Task';
import {ListScreen} from '../presentation/screens/List';

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{headerShown: false, navigationBarHidden: true}}
        />
        <Stack.Screen
          name={TASK}
          component={TaskScreen}
          options={{headerShown: false, navigationBarHidden: true}}
        />
        <Stack.Screen
          name={LIST}
          component={ListScreen}
          options={{headerShown: false, navigationBarHidden: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
