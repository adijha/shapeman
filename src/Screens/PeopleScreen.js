import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPeople} from '../actions/peopleAction';

const PeopleScreen = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);
  console.log(people);
  return (
    <View style={styles.container}>
      {people[0] ? (
        <FlatList
          data={people.results}
          renderItem={() => {
            return <Text>bsujbsdfuj</Text>;
          }}
          // keyExtractor={(item) => item.name}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color="green"
          style={{marginTop: 100}}
        />
      )}
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
