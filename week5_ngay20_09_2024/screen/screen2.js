import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { useState } from 'react';

const Screen2 = function ({ route, navigation }) {

  const dataNew = route.params.dataRoute;

  const [data, setData] = useState(Object.values(dataNew.filter((item) => item.id === route.params.vs_id))[0]);

  const click = (color) => {
    setData(Object.values(dataNew.filter((item) => item.id === color))[0]);
  }


  const chuyen = () => {
    navigation.navigate('Screen1', { vs_idNew: data.id });
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={data.mauSac}
            style={{ width: 130, height: 140, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ fontSize: 15, width: 220 }}>{data.name}</Text>
          <Text style={{ fontSize: 15, width: 220 }}>Color: {data.id}</Text>
          <Text style={{ fontSize: 15, width: 220 }}>Cung cấp bởi <Text style={{ fontWeight: 'bold' }}>{data.nhaCungCap}</Text></Text>
          <Text style={{ fontSize: 15, width: 220, fontWeight: 'bold' }}>{data.giaGoc.toLocaleString(3)} đ</Text>
        </View>
      </View>

      <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 17, marginLeft: 20 }}>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 450 }}>
          <TouchableOpacity onPressIn={() => click('Silver')} style={{ width: 100, height: 100, backgroundColor: '#C5F1FB' }} />
          <TouchableOpacity onPress={() => click('Red')} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
          <TouchableOpacity onPress={() => click('Black')} style={{ width: 100, height: 100, backgroundColor: 'black' }} />
          <TouchableOpacity onPress={() => click('Blue')} style={{ width: 100, height: 100, backgroundColor: '#234896' }} />
        </View>
        <TouchableOpacity style={{
          height: 50,
          backgroundColor: '#4D6DC1',
          borderRadius: 10,
          margin: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
          onPress={chuyen}>
          <Text style={{
            fontSize: 20,
            textTransform: 'uppercase',
            color: '#fff',
            fontWeight: 'bold',
          }}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen2

const styles = StyleSheet.create({

});