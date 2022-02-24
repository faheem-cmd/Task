import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../global';
import { useNavigation } from '@react-navigation/native';


const HotelList = (props) => {

    const {data} = props;
    const navigation = useNavigation();

    useEffect(() => {
        startLoading()
    }, []);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 60);
    };


    const [loading, setLoading] = useState(false)


    if (loading) {
        return <View style={[styles.listItems, { justifyContent: 'center', alignItems: 'center' }]}><ActivityIndicator size="small" color="#FD6244" /></View>
    }
    return (
        <View>
            {data.map(items =>
                <View style={styles.WrapperContainer} key={items.id}>
                    <TouchableOpacity activeOpacity={0.3}  onPress={() => navigation.navigate('RestuarentSingle',{data:items})}>
                        <View style={styles.listItems}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../../assets/hotel.jpg')} />
                            </View>
                            <View style={styles.titleContainer}>
                                <Text style={{ fontFamily: boldFont, fontSize: 18 }}>{items.name}</Text>
                                <Text style={{ fontFamily: boldFont, fontSize: 14, color: 'grey' }}>{items.neighborhood}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>)}
        </View>

    )
}


export default HotelList;


const styles = StyleSheet.create({
    WrapperContainer: {
        padding: '2%'

    },
    listItems: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'blue',
        marginBottom: 10
    },
    image: {
        height: null,
        width: null,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 200
    },
    imageContainer: {
        height: 50,
        width: 50
    },
    titleContainer: {
        marginHorizontal: 20
    }



})