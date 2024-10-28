import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import LocationCard from '../components/LocationCard';

const locations = [
  {
    locationName: "Central Park",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/testfirebase-f31d8.appspot.com/o/cat2.gif?alt=media&token=a1954560-4797-4bcc-acce-9ede0982e40d",
    latitude: "40.785091",
    longitude: "-73.968285"
  },
  {
    locationName: "Eiffel Tower",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/testfirebase-f31d8.appspot.com/o/cat3.gif?alt=media&token=246ab975-dc5e-4150-b1c1-5c352d40f382",
    latitude: "48.858844",
    longitude: "2.294351"
  },
  {
    locationName: "Sydney Opera House",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/testfirebase-f31d8.appspot.com/o/cat4.gif?alt=media&token=82f5561a-3a6c-4525-9c60-78c5e9edc6cf",
    latitude: "-33.856784",
    longitude: "151.215297"
  },
  {
    locationName: "Great Wall of China",
    imageUrl: "https://example.com/great_wall.jpg",
    latitude: "40.431908",
    longitude: "116.570374"
  },
  {
    locationName: "Machu Picchu",
    imageUrl: "https://example.com/machu_picchu.jpg",
    latitude: "-13.163141",
    longitude: "-72.544963"
  },
  {
    locationName: "Statue of Liberty",
    imageUrl: "https://example.com/statue_of_liberty.jpg",
    latitude: "40.689247",
    longitude: "-74.044502"
  },
  {
    locationName: "Colosseum",
    imageUrl: "https://example.com/colosseum.jpg",
    latitude: "41.890251",
    longitude: "12.492373"
  },
  {
    locationName: "Christ the Redeemer",
    imageUrl: "https://example.com/christ_redeemer.jpg",
    latitude: "-22.951916",
    longitude: "-43.210487"
  },
  {
    locationName: "Taj Mahal",
    imageUrl: "https://example.com/taj_mahal.jpg",
    latitude: "27.175015",
    longitude: "78.042155"
  },
  {
    locationName: "Louvre Museum",
    imageUrl: "https://example.com/louvre_museum.jpg",
    latitude: "48.860611",
    longitude: "2.337644"
  }
];

export default function Search() {
  return (
    <View style={styles.mainView}>
        <View style={[{flex: 7}]}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {locations.map((location, index) => (
                <LocationCard
                    key={index}
                    locationName={location.locationName}
                    imageUrl={location.imageUrl}
                    latitude={location.latitude}
                    longitude={location.longitude}
                />
                ))}
            </ScrollView>
        </View>
        <View style={[{flex: 1}]}>
            <Menu currentSection={2} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#151723',
  },
  contentContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});
