import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';

const Screen7 = ({ navigation }) => {

    // Hàm xử lý khi click vào nút Next Screen8
    const click = () => {
        navigation.navigate('Screen8', { name: 'Screen8' });
    }
    return (
        <LinearGradient
            style={styles.container}
            colors={['#F7C800', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 3.5 }}
        >
            <View style={styles.boxTitleLogin}>
                <Text style={styles.textLogin}>Login</Text>
            </View>

            <View style={styles.groupInput}>
                <View style={styles.boxInput}>
                    <Fontisto name="person" size={30} color="black" margin={10} />
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                    ></TextInput>
                </View>

                <View style={styles.boxInput}>
                    <Fontisto name="locked" size={30} color="black" margin={10} />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        name='password'
                    ></TextInput>
                </View>
            </View>

            <View style={styles.boxNutLogin}>
                <TouchableOpacity style={styles.nutLogin}>
                    <Text style={styles.textNutLogin}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxCreateAccount}>
                <Text style={styles.textCreateAccount}>Create Account</Text>
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
                        Next Screen8
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default Screen7

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7C800',

    },
    boxTitleLogin: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textLogin: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingLeft: 30
    },
    groupInput: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    boxInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBlockColor: '#fff',
        borderWidth: 1
    },
    input: {
        height: 40,
        width: 320,
        fontSize: 15,
    },
    boxNutLogin: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNutLogin: {
        color: '#fff',
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nutLogin: {
        width: 370,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    boxCreateAccount: {
        flex: 3,
    },
    textCreateAccount: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})