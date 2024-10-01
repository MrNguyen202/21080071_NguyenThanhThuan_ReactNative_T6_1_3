import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import AntDesign from '@expo/vector-icons/AntDesign';

const Home = ({navigation}) => {
    const click = (id) => {
        if (id === 1) {
            navigation.navigate('Screen1')
        } else {
            navigation.navigate('Screen2')
        }
    }
    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>Nhấn vào img</Text>
                <AntDesign name="arrowright" size={24} color="black" />
                <TouchableOpacity onPress={() => click(1)} >
                    <Image
                        style={{ width: 150, height: 250 }}  // Đã chỉnh kích thước nhỏ hơn
                        source={require('../assets/4a.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>Nhấn vào img</Text>
                <AntDesign name="arrowright" size={24} color="black" />
                <TouchableOpacity onPress={() => click(2)}>
                    <Image
                        style={{ width: 150, height: 250 }}  // Đã chỉnh kích thước nhỏ hơn
                        source={require('../assets/4b.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})