import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from 'react-native';

import {colors} from '../constants';

const device = Dimensions.get('window');

export default ({show, onClose, children, people}) => {
  return (
    <Modal isVisible={show} onBackButtonPress={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={onClose}>
          <Icon name="close" size={30} color={colors.main} />
        </TouchableOpacity>
        <View style={styles.childContainer}>
          {people && (
            <View style={{alignItems: 'center'}}>
              <Image
                style={styles.image}
                source={{uri: 'https://adijha.com/profile.jpg'}}
              />
              <Text style={styles.item}>Name :{people.name}</Text>
              <Text style={styles.item}>Height :{people.height}</Text>
              <Text style={styles.item}>Mass :{people.mass}</Text>
              <Text style={styles.item}> Hair Color :{people.hair_color}</Text>
              <Text style={styles.item}>Skin Color :{people.skin_color}</Text>
              <Text style={styles.item}>Eye Color :{people.eye_color}</Text>
              <Text style={styles.item}>Birth Year :{people.birth_year}</Text>
              <Text style={styles.item}>Gender :{people.gender}</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: device.height * 0.9,
    backgroundColor: 'white',
  },
  childContainer: {
    marginTop: 40,
    padding: 10,
    paddingBottom: 40,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 60,
    marginBottom: 20,
  },
});
