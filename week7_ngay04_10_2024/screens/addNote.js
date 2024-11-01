import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect } from "react";

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useState } from "react";
import { updateUserById } from "../api/userAPI";
import { useFocusEffect } from "@react-navigation/native";

import { useDispatch } from 'react-redux';
import { addJobRequest, updateUserJobRequest } from '../redux/actions/dashboardActions';

const AddNote = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState(route.params.data[0].name);
    const [newJob, setNewJob] = useState(route.params.tv == "Update"?route.params.data[0].job[route.params.index] : '');
    const [tacVu, setTacVu] = useState(route.params.tv);

    // Lấy dữ liệu từ ô input
    const onChangeJob = (text) => {
        setNewJob(text);
    };

    // Thêm công việc vào công việc của user
    const addJob = () => {
        if (newJob.trim() === '') {
            alert('Please enter a job'); // Kiểm tra nếu ô input rỗng
            return;
        }
        dispatch(addJobRequest(route.params.data[0].id, newJob));
        navigation.navigate('Dashboard', { name });
    };

    //Update job
    const upDateJob = () => {
        if (newJob.trim() === '') {
            alert('Please enter a job'); // Kiểm tra nếu ô input rỗng
            return;
        }
        dispatch(updateUserJobRequest(route.params.data[0].id, newJob, route.params.index));
        navigation.goBack();
    }


    const clickBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.info}>
                    <Image
                        source={{ uri: 'https://picsum.photos/200' }}
                        style={styles.avt}
                    />
                    <View style={styles.textName}>
                        <Text style={styles.name}>Hi {name}</Text>
                        <Text style={styles.textAgrate}>Have agrate day a head</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={clickBack}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>{tacVu} your job</Text>
            </View>

            <View style={styles.boxInputJob}>
                <View style={styles.inputJob}>
                    <MaterialCommunityIcons name="note-text-outline" size={24} color="#1DD75B" />
                    <TextInput
                        style={styles.textInput}
                        value={newJob}
                        placeholder="input your job"
                        onChangeText={(text) => onChangeJob(text)}
                    ></TextInput>
                </View>
            </View>

            <View style={styles.boxNutFinish}>
                <TouchableOpacity
                    style={styles.nutFinish}
                    onPress={tacVu == "Add" ? addJob : upDateJob}
                >
                    <Text style={styles.textNutFinish}>Finish</Text>
                    <AntDesign name="arrowright" marginLeft={5} size={20} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.boxImage}>
                <Image style={styles.img} source={{ uri: 'https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YiPvQeynV6joYyVajxEkRP~XIRFb8DmujZUYD6U3Yi5lWQq3KxIfiDmToqmlRli3C4CwfMdl9LauuGnKk7u~4JnK1RKP12GP7CLXko3QQTPO7~vM4YTwcmjmQFQt2RHGq0EmB8fs-jZ9noOg200dAA3rQTQ70XoIm91v1zOH~q7ybIr14ZA7as~yPXsUkpLV4TMN~reSmCpbnPu~Vl93qnV-VWpF8BJh0ohOSUaDVl5zpdZLRyEqtw9i0rfvokru~uHO-0LabmaTRIzd3dhkhAeyQsfWZ5nbPIyU9nLZxvuUi8bO6OSWjma-aatpk0DjDRcaqa2LxsrlrTPR4YVmww__' }} />
            </View>
        </View>
    );
};

export default AddNote;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avt: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
        width: '100%',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textName: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textAgrate: {
        fontSize: 16,
        color: 'grey',
    },
    boxTitle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform: 'uppercase',
        color: '#000',
    },
    boxInputJob: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    inputJob: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderBlockColor: 'grey',
        padding: 10,
        borderRadius: 5,
        margin: 30,
        width: '85%',
        height: 50,
    },
    textInput: {
        marginLeft: 10,
        fontSize: 18,
    },
    boxNutFinish: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 20,
    }
    ,
    nutFinish: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BDD6',
        borderRadius: 10,
        height: 50,
        width: '50%',
    },
    textNutFinish: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    boxImage: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    img: {
        width: 250,
        height: 250,
        marginBottom: 20,
    }
});
