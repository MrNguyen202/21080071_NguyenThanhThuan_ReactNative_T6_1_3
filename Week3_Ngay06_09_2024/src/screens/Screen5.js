import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';

const Screen5 = ({ navigation }) => {
    const click = () => {
        navigation.navigate('Screen6', { name: 'Screen6' });
    }
    return (
        <View
            style={styles.container}
        >
            <View style={styles.jCen_aCen}>
                <Text style={styles.titleLogin}>Login</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                >

                </TextInput>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        width={250}
                    ></TextInput>
                    <TouchableOpacity style={{
                        height: 50,
                        width: 70,
                        backgroundColor: '#CAE1D1',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Fontisto name="eye" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 40,
            }}>
                <TouchableOpacity style={styles.nutLogin}>
                    <Text style={styles.textNutLogin}>
                        login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.text}>When you agree to tems and coditions</Text>
                <Text style={{
                    color: 'blue', fontSize: 15
                }}
                >Forgot your password?</Text>
                <Text style={styles.text}>Or login with</Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: 320,
                    maxHeight: 50,
                    borderBlockColor: '#1593C6',
                    borderWidth: 1,
                }}>
                    <TouchableOpacity style={[
                        {
                            backgroundColor: '#3B5998',
                        },
                        styles.jCen_aCen
                    ]}>
                        <Text style={{
                            color: 'white',
                            fontSize: 30,
                            height: 48,
                            textAlign: 'center',
                        }}>
                            f
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        {
                            backgroundColor: '#1593C6',
                        },
                        styles.jCen_aCen
                    ]}>
                        <Text style={{
                            color: 'white',
                            fontSize: 30,
                            height: 48,
                            textAlign: 'center',
                        }}>
                            Z
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        {
                            flex: 1,
                        },
                        styles.jCen_aCen
                    ]}>
                        <Image style={{
                            width: 35,
                            height: 35,
                        }} source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' }} />
                    </TouchableOpacity>
                </View>
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
                        color: 'black',
                        fontSize: 15,
                    }}>
                        Next Screen6
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Screen5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8EFDF',
    },
    jCen_aCen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleLogin: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    input: {
        fontSize: 18,
        backgroundColor: '#CAE1D1',
        height: 50,
        width: 320,
        paddingLeft: 20
    },
    nutLogin: {
        height: 50,
        width: 320,
        backgroundColor: '#C34E3B',
        justifyContent: 'center',
    },
    textNutLogin: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        fontSize: 15
    },
    jEvenly_aCen: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})