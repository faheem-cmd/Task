import { declareTypeAlias } from '@babel/types';
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground, ActivityIndicator, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import '../global';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Foodlists from './components/Foodlists'
import Deals from './components/Deals'
import customData from './data/restaurants.json';

const HomePage = ({ navigation }) => {

    useEffect(() => {
        startLoading()
    }, []);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 20);
    };


    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(customData)

    const renderItem = ({ item }) => {
        return (
            <View style={styles.hotelsCardListView} key={item.id}>
                <TouchableOpacity activeOpacity={0.7} style={styles.hotelCard} onPress={() => navigation.navigate('RestuarentSingle',{data:item})}>
                    <View style={styles.imageHotelContainer}>
                        <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.imageHotel} source={require('../assets/dd.jpg')}>
                            <View style={styles.imageHotelContent}>
                                <View style={styles.hotelContainer}>
                                    <View style={styles.header}>
                                        <Image style={styles.headerImg} source={require('../assets/food.jpg')} />
                                        <Text style={{ color: 'white', fontFamily: boldFont, fontSize: 14 }}>{item.name}</Text>
                                    </View>
                                    <View style={styles.plus}>
                                        <Text style={{ color: 'white', fontFamily: boldFont }}>Plus</Text>
                                    </View>
                                </View>
                                <View style={{ padding: '5%', marginVertical: '14%' }}>
                                    <Text style={{ color: 'white', fontFamily: liteFont }}>{item.neighborhood}</Text>
                                    <View style={{ margin: 0 }}>
                                        <Text style={{ color: 'white', fontFamily: boldFont, fontSize: 18 }}>{item.address}</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                <View style={{ padding: 10 }}></View>

            </View>
        )
    };


    if (loading) {
        return <View style={[styles.Container, { justifyContent: 'center', alignItems: 'center' }]}><ActivityIndicator size="large" color="#FD6244" /></View>
    }
    return (
        <View style={styles.Container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <View style={styles.firstCard}>
                        <View style={styles.location}>
                            <Text style={styles.subText}>You are in</Text>
                            <View style={styles.titleContainer}>
                                <View style={styles.currentPlace}>
                                    <Image source={require('../assets/loc.png')} />
                                    <Text style={styles.titles}> Eranamkulam </Text>
                                    <Icon name={"chevron-down"} size={20} color={'black'} />
                                </View>
                                <TouchableOpacity style={styles.account}>
                                    <Icon name={"account"} size={20} color={'#C7D3DC'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.searchLayoutWrap}>
                            <View style={styles.searchLayout}>
                                <TouchableOpacity activeOpacity={0.8} style={styles.searchInputContainer} onPress={() => navigation.navigate('SearchPage')}>
                                    <Icon style={styles.icon} name={"magnify"} size={22} color={'grey'} />
                                    <View style={styles.searchInput}><Text style={{ color: 'grey', fontFamily: liteFont }}>Search in places,restuarents....</Text></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Foodlists />
                    </ScrollView>
                </View>
                <View style={styles.dealsCardView}>
                    <View style={styles.title}>
                        <Text style={styles.deals}>Deals</Text>
                        <Icon style={styles.icon} name={"chevron-right"} size={22} color={'black'} />
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Deals />
                    </ScrollView>
                </View>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={styles.restuarent}><Text style={{ fontSize: 20, fontFamily: boldFont }}>Restuarents around you</Text></View>
                    <FlatList
                        data={data.restaurants}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </View>

    )
}

export default HomePage


const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F1F5F9',
    },
    subContainer: {
        backgroundColor: 'white',
        // padding: '3%',
    },
    subText: {
        fontFamily: liteFont,
        fontSize: 12,
        color: '#868686',
        width: 80,
        top: '28%'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    location: {
        padding: '3%',

    },
    titles: {
        fontFamily: boldFont,
        fontSize: 14
    },
    account: {
        height: 42,
        width: 40,
        backgroundColor: '#EFF4F8',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        elevation: 0.5
    },
    currentPlace: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    searchLayoutWrap: {
        marginVertical: '2%',
        marginBottom: '5%'
    },
    foodList: {
        flexDirection: 'row',
        marginVertical: '3%',
        paddingLeft: 10,
        marginBottom: 25
    },
    deals: {
        fontSize: 20,
        fontFamily: boldFont
    },
    restuarent: {
        paddingLeft: '3%',
        marginVertical: 22
    },
    headerImg: {
        height: 30,
        width: 30,
        borderRadius: 6,
        marginRight: 10
    },
    firstCard: {
        paddingHorizontal: '3%'
    },

    searchLayout: {
        // marginBottom: 25,
        paddingHorizontal: '3%',
        // backgroundColor: 'blue',

    },
    shop: {
        fontFamily: boldFont,
        color: 'green'
    },
    searchInputContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#EFF4F8',
        borderRadius: 50,
        // marginVertical: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 0.5,

    },
    searchInput: {
        padding: 0,
        width: '100%',


    },
    icon: {
        paddingRight: 8,
    },
    dealsCardView: {
        backgroundColor: 'white',
        marginVertical: '3%',
    },
    title: {
        padding: '4%',
        marginVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    hotelsCardListView: {
        // backgroundColor: 'blue',
        paddingHorizontal: '3%',
    },
    hotelCard: {
        backgroundColor: 'white',
    },
    imageHotelContainer: {
        backgroundColor: 'white'
    },
    imageHotel: {
        height: 200,
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 100

    },
    imageHotelContent:
    {
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        height: 200,
        borderRadius: 10
    },
    hotelContainer: {
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    plus: {
        height: 30,
        width: 60,
        borderRadius: 4,
        backgroundColor: '#18AB32',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer: {
        padding: '4%',
        // height: 250,
        backgroundColor: '#fff',
        margin: '5%',
        marginVertical: 70,
        borderRadius: 6,
        elevation: 2,
        flex: 1,
        borderWidth: 0.3
    },
    modalSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        padding: 8,
        backgroundColor: '#F1F5F9',
        borderRadius: 10,
        marginVertical: 10
    },
    search: {
        padding: 0,
        width: '100%',
        paddingLeft: '3%',
        paddingRight: 20
    },
    modalLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        padding: 5,
        marginVertical: 10
    },
    border: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        marginLeft: 30

    }



})