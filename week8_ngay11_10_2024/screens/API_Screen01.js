import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const API_Screen01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Wellcome to Cafe world</Text>
      </View>

      <View style={styles.boxImgContainer}>
        <View style={styles.boxImg}><Image style={styles.img} source={require('../assets/cafe01.png')} /></View>

        <View style={styles.boxImg}><Image style={styles.img} source={require('../assets/cafe02.png')} /></View>

        <View style={styles.boxImg}></View>
      </View>

      <View style={styles.boxGetStarted}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default API_Screen01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitle: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  boxImgContainer: {
    flex: 6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boxImg:{
    height: 70,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  img:{
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  boxGetStarted: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton:{
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'white',
  },
  button:{
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
  }
});
