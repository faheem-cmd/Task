import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import '../global';

import customData from './data/restaurants.json';
import HotelList from './SearchOptions/HotelList'




const searchPage = ({ navigation }) => {


    const [page, setPage] = useState(true)
    const [searchField, setsearchField] = useState(null)
    const [close, setClose] = useState(false)
    const [data, setData] = useState(customData)


    const filter = () => {
        return searchField ? data.restaurants.filter((i) => !i.address.toLowerCase().search(searchField.toLowerCase())) : data.restaurants
    }

    //check search text length for changing pages
    const handleChange = (e) => {
        setsearchField(e)
        if (e !== null) {
            if (e.length >= 1) {
                setClose(true)
            } else {
                setClose(false)
            }
            console.log('close icon enable')
            if (e.length >= 2) {
                console.log('show restuarent page')
                setPage(false)
            } else {
                setPage(true)
            }
        }

    }

    const handleSelect = (name) => {
        handleChange(name)
    }

    const handleClear = (clear) => {
        setsearchField('')
        handleChange('')
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <View style={styles.backBtn}>
                        <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => navigation.goBack()}>
                            <Icon name={"arrow-left"} size={24} color={'#FD6244'} />
                        </TouchableOpacity>
                        <View style={styles.searchContainer}>
                            <View style={styles.searchBar}>
                                <Icon name={"magnify"} size={22} color={'grey'} />
                                <TextInput value={searchField} autoFocus={true} placeholder='Search places or reastuarents' style={styles.search}
                                    onChangeText={(e) => handleChange(e)}>
                                </TextInput>
                                <TouchableOpacity onPress={(clear) => handleClear(clear)}>
                                    {close && <Icon style={styles.closeBtn} name={"close"} size={18} color={'grey'} />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {page === true ?
                    <View>
                        <View style={styles.history}>
                            <Text style={styles.recent}>SUGGESTED PLACES</Text>
                        </View>
                        {filter().map(item =>
                            <TouchableOpacity keyboardShouldPersistTaps={'handled'} key={item.id} onPress={() => handleSelect(item.address)}>
                                <View style={styles.historyList}>
                                    <Icon name={"map-marker-radius"} size={22} color={'rgba(52, 52, 52, 0.5)'} />
                                    <View style={{ marginHorizontal: '8%' }} >
                                        <Text style={{ fontFamily: baseFont, fontSize: 16 }}>{item.address}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>)}

                    </View> : <HotelList navigation={navigation} data={filter()} />}
            </ScrollView>
        </View>
    )
}

export default searchPage


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        padding: '3%'
    },
    subContainer: {
        alignItems: 'center',  
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    search: {
        padding: 0,
        width: '100%',
        paddingLeft: 5
    },
    searchBar: {
        backgroundColor: '#F4F4F4',
        width: '100%',
        padding: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 0.5,
        paddingRight: '16%'
    },
    title: {
        fontSize: 12,
        fontFamily: boldFont,
        color: 'grey',
        paddingLeft: 10
    },
    recent: {
        fontSize: 12,
        fontFamily: boldFont,
        color: 'grey',
        paddingLeft: 12,
        marginVertical: 2
    },
    list: {
        padding: 5,
        backgroundColor: '#F4F4F4',
        width: 80,
        borderRadius: 6,
        margin: 5
    },
    name: {
        fontFamily: boldFont,
        color: 'grey',
        backgroundColor: '#F1F4F9',
        padding: 8,
        borderRadius: 10,
        paddingHorizontal: 15,
        margin: 5
    },
    history: {
        marginVertical: 10,
    },
    historyList: {
        paddingHorizontal: '3%',
        flexDirection: 'row',
        marginBottom: '8%',
    },

})