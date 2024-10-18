import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { useState, useEffect } from 'react';

import RenderItem from '../components/renderItem';

const bike = [
  {
    img: require('../imgs/imgGetStarted.png'),
    name: 'Pinarello',
    price: 1800,
    description:
      'It is very important form of writting as we write aslmost everything in paragraphs, be it an answer, essa, story, email, etc.',
    type: 'Mountain',
    like: false,
    discount: 15, // don vi %
  },
  {
    img: require('../imgs/bike2.png'),
    name: 'Pina Mountai',
    price: 1700,
    description: 'It is very important ...',
    type: 'Mountain',
    like: true,
    discount: 15, // don vi %
  },
  {
    img: require('../imgs/bike3.png'),
    name: 'Pina Bike',
    price: 1500,
    description: 'It is very important ...',
    type: 'Roadbike',
    like: true,
    discount: 15, // don vi %
  },
  {
    img: require('../imgs/bike4.png'),
    name: 'Pinarello',
    price: 1900,
    description: 'It is very important ...',
    type: 'Roadbike',
    like: true,
    discount: 15, // don vi %
  },
  {
    img: require('../imgs/imgGetStarted.png'),
    name: 'Pinarello',
    price: 2700,
    description: 'It is very important ...',
    type: 'Roadbike',
    like: true,
    discount: 15, // don vi %
  },
  {
    img: require('../imgs/imgGetStarted.png'),
    name: 'Pinarello',
    price: 1350,
    description: 'It is very important ...',
    type: 'Mountain',
    like: true,
    discount: 15, // don vi %
  },
];

export default function DashBoard({ navigation }) {
  const [loc, setLoc] = useState('All');
  const [dataRender, setSDataRender] = useState(loc === 'All' ? bike : []);

  const click = (type) => {
    setLoc(type);
  };

  useEffect(() => {
    if (loc !== 'All') {
      const dataLoc = bike
        .map((item, index) => ({ ...item, index })) // Gắn thêm index từ danh sách gốc
        .filter((item) => item.type === loc); // Lọc theo loại xe
      setSDataRender(dataLoc);
    } else {
      setSDataRender(bike.map((item, index) => ({ ...item, index })));
    }
  }, [loc]);

  const getBikeDetail = async (index) => {
    const newBike = dataRender.filter((item, i) => i === index);
    console.log(newBike);
    const bikeSend = bike.filter((data, i) => i === newBike[0].index);
    console.log(bikeSend);
    navigation.navigate('AddToCard', { bikeDatail: bikeSend });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: '#E94141',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          The world's Best Bike
        </Text>
      </View>

      <View style={styles.boxType}>
        <TouchableOpacity
          onPress={() => click('All')}
          style={styles.boxButtonType}>
          {loc === 'All' ? (
            <Text style={{ color: 'red' }}>All</Text>
          ) : (
            <Text style={{ color: 'gray' }}>All</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => click('Roadbike')}
          style={styles.boxButtonType}>
          {loc === 'Roadbike' ? (
            <Text style={{ color: 'red' }}>Roadbike</Text>
          ) : (
            <Text style={{ color: 'gray' }}>Roadbike</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => click('Mountain')}
          style={styles.boxButtonType}>
          {loc === 'Mountain' ? (
            <Text style={{ color: 'red' }}>Mountain</Text>
          ) : (
            <Text style={{ color: 'gray' }}>Mountain</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.boxFlatList}>
        <FlatList
          data={dataRender}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} nextDetail={getBikeDetail} />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 20,
  },
  boxType: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boxButtonType: {
    width: 100,
    height: 30,
    borderRadius: 5,
    borderColor: '#E94141',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxFlatList: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
