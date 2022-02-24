import { declareTypeAlias } from '@babel/types';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground, ActivityIndicator, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import '../../global';
import customData from '../data/restaurants.json';



const Hours = (props) => {

    const {time,time2,time3,time4,time5,time6,time7} = props

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: 'black', fontFamily: boldFont, fontSize: 22, borderBottomWidth: 2 }}>Opearting Hours</Text>
                <View style={styles.table}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Monday</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont, }}>{time}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Tuesday</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont, }}>{time2}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Wednesd</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont, }}>{time3}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Thursday</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont, }}>{time4}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Friday</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont, }}>{time5}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Saturday</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont,width:170 }}numberOfLines={1}>{time6}</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.date}>
                            <Text style={{ fontSize: 18, color: 'tomato', fontFamily: boldFont, }}>Sunday</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: 'black', fontFamily: boldFont,width:170 }} numberOfLines={1}>{time7}</Text>
                    </View>


                </View>

            </View>
        </View>
    )
}

export default Hours;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    table: {
        width: '100%',
        height: 360,
        borderWidth: 1,
        marginVertical: 12,
        borderColor: 'tomato',
        borderRadius: 10,
        padding: 12
    }, date: {
        borderWidth: 1,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'red',
        marginVertical: 4,

    }
})