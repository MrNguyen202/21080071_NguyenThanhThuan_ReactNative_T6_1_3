import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/actions/authActions';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleLogin = () => {
        if (name === '') {
            Alert.alert('Please enter your name');
        } else {
            dispatch(loginRequest(name));
            console.log(1)
        }
    };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: 'https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8qWywpZima0aHJnKXIU0OEcMND6Mpc84ygHesDXf~dV0WMfKCl-pIlh5I43~ymYA5IsMFfJZU3Y0CCNRH~01MQLMhU8RsO~moXMk6rhxsHHdlyYX2xjk2fkWHg5eJgrRzLrmOUYNf8pl17boqwxjB2nOMFPGEmCOQWSgF4n0t7ZC8mmtShI7d8uWmCBMJRLJmCOLgzIlWDXYjw~GR5rgSN67YJdpAoFz9EGQpadXbXFTnIaT-3vhuZ8wSocFaWjar06G7Yi90fHeLFOzIv1HRm68qYxhULCpJBXe-UbJ2cOvI44IkXalpnxjptkgD56MQn09FhWPjjiYeZ7inFg6g__' }} />
      <Text style={styles.title}>Manage Your Task</Text>
      <View style={styles.boxTextInput}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <TouchableOpacity style={styles.nutStart} onPress={handleLogin}>
        <Text style={styles.textNutStart}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
    color: '#8353E2',
    textAlign: 'center',
  },
  boxTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    height: 50
  },
  input: {
    marginLeft: 10,
    fontSize: 18
  },
  nutStart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
    borderRadius: 10,
    height: 50,
    width: '50%',
  },
  textNutStart: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  }
})