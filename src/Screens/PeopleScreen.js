import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableHighlight,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPeople} from '../actions/peopleAction';

const PeopleScreen = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>People List</Text>
      {people[0] ? (
        <FlatList
          data={people}
          renderItem={({item, index}) => (
            <TouchableHighlight>
              <View style={styles.row}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://adijha.com/profile.jpg'}}
                />
                <Text style={styles.item}>
                  {item.name && item.name.toString()}
                </Text>
              </View>
            </TouchableHighlight>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <ActivityIndicator size="large" color="green" style={styles.loading} />
      )}
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 80,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  loading: {
    marginTop: 200,
  },
});
