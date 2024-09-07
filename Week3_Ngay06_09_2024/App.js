import { StatusBar } from 'expo-status-bar';
import { Image, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00ccf9',
      }}>
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderWidth: 20,
            borderRadius: 100,
          }}></View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Grow {'\n'} your business
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{
            width: 120,
            height: 50,
            backgroundColor: '#E3C000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 20,
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 120,
            height: 50,
            backgroundColor: '#E3C000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 20,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
