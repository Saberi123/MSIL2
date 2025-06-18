import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import {redux} from '../initialize';

export interface ICoreProviderProps {
  children: React.ReactNode;
}

const CoreProvider: React.FC<ICoreProviderProps> = ({children}) => {
  return (
    <Provider store={redux.store}>
      <View style={{flex: 1}}>{children}</View>
    </Provider>
  );
};

export default CoreProvider;
