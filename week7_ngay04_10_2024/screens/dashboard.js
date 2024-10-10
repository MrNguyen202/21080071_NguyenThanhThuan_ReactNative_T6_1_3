import { Image, StyleSheet, Text, TextInput, View, PlatList, TouchableOpacity } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Dashboard = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <View style={styles.info}>
                    <Image
                        source={{ uri: 'https://picsum.photos/200' }}
                        style={styles.avt}
                    />
                    <View style={styles.textName}>
                        <Text style={styles.name}>Hi thuan</Text>
                        <Text style={styles.textAgrate}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>

            <View style={styles.boxSearch}>
                <View style={styles.search}>
                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput placeholder="Search" style={styles.inputSearch}></TextInput>
                </View>
            </View>

            <View style={styles.boxListNote}>

            </View>

            <View style={styles.boxAdd}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <FontAwesome6 name="add" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
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
    boxSearch: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    search: {
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
    inputSearch: {
        marginLeft: 10,
        fontSize: 18,
    },
    boxAdd: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 20,
    }
    ,
    buttonAdd: {
        width: 70,
        height: 70,
        backgroundColor: '#00BDD6',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxListNote: {
        flex: 5,
        width: '90%',
        height: '50%',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
    }
});
