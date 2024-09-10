import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen2 = ({ navigation }) => {
    const click = () => {
        navigation.navigate('Screen3', { name: 'Screen3' });
    }
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
                <View
                    style={{
                        width: 150,
                        height: 150,
                        borderWidth: 20,
                        borderRadius: 100,
                    }}></View>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                    Grow {'\n'} your business
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                    We will help you to grow your business using online server
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-end',
                }}>
                <TouchableOpacity
                    style={{
                        width: 120,
                        height: 50,
                        backgroundColor: '#E3C000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginBottom: 15
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: 20,
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 120,
                        height: 50,
                        backgroundColor: '#E3C000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginBottom: 15
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: 20,
                        }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    How we work?
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    margin: 15,
                    left: 270
                }}
                onPress={click}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                }}>
                    Next Screen3
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Screen2