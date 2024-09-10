import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';

const Screen3 = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#00ccf9',
            }}>
            <View
                style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}>
                <View>
                    <Fontisto name="locked" size={100} color="black" />
                </View>
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
                    forget {'\n'} password
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
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}>
                    Provide your account's email for which you want to reset your password
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: 320,
                        height: 50,
                        backgroundColor: '#C4C4C4',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Fontisto name="email" size={30} style={{ paddingLeft: 15, paddingRight: 15 }} color="black" />
                    <TextInput
                        style={{
                            fontSize: 18,
                        }}
                        placeholder="Email"
                        onChangeText={text => setText(text)}
                    />
                </View>

            </View>

            <View
                style={{
                    flex: 2,
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        width: 320,
                        height: 50,
                        backgroundColor: '#E3C000',
                        justifyContent: 'center',
                    }}>

                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
            <LinearGradient
                // Background Linear Gradient
                colors={['#fff', 'transparent']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 200,
                }}
                locations={[0.1, 0.9]}
            />
        </View>
    );
}

export default Screen3