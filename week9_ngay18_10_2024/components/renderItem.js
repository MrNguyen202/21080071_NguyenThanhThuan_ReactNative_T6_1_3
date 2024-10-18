import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

const RenderItem = ({ item, index, nextDetail }) => {

  const handleDetail = () =>{
    nextDetail(index);
  }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handleDetail}>
      {item.like && (
          <TouchableOpacity style={{ position: 'absolute', left: 10, top: 10 }}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
      )}
      {!item.like && (
        <TouchableOpacity style={{ position: 'absolute', left: 10, top: 10 }}>
          <AntDesign name="heart" size={24} color="#E5DDD7" />
        </TouchableOpacity>
      )}
      <Image style={styles.imgDetails} source={item.img} />

      <Text style={{ fontSize: 18 }}>{item.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: '#F7BA83', fontSize: 20, marginRight: 5 }}>
          $
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: 167,
    height: 200,
    backgroundColor: '#FEF5ED',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imgDetails: {
    width: '60%',
    height: '50%',
    resizeMode: 'contain',
  },
});
