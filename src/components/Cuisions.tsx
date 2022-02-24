import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../global';
import { useNavigation } from '@react-navigation/native';



const Cusions = (props) => {

    const {name} = props

    return(
    <View style={styles.Conatiner}>
        <View style={styles.card}>
        <Image style={styles.image} source={require('../../assets/food2.jpg') } />
        <View style={{backgroundColor:'tomato',width:200,height:55,borderRadius:30,alignItems:'center',justifyContent:'center',elevation:2}}>
        <Text style={{fontSize:18,fontFamily: boldFont,color:'white',textAlign:'center' }}>{name}</Text>
        </View>
        </View>

    </View>
    )
}



export default Cusions;


const styles = StyleSheet.create({
    Conatiner:{
        flex:1,
        // backgroundColor:'#f1f4f9'
    },
    card:{
        width:'100%',
        height:100,
        backgroundColor:'#fff',
        borderWidth:0.5,
        borderColor:'tomato',
        elevation:3,
        borderRadius:15,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:100,
        marginVertical:20
    },
    image:{
        height:70,
        width:70,
        borderRadius:10,
        marginRight:20
    }
})