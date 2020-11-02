import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import People from './Screens/PeopleScreen';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <People />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
