import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from '@react-navigation/native';

const Screen1 = function ({ navigation }) {
  const Data = [
    {
      id: '1',
      img: 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5dPPTbUst~kHPzMPDnVD~~i8pBVVLNjIR6XjyUXCIoAy2D3zUWPQjSlVZdKnDwX08PS04~QRl4J0eLlX4VkVyCNHEkZ0Nxj9bfGiVwj4WxPJEI9XvvJ-ECheFb0-FlYlpyqEKsb3RQ1rSv0E73OWSBjpa02bmSOHJAAhCvnMF-NtuKV-kDmmT2glW8yfzS9u98uIyxs8svIG-ESAkUU9MCT66hRHVRK6XB5c~Mqj8-rJ0gOvxicb2xsZE4xSgEJNGAUyKuHNjPfQaTyf5VmeysWqREYoXxgYVfZ14gOL5NcKQ2nPdjKliRnc~wkLrqazdDEcE-Smh0f-ElS6e~gTg__',
      name: 'Ca nấu lẩu, nấu mì mini',
      shop: 'Devang',
    },
    {
      id: '2',
      img: 'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCjEueb8iMWXaCOazyNkKxw5w6Ca-HPn3CaF24395S95Uo5CRbjnunCpf0CR1iBZrkle9uY~c8W22vfSYaT3UChNddweW~mMJRxLCWAIlFdJDRn55yEKnssmVg-d0hyb8NKVM4PuNIwLm6y8PMITK5TUj4NAd6pl~WvrRnTekSFTypVmsvWLQySxTklAXOoVISA8AFJDp1OrHjCWHEpY8Mnln6sT-oio3YVCRtBzQ-JEAJenObwGqRVhNOwmDJoFxJk7Q-LA5a~lmyJhwo4c1k8qrYm3hactSWAVoR7YXstNbIjha3cG4mcVDnEg79Zh~xkY4iFOaux1cXaPfAa5mw__',
      name: '1KG KHÔ GÀ BƠ TỎI',
      shop: 'LTDFood',
    },
    {
      id: '3',
      img: 'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7quv7IFBj5TvDPShC0CSbfaGF54X6YTcJ8hUGrpzout0wRes9ZVvT67stONONe4JY1VQmlwQzU8IOPX2F3hAdB5xT5s3Z1ZSSlh9n87fr5iwCnQluriksXi3p~8mhirp-ocpeJbPr7gMqiagS2vRRQQHN12O-4B19UQkX8asIMS4trIWA4GXUB50q0tdwn2MzwEMGjituuURi9ONOf4mFMsBaMa3XgEO0e5p9uHW-UN8Zv~9DEojnmoY-PK49t1SPcYHWyoRM3a4S7mPryc4vc9SefhITfeeHl1vA5jo9ZDS66LIywd2JaBtLLbsGe5PWY8euu2JQuOLRhzkpuG8w__',
      name: 'Xe cần cẩu đa năng',
      shop: 'Thế giới đồ chơi',
    },
    {
      id: '4',
      img: 'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JSuvZkLjkmh2yFJQbOcsUg0nQ90D6m~2Vthw6PUTcB6A65D6CgjHyMo~dNB-e~nQ7EfX-OGgXmAziJU-ljnUsMvKSChJsjyvNAfJ4Q29m4esjR0H2vytYKF31UuwotA373WbRREMJGThKyENKA6PGTwZbuJ~p7M4LNnQMFNmkXWsAiayz6WsLmfQaitbIJq9R0pzIu7~acpcD4PLZ07a-RpimuG2LvqLrEYqQxV6ZBNtw8X-76ZaJxPa-UEv7qsacyerSsDfuGfKqkgLaDidGcMbEFpGP~Z~qFZ0wdUbRRYgXatgCHOuE6AR3H7XgrYrGcLuM1UA8unKW8FVVoHNXw__',
      name: 'Đồ chơi dạng mô hình',
      shop: 'Thế giới đồ chơi',
    },
    {
      id: '5',
      img: 'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bzZ1IBOnnq9si4PJzYYI2h-ginkt-no6xEHG7cxihZPpxj1Z9mNXazdSck87rqsPzopXH1HkrJysyvZzdS29Mpt0kVl49QpjpSmwFydbyPtjx2VrhIcs1ZFCwL437v3i3Yqn3NhdTbs5ErShHV0mrfmFYTOxBVs9UgWyqDsF8UdQf31ttysd1eJF4R160SHvM3QgArmMGtOfhzxbiXVQBfEupOX6YgKB3izR8t05raM-eiJci4MK7qk8ZwytLZ7C4PH2Y9~RK0fKBIMm1xGdNnAlCbL8gWHld6k0IRyrgobJxtvwjqZMB0IiSyifFMty9DwF3zyp1VHHqVugUBo4Ng__',
      name: 'Lãnh đạo giản đơn',
      shop: 'Minh Long Book',
    },
    {
      id: '6',
      img: 'https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaEU6mhcWSaPCFjGDNk2kLyUyF2qSXgezyHUvbGLoHbVBXZ-WX1jkibXnw2qWDsD5TvTYuzgpFh0Jk~oFMfgo2~xMzcEWEJuMOLqiA4piu~Ao1P9DmDAmm1wLrKuA7lq1IdglycGUA7X4431Vxc2QcY5IIDXtPIWQAFx7mtHeaV4fCUtxQ~qnX-0-iXs7I~cjq1cUg5JCUS0utmBg4peV7KT4Tp8SRqUphD-idxeO07u1dBh2dazCK9lKsXnXiF5r184GxfdgZb8QMtRX9iUuzafsC9lG3vgSArrFD1-aYCG~kGYT3W24H3GZ2KnVLPcVhkd5U76vkLrABroG6Bo8A__',
      name: 'Hiểu lòng trẻ con',
      shop: 'Minh Long Book',
    },
    {
      id: '7',
      img: 'https://s3-alpha-sig.figma.com/img/2b9d/ea9b/4d819d9ee3f8aa713e6c7da6f9a8cbab?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDp4ZOKU-Ga2yMMA2F1H-e6MTi09N0cOIMjKjEKee-exnP0A~nBCH7f7-cpU-gu7QF7Lp1cx9JuwTZ4BQxvkj7t8bC-Ix08~iMqgteXu-r1Ct1pQt8heUwYzDiHScLEuvw4j1RzPNA7qh8HLwQGh2lLroeb8uWyghbBXY9tVtYxuuD7WWdAWfOxa~d8sjt8PME5P0D~E5rRSLO3gS3ehi5olpit9NW5gXA0dAAjCH4Oe8Ynpd~GGDnKh6sIr7dN8RDWWwNOS8n0SNSqxFBHSOwKMadQFLFC13PJ5daHVX76DX1QCz4wZiXchdUNE9K2Rh17yL9~2JmVy2urqJg0AZw__',
      name: 'Donal Trump Thiên tài lãnh đạo',
      shop: 'Báo quốc tế',
    },
    {
      id: '8',
      img: 'https://picsum.photos/200',
      name: 'Picture of picsum',
      shop: 'Ficsum',
    },
  ];

  const ProduceItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 88,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
        }}>
        <Image style={{ width: 74, height: 74 }} source={{
          uri: item.img
        }} />
        <View style={{ width: '40%', justifyContent: 'space-evenly', height: '80%' }}>
          <Text
            style={{ fontSize: 15, textAlign: 'left' }}
            numberOfLines={1}
          >{item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'gray' }}>Shop</Text>
            <Link to="/chat" style={{ color: 'black', marginLeft: 10 }}>{item.shop}</Link>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 88,
            height: 38,
            justifyContent: 'center',
          }}>
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 17 }}>Chat</Text>
        </TouchableOpacity>
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
          <Text style={{ color: 'white', fontSize: 20 }}>Chat</Text>
          <MaterialIcons name="local-grocery-store" size={24} color="white" />
        </View>
        <Text style={{ margin: 20, fontSize: 15 }}>
          Bạn có thắc mắc với sản phẩm vừa xem, đừng ngại chat với shop!
        </Text>
      </View>
      <FlatList
        style={{ flex: 3, width: '100%' }}
        data={Data}
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
};

export default Screen1;
