import { declareTypeAlias } from '@babel/types';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground, ActivityIndicator, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../global';


const Deals = ({navigation}) => {


    const itemsList = [{ id: 1, name: 'Carrefour', offer: 15, image: require('../../assets/food.jpg') },
    { id: 2, name: 'Carurive', offer: 20, image: require('../../assets/food1.jpg') },
    { id: 3, name: 'Almondi', offer: 12, image: require('../../assets/food2.jpg') },

    ]

    return(
        <View style={styles.cardSubContainer}>
        <View style={styles.cardOverlay}>
            {itemsList.map(items =>
                <View style={styles.cardItem} key={items.id}>
                    <View style={styles.itemName}>
                        <Text style={{ fontFamily: boldFont, fontSize: 18 }}>{items.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{items.offer}% off</Text>
                            <Text style={{ fontFamily: liteFont }}
                                > on personal care</Text>
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.shop}>SHOP NOW</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={items.image} />
                    </View>
                </View>)}
        </View>
    </View>
    )
}

export default Deals;

const styles = StyleSheet.create({
    cardSubContainer: {
        paddingLeft: 4
    },
    cardOverlay: {
        flexDirection: 'row',
        marginBottom: 25,
        marginVertical: 5
    },
    cardItem: {
        backgroundColor: 'white',
        width: 300,
        height: 130,
        margin: 10,
        elevation: 6,
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemName: {
        // paddingLeft:15,
        marginLeft: 15,
        marginVertical: 15
    },
    imageContainer: {
        width: 130,
        height: 130,
        flex: 1,
        paddingLeft: 20
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 20,
    },
    shop: {
        fontFamily: boldFont,
        color: 'green'
    },
    button: {
        backgroundColor: '#F1F5F9',
        padding: '2%',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: '6%',
        flex: 1
    },

})