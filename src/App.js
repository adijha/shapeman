import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import People from './Screens/PeopleScreen';
const App = () => {
  return (
    <Provider store={store}>
      <View>
        <People />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
