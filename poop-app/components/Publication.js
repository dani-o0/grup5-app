import React from 'react';
import Rating from './Rating';
import { View, Text, StyleSheet } from 'react-native';


const Publication = ({name, rating, image}) => {
  return (
    <View style={styles.mainView}>
        <View style={styles.textView}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <Rating initRating={rating} isView={true}/>
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
  },
  textView:
  {
    alignItems: 'center',
  },
  text: 
  {
    color: '#FFF',
    fontSize: 30,
  },
});

export default Publication;
