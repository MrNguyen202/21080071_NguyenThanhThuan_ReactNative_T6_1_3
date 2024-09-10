import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry';

const Screen4 = ({navigation}) => {
    const click = () => {
        navigation.navigate('Screen5', { name: 'Screen5' });
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
                    <Text style={{
                        fontSize: 70,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>code</Text>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 23,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                    }}>
                    Verification
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
                    Enter ontime password sent on {'\n'} ++849092605798
                </Text>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}>
                <View style={{
                    width: 280,
                }}>
                    <OtpInput
                        numberOfDigits={6}
                        focusColor={'#000'}
                    />
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
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
                        verify code
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

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
                        Next Screen5
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen4