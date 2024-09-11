import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { RadioButton } from '../components/radioButton'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';

const Screen6 = ({navigation}) => {

    // Tạo state để lưu lại option được chọn
    const [selectedOption, setSelectedOption] = useState(null);

    // Hàm xử lý khi chọn option
    const handleSelectionChange = (option) => {
        setSelectedOption(option);
    };

    // Hàm xử lý khi click vào nút Next Screen7
    const click = () => {
        navigation.navigate('Screen7', { name: 'Screen7' });
    }

    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={styles.titleRegister}>Register</Text>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                ></TextInput>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Phone'
                ></TextInput>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                ></TextInput>
            </View>

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
                    width={290}
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

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextInput
                    style={styles.input}
                    placeholder='Birthday'
                ></TextInput>
            </View>

            <View style={[styles.groupRadioButton]}>
                <View style={{
                    flex: 1,
                }}>
                    <RadioButton
                        label="Male"
                        isSelected={selectedOption === 'male'}
                        onSelectionChange={() => handleSelectionChange('male')}
                    />
                </View>
                <View style={{
                    flex: 1
                }}>
                    <RadioButton
                        label="Female"
                        isSelected={selectedOption === 'female'}
                        onSelectionChange={() => handleSelectionChange('female')}
                    />
                </View>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={[styles.nutRegister]}>
                    <Text style={styles.textNutRegister}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>When you agree to terms and coditions</Text>
            </View>
            <View style={{
                position: 'absolute',

            }}>
                <TouchableOpacity
                    style={{
                        margin: 15,
                        left: 140
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

export default Screen6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8EFDF',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 50,
    },
    titleRegister: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    input: {
        fontSize: 18,
        backgroundColor: '#CAE1D1',
        height: 50,
        width: 360,
        paddingLeft: 15
    },
    groupRadioButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 300,
        alignItems: 'center',
    },
    nutRegister: {
        height: 50,
        width: 360,
        backgroundColor: '#C34E3B',
        justifyContent: 'center',
    },
    textNutRegister: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white'
    }
})