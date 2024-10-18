import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function GetStarted({navigation}) {

  const click = () => {
    navigation.navigate("DashBoard");
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.textHeader}>
          A preniun online store for {'\n'} sporter and their stylish choice
        </Text>
      </View>

      <View style={styles.boxImg}>
        <Image
          style={styles.img}
          source={require('../imgs/imgGetStarted.png')}
        />
      </View>

      <View style={styles.boxNameShop}>
        <Text style={styles.textNameShop}>power bike {'\n'} shop</Text>
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} onPress={click}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxHeader: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  textHeader: {
    fontFamily: 'VT323',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxImg: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f7e5e4',
    margin: 20,
    padding: 20,
    borderRadius: 20
  },
  img: {
    width: 290,
    height: 270,
  },
  boxNameShop: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textNameShop: {
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  boxButton: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#e94141',
    width: 340,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    fontSize: 20,
    color: 'white'
  }
});
