import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';

import {IGlobalStore} from '../store/interfaces';

// Routes
import {HOME, LOGIN, ScreenNames} from './routesPage';

// Screens
import {HomeScreen} from '../presentation/screens/Home';
import {LoginScreen} from '../presentation/screens/Login';

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRouter = () => {
  const tokenSession = useSelector((state: IGlobalStore) => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {tokenSession === null ? (
          <Stack.Screen
            name={LOGIN}
            component={LoginScreen}
            options={{headerShown: false, navigationBarHidden: true}}
          />
        ) : (
          <Stack.Screen
            name={HOME}
            component={HomeScreen}
            options={{headerShown: false, navigationBarHidden: true}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
