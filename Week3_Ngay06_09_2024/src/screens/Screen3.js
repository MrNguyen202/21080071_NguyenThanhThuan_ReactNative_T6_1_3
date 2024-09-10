import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';

const Screen3 = ({navigation}) => {
    const click = () => {
        navigation.navigate('Screen4', { name: 'Screen4' });
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
            <View style={{
                position: 'absolute',
                
            }}>
                <TouchableOpacity
                    style={{
                        margin: 15,
                        left: 270
                    }}
                    onPress={click}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                    }}>
                        Next Screen4
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen3