import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableHighlight,
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
      <Text>People List</Text>
      {people ? (
        <FlatList
          data={people}
          renderItem={({item, index}) => (
            <TouchableHighlight>
              <View style={styles.row}>
                <Text>{item.name}</Text>
              </View>
            </TouchableHighlight>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index}
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
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
