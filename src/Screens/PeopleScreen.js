import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator,FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPeople} from '../actions/peopleAction';

const PeopleScreen = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(getPeople());
  }, []);
  return (
    <View>
      <Text>PeopleScreen PeopleScreen</Text>
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({});
