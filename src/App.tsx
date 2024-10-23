import React from 'react';
import {Dimensions, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persist} from './store';
import {AppRouter} from './router';

import {container} from './container/ioc';
import {ProviderInversify} from './container/iocProvider';

const AppConfig = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    // @ts-ignore
    <ProviderInversify container={container}>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <View style={{height: windowHeight, width: windowWidth}}>
            <AppRouter />
          </View>
        </PersistGate>
      </Provider>
    </ProviderInversify>
  );
};

export default AppConfig;
