import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

import { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { addCard } from '../apis/bikeCardAPI';

export default function AddToCard({ navigation, route }) {
  const [bike, setBike] = useState(route.params.bikeDatail);

  const clickAdd = () => {
    try {
      addCard(bike[0]);

      // Thông báo thành công và chờ người dùng xác nhận
      Alert.alert('Thành công', 'Bạn đã thêm vào giỏ hàng thành công!', [
        {
          text: 'OK',
          onPress: () => {
            // Chuyển màn hình sau khi người dùng nhấn OK
            navigation.navigate('DashBoard');
          },
        },
      ]);
    } catch (error) {
      console.error('Add to card failed: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FEF5ED',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          borderRadius: 10,
        }}>
        <Image
          style={{ width: '80%', height: '70%', resizeMode: 'contain' }}
          source={bike[0].img}
        />
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 5 }}>
            {bike[0].name}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text style={{ margin: 10, fontSize: 18, color: 'gray' }}>
            {bike[0].discount}% OFF | 350$
          </Text>
          <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>
            {bike[0].price - bike[0].price * bike[0].discount * 0.01}
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>Description</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 10,
              color: 'gray',
              paddingRight: 40,
            }}>
            {bike[0].description}
          </Text>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 270,
              height: 54,
              backgroundColor: '#e94141',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={clickAdd}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
