import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';

const Screen1 = function ({ navigation, route }) {
  const data = [
    {
      id: 'Blue',
      name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
      luotDanhGia: { '5s': 1000, '4s': 200, '3s': 50, '2s': 10, '1s': 5 },
      giaGiam: 1790000,
      giaGoc: 1790000,
      mauSac: require('../assets/vs_blue.png'),
      nhaCungCap: "Tiki Trading" 
    },
    {
      id: 'Red',
      name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
      luotDanhGia: { '5s': 1000, '4s': 200, '3s': 50, '2s': 10, '1s': 5 },
      giaGiam: 1790000,
      giaGoc: 1900000,
      mauSac: require('../assets/vs_red.png'),
      nhaCungCap: "Tiki Trading" 
    },
    {
      id: 'Black',
      name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
      luotDanhGia: { '5s': 1000, '4s': 200, '3s': 50, '2s': 10, '1s': 5 },
      giaGiam: 1790000,
      giaGoc: 2000000,
      mauSac: require('../assets/vs_black.png'),
      nhaCungCap: "Tiki Trading" 
    },
    {
      id: 'Silver',
      name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
      luotDanhGia: { '5s': 1000, '4s': 200, '3s': 50, '2s': 10, '1s': 5 },
      giaGiam: 1790000,
      giaGoc: 1800000,
      mauSac: require('../assets/vs_silver.png'),
      nhaCungCap: "Tiki Trading" 
    },
  ];

  const [vs_show, setVs_show] = useState(Object.values(data.filter((item) => item.id === 'Blue')));

  useEffect(() => {
    if (route.params?.vs_idNew) {
      setVs_show(Object.values(data.filter((item) => item.id === route.params.vs_idNew)));
    }
  }, [route.params?.vs_idNew]);

  const tongLuotDanhGia = Object.values(vs_show[0].luotDanhGia).reduce((a, b) => a + b, 0);
 
  const click = () => {
    navigation.navigate('Screen2', { vs_id: vs_show[0].id, dataRoute: data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={vs_show[0].mauSac}
            style={{ width: 300, height: 400, resizeMode: 'contain' }}
          />
        </View>

        <View style={{ justifyContent: 'space-evenly', height: 270 }}>
          <Text style={{ fontSize: 18, marginLeft: 20, marginRight: 20 }}>{vs_show[0].name}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
            <Entypo name="star" size={35} color="yellow" />
            <Entypo name="star" size={35} color="yellow" />
            <Entypo name="star" size={35} color="yellow" />
            <Entypo name="star" size={35} color="yellow" />
            <Entypo name="star" size={35} color="yellow" />
            {/* <MaterialCommunityIcons name="star-half" size={40} color="yellow" /> */}
            <Text>{vs_show[0].soLuotDanhGiaTrungBinh} (Xem {tongLuotDanhGia} lượt đánh giá)</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{vs_show[0].giaGiam.toLocaleString(3)} đ</Text>
            <Text style={{ color: 'gray', fontSize: 18, marginLeft: 50, textDecorationLine: 'line-through' }}>{vs_show[0].giaGoc.toLocaleString(3)} đ</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
            <Text style={{ fontSize: 18, textTransform: 'uppercase', color: 'red' }}>Ở đâu rẻ hơn hoàn tiên</Text>
            <AntDesign name="questioncircleo" size={24} color="black" marginLeft={10} />
          </View>

          <TouchableOpacity
            onPress={click}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBlockColor: 'black', borderWidth: 1, height: 40, borderRadius: 10, marginLeft: 20, marginRight: 20 }}>
            <Text style={{ fontSize: 18, textTransform: 'uppercase', marginLeft: 100 }}>4 màu - chọn màu</Text>
            <MaterialIcons name="navigate-next" size={30} color="black" />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.mua}>
        <TouchableOpacity style={styles.nutMua}
        >
          <Text
            style={{
              fontSize: 20,
              textTransform: 'uppercase',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Chon mua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productInfo: {
    flex: 6,
  },
  mua: {
    flex: 1,
    justifyContent: 'center',
  },
  nutMua: {
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
