import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

const DemoCRUD = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://66ff35a72b9aac9c997e861d.mockapi.io/thuanAPIDemo202')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    //add
    const add = () => {
        fetch('https://66ff35a72b9aac9c997e861d.mockapi.io/thuanAPIDemo202', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                img: "thuanimg",
                name: "Thuan",
                shop: "ThuanShop",
            }),
        })
            .then(response => response.json())
            .then(newItem => {
                // Sau khi thêm dữ liệu thành công, cập nhật state để hiển thị dữ liệu mới
                setData([...data, newItem]); // Thêm item mới vào danh sách data
            })
            .catch(error => console.error('Error adding data:', error));
    }

    //delete
    const deletes = () => {
        fetch('https://66ff35a72b9aac9c997e861d.mockapi.io/thuanAPIDemo202', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                img: "thuanimg",
                name: "Thuan",
                shop: "ThuanShop",
            }),
        })
            .then(response => response.json())
            .then(newItem => {
                // Sau khi thêm dữ liệu thành công, cập nhật state để hiển thị dữ liệu mới
                setData([...data, newItem]); // Thêm item mới vào danh sách data
            })
            .catch(error => console.error('Error adding data:', error));
    }

    return (
        <View style={styles.container}>
            <View style={styles.chucNang}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => add()}
                >
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletes()} style={styles.button}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.show}>
                <ScrollView>
                    {data ? (
                        <Text >{JSON.stringify(data, null, 2)}</Text>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

export default DemoCRUD;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    show: {
        width: 300,
        height: 300,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chucNang: {
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})