import { declareTypeAlias } from '@babel/types';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground, ActivityIndicator, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../global';




const Foodlists = () => {

    const foodList = [{ id: 1, name: 'shawarma', image: require('../../assets/food.jpg') },
    { id: 2, name: 'Grilled Chicken', image: require('../../assets/food1.jpg') },
    { id: 3, name: 'Shawarma', image: require('../../assets/food2.jpg') },
    { id: 4, name: 'Grilled Chicken', image: require('../../assets/food.jpg') },
    { id: 5, name: 'Broast', image: require('../../assets/food2.jpg') },
    { id: 6, name: 'Grilled Chicken', image: require('../../assets/food.jpg') },
    ]
    return (
        <View style={styles.foodList}>
            {foodList.map(item =>
                <TouchableOpacity activeOpacity={0.9} style={{ marginHorizontal: 6, alignItems: 'center' }} key={item.id}>
                    <View style={styles.roundImage}>
                        <Image style={styles.imageCircle} source={item.image} />
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 9 }}>
                        <Text style={{ fontFamily: baseFont, fontSize: 12, textAlign: 'center' }}>{item.name}</Text>
                    </View>
                </TouchableOpacity>)}
        </View>
    )
}

export default Foodlists

const styles = StyleSheet.create({
    foodList: {
        flexDirection: 'row',
        marginVertical: '3%',
        paddingLeft: 10,
        marginBottom: 25
    },
    imageCircle: {
        height: null,
        width: null,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 400,
    },
    roundImage: {
        height: 50,
        width: 50,
    },
})