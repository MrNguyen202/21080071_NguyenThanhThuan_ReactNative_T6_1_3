import { StyleSheet, TextInput, View, Image, Text } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native';
import { Link } from '@react-navigation/native';

const Screen8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxEye}>
        <Image style={{
          width: 100,
          height: 100,
        }} source={{ uri: 'https://blog.prepscholar.com/hs-fs/hubfs/feature_satbiosubjecttest.png?width=433&name=feature_satbiosubjecttest.png' }} />
      </View>

      <View style={styles.boxGroupInPut}>
        <View style={styles.boxInput}>
          <Fontisto name="person" size={30} color="#386FFC" margin={10} />
          <TextInput
            style={styles.input}
            placeholder='Name'
          ></TextInput>
        </View>

        <View style={styles.boxInput}>
          <Fontisto name="locked" size={30} color="#386FFC" margin={10} />
          <TextInput
            style={styles.input}
            placeholder='Password'
            name='password'
          ></TextInput>
        </View>
      </View>

      <View style={styles.boxLinkButton}>
        <TouchableOpacity style={styles.boxNutLogin}>
          <Text style={styles.textNutLogin}>Login</Text>
        </TouchableOpacity>
        <View style={styles.boxLink}>
          <Link style={styles.textLink} to="/Screen8">Register</Link>
          <Link style={styles.textLink} to="/Screen8">Forgot Password</Link>
        </View>
      </View>

      <View style={styles.boxfooter}>
        <View style={styles.boxMethod}>
          <View style={styles.line}></View>
          <Text style={styles.textMethod}>Orther Login Methods</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.boxLogoMethods}>
          <TouchableOpacity style={styles.boxLogo1}>
            <Fontisto name="person" size={30} color="#fff"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxLogo2}>
            <Fontisto name="wifi" size={30} color="#fff"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxLogo3}>
            <Fontisto name="facebook" size={30} color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Screen8

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxEye: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  boxGroupInPut: {
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boxInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBlockColor: '#C3C3C3',
    borderBottomWidth: 1
  },
  input: {
    height: 50,
    width: 300,
    fontSize: 15,
  },
  boxLinkButton: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxNutLogin: {
    height: 50,
    width: 350,
    borderRadius: 15,
    backgroundColor: '#386FFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNutLogin: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  boxLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
  },
  textLink: {
    fontSize: 18,
  },
  boxfooter: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }, 
  boxMethod: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 1.5,
    width: 80,
    backgroundColor: '#386FFC',
  },
  textMethod: {
    fontSize: 18,
  },
  boxLogoMethods:{
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxLogo1:{
    width: 90,
    height: 90,
    borderRadius: 15,
    backgroundColor: '#3AB4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLogo2:{
    width: 90,
    height: 90,
    borderRadius: 15,
    backgroundColor: '#F4AA47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLogo3:{
    width: 90,
    height: 90,
    borderRadius: 15,
    backgroundColor: '#3A579C',
    justifyContent: 'center',
    alignItems: 'center',
  }
})