import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen5 = () => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.jCen_aCen}>
                <Text style={styles.titleLogin}>Login</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                >

                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                >
                </TextInput>
            </View>
            <View style={styles.jCen_aCen}>
                <TouchableOpacity style={styles.nutLogin}>
                    <Text style={styles.textNutLogin}>
                        login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.jEvenly_aCen}>
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
                        <Text style={{
                            color: 'white',
                            fontSize: 30,
                            height: 48,
                            textAlign: 'center',
                        }}>
                            G
                        </Text>
                    </TouchableOpacity>
                </View>
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