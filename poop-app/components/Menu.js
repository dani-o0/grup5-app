import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientButton from './GradientButton';


const Menu = ({currentSection}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <View style={styles.menuView}>
      <GradientButton
            onPress={() => navigation.navigate("Home")}
            isPrimary={currentSection == 1}
            width="20%"
            isIcon={true}
            icon="home"
        />
        <GradientButton
            onPress={() => navigation.navigate("Search")}
            isPrimary={currentSection == 2}
            width="20%"
            isIcon={true}
            icon="search"
        />
        <GradientButton
            onPress={() => navigation.navigate("Add")}
            isPrimary={currentSection == 3}
            width="20%"
            isIcon={true}
            icon="add"
        />
        <GradientButton
            onPress={() => navigation.navigate("User")}
            isPrimary={currentSection == 4}
            width="20%"
            isIcon={true}
            icon="person"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView:
  {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  menuView:
  {
    flexDirection: 'row', 
    backgroundColor: '#2E2942', 
    borderRadius: 30, 
    padding: 10, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default Menu;