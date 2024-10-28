import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StaticRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      {Array(fullStars).fill().map((_, index) => (
        <Icon key={`full-${index}`} name="star" size={30} color="#FFD700" />
      ))}
s
      {halfStar && <Icon name="star-half" size={30} color="#FFD700" />}

      {Array(emptyStars).fill().map((_, index) => (
        <Icon key={`empty-${index}`} name="star-outline" size={30} color="#FFD700" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StaticRating;