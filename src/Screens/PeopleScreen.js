import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPeople} from '../actions/peopleAction';
import Modal from '../components/Modal';
const PeopleScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState(null);
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
            <TouchableOpacity
              onPress={() => {
                setModalOpen(true);
                setSelectedPeople(index);
              }}>
              <View style={styles.row}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://adijha.com/profile.jpg'}}
                />
                <Text style={styles.item}>
                  {item.name && item.name.toString()}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <ActivityIndicator size="large" color="green" style={styles.loading} />
      )}

      <Modal
        show={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedPeople(null);
        }}
        people={people[selectedPeople]&&people[selectedPeople]}
      />
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
