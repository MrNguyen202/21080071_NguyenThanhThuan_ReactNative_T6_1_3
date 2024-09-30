import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Link } from '@react-navigation/native';

const Screen2 = function ({ navigation }) {
  const Data = [
    {
      id: '1',
      img: 'https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgPUdpuLzS80-MM84HwY~u2mENrmM~nCCE2A2BtNzaESQK6iXKWKdl0lcw1kmlOR30OlNgrp5HBFibXJvac5wSVK3uOX2Y-6r7l0DkHMWUVSgdaPNSzDFArklv3sRrCiq~tCaGCHR3Qt6DnfOBogpiBipAD3VOJiJeuworflAKM-AjzWh-HirOSwh8CIk2YRsee1F9W1XygMsPXTdvob8cwAIptindOpgPreHEiXr4vQAmB1Ny-Eg9GptT6OYU3mbn6vpGxemO7IT03ortKayB5KF7gYEaMoQELKphlyg39PF5ElNDUOuyK93yTrMf~dZp42gRurt8By18Uwus6doA__',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69900,
      sale: 39,
    },
    {
      id: '2',
      img: 'https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHbU~rXUMQVRseFi5hGIRixsAWJMULzX1LYYUmkef6TaRDTA4e7U5iWMJtq16xd4EdMAWdZWe3qEKUiDZXY4mDgTld0Xxy7NAlHxpx0XUsuxO9PGSXYZgSne0zxTQMlv6VYy47ufb8jrX8oDkZmymGhCH6J37NUsF~e5BX2AOP5qPpPiXnae05-~4YiG~Db8bLinj6o4yMogK532nf4JZ7d1iqowADl89lW2mtd0igZjluiygofIcawBSVZjTTD~Gy4gPcUMOxKCZ1sZMSNhd0Ci3dgAWAssBIrTtKq2s-Knlc6FjC0XnV8id8BckoJsd9BuNroyzQb-5yiQIq8cxg__',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69900,
      sale: 39,
    },
    {
      id: '3',
      img: 'https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V0694xEnJTkXd7L4homxA1TUUyo7o6TbXhRG3bLedGxMSehJTPfGg~114-zx8F35PdYEDNOD~~nGit81na-Brku3t6CiKdDe30faj5~P9ffPzLYSPPsJ2wFBGTqtzM-XJNDlAqmUEQdZJ0e~PzB1TbxmX5g-E57rAIjZS8mPUjPfcwf9P-glY7Ygpiew5X2yS-Ls8KKb1AWu0HI26P0mLUr1jozwsFPwIXHxpZOaxSfDqSsQGAXqHNYxMj5qLykGUbgCb566rWE7yeoGrCl3cq-UV1EZVKAqnGcaMA3qpUMaqQZMf-PUKXQsa5otK9D8drV3iTPC55ijS2YNSCZ-Tg__',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69900,
      sale: 39,
    },
    {
      id: '4',
      img: 'https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lXVFRKl423z69fbZsqWxsDSMw4tTdPwPdtnD0S9hb4gp9H5hmQ4EwMGjmCqqKI37fQmzVl37EPxHbpfaf83OFX1gOaIBJTTfBBwesdhk-H6YKCaNHRvjGB26lV7kAqp-UgZs5KUtmabdcPGe1bFc3WI1SX45M3j8XrUTLcuaXR5U37JMgmrbKTfWzKfxf0us3XJlLhtNqAZrOFW9cbFyOKyEDh6blIxB4YcK9K1KAW7IIPfZCLrII5qNbFOWvkW2rme5WZYG6YP1piZqJ7o4T3Ybbr~eA0yIgwT3chuvR3Bo8V7cZxxNtYnhiZylBpK~uRA6QLBqVTDqcHj6Q3A7dA__',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69900,
      sale: 39,
    },
    {
      id: '5',
      img: 'https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BmmaYeW5Ca360KDEXO5I0V6dNpRG9WXXYU4rmAduzblWlrWS0hCqUxES5bOuOig4OqthsJL1Ov-aSbGi8iDkE5rvVGHxcxi4JZjiEZtJ43Vk5CVvMAae~3jveF8~yyuHGgoSA4ApCWdc-tmMV95t49kmcklAJJnSQi8PUwu9ZpxZr7VtwyXm7G8JS0DHxDlh0ykcZJJq4Tvj2LAA~LsTE0XVuWz2S06s4KOLMvxV1G6OYKWh6nEw8ZwAt9Sn0XU~I6-D~q~54SD5toQsn9kzhl4yB3oF2mtispUnKs2aqIZT54WHkglqWsE~4MCb~1Tz5N-TQMohy2AAkd~kUq3myA__',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69900,
      sale: 39,
    },
    {
      id: '6',
      img: 'https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsIIMCjz3h8Wo~-6F4q5tS41EJc586dIEYsirApP4s9HgWhbOFs4JfR8Cz5rAB0pW8xGXZX7chIlzkBUWV6M6BLwQZGXHyQ7eLSurcFNnw7T8dheG4odi6Tjrff3yKXymY3DMwTAThEowurSB~oz940P6LBsfmBFv-wG-vmfpyq-4~5QmROFaGq0FrngdnDCjtyDH-hjVCRs6ymD4DCs8FP1IAiPi8lOBOn38hWdXcE7dsU~kn-TKeyz7Je4DA~XvsrHA56E-vdKo1grSt6nuqAmBb50GDWMxDBHAYr7a3cnJd~FlY8nTeNZDEXUSV~SAZrG3RaFF6myOiY3wAkkAg__',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69900,
      sale: 39,
    },
    {
      id: '7',
      img: 'https://picsum.photos/199',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69000,
      sale: 39,
    },
    {
      id: '8',
      img: 'https://picsum.photos/201',
      name: 'Cáp chuyển từ Cổng USB sang PS2 ...',
      danhGia: 15,
      price: 69000,
      sale: 39,
    },

  ];

  const ProduceItem = ({ item }) => {
    return (
      <View style={{ justifyContent: 'space-between', height: 'auto', }}>
        <Image style={{ width: 155, height: 90 }} source={{ uri: item.img }} />
        <Text numberOfLines={2} style={{ width: 150, paddingVertical: 5, paddingHorizontal: 15, fontSize: 13 }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 15 }} >
          <View style={{ flexDirection: 'row' }}>
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="yellow" />
            <Entypo name="star" size={20} color="gray" />
          </View>
          <Text style={{ fontSize: 13 }}>({item.danhGia})</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.price.toLocaleString(3)} đ</Text>
          <Text style={{ color: 'gray', marginLeft: 20 }}>{item.sale}%</Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: 42,
            backgroundColor: '#1ba9ff',
          }}>
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
          <View style={{ backgroundColor: '#fff', flexDirection: 'row', width: '55%', height: 30, alignItems: 'center' }}>
            <FontAwesome style={{ marginLeft: 10, marginRight: 10 }} name="search" size={24} color="black" />
            <TextInput placeholder='Dây cap usb'></TextInput>
          </View>
          <View>
            <MaterialIcons name="local-grocery-store" size={24} color="white" />
            <View style={{width: 10, height: 10, backgroundColor: 'red', borderRadius: 5, position: 'absolute', top: 0, right: 0}}/>
          </View>
          <AntDesign name="ellipsis1" size={24} color="white" />
        </View>
      </View>
      <FlatList
        style={{ flex: 3, width: '100%', marginTop: 20 }}
        data={Data}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProduceItem item={item} />}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          height: 50,
          backgroundColor: '#1ba9ff',
        }}>
        <AntDesign name="bars" size={24} color="white" />
        <Entypo name="home" size={24} color="white" />
        <Ionicons name="return-up-back-sharp" size={24} color="white" />
      </View>
    </View>
  );
}

export default Screen2;