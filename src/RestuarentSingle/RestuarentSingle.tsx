import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchSelector from 'react-native-switch-selector';


import '../../global';
import Cusions from '../components/Cuisions'
import Reviews from '../components/Reviews'
import Hours from '../components/Hours'





const RestuarentSingle = ({ navigation, route }) => {


    const options = [
        { label: 'Cuisine', value: 1 },
        { label: 'Opearating Hours', value: 2 },
    ];

    const data = route.params.data

    const [hours, setHours] = useState(1)

    const handleFilter = (value) => {
        console.log(value);
        if (value === 1) {
            setHours(1)
        }else{
            setHours(2)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/hotel3.jpg')} />
                </View>
            </View>
            <ScrollView>
                <View style={styles.title}>
                    <Text style={{ color: 'black', fontFamily: boldFont, fontSize: 22 }}>{data.name}</Text>
                    <View style={styles.filter}>
                        <SwitchSelector options={options} initial={0} onPress={value => handleFilter(value)}
                            buttonColor={'tomato'} backgroundColor={'#D3D3D3'} fontSize={15} />
                    </View>
                    {hours === 1 ? 
                    <>
                        <Cusions name={data.cuisine_type} />
                        <Text style={{ color: 'black', fontFamily: boldFont, fontSize: 22 }}>Reviews</Text>
                        <Reviews data={data.reviews} />
                    </>:
                    <Hours time={data.operating_hours.Monday}
                    time2={data.operating_hours.Tuesday}
                    time3={data.operating_hours.Wednesday}
                    time4={data.operating_hours.Thursday}
                    time5={data.operating_hours.Friday}
                    time6={data.operating_hours.Saturday}
                    time7={data.operating_hours.Sunday}/>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default RestuarentSingle;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ffff'
    },
    subContainer: {
        // padding:'5%',
    },
    image: {
        height: null,
        width: null,
        flex: 1,
        resizeMode: 'cover',
        // borderRadius:22

    },
    imageContainer: {
        width: '100%',
        height: 240,
    },
    title: {
        marginVertical: 10,
        padding: 10
    },
    filter: {
        width: '100%',
        marginVertical: 15,
        paddingHorizontal: 20,

    }
})