import React from 'react';
import Rating from './Rating';
import { View, Text, StyleSheet } from 'react-native';
import Image from './Image';


const Publication = ({name, rating, image}) => {
  return (
    <View style={styles.mainView}>
        <View style={styles.imageView}>
          <Image source={image} width={150} height={150}/>
          <View style={styles.infoView}>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.rating}>
              <Rating initRating={rating} isView={true}/>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView:
  {
    backgroundColor: '#2E2942',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#56516A',
    padding: 20,
    marginLeft: 100,
    marginRight: 100,
  },
  imageView:
  {
    flexDirection: 'row', 
  },
  infoView:
  {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  rating:
  {
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
    borderColor: '#56516A',
    borderWidth: 1,
    padding: 1,
    backgroundColor: '#151723',
  },
  text: 
  {
    color: '#FFF',
    fontSize: 30,
  },
});

export default Publication;
