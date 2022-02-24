import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import '../../global';
import { useNavigation } from '@react-navigation/native';



const Reviews = (props) => {

    const {data} = props;

    const [show, setShow] = useState(false)


    return (
        <View style={styles.Conatiner}>
            {data.map(item=>
            <TouchableOpacity activeOpacity={0.8} style={{...styles.card,padding:18}} onPress={()=>setShow(!show)} key={item.id}>
                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'space-between',width:280}}>
                <View>
                <Text>{item.date}</Text>
                <Text style={{color:'black',fontFamily: boldFont, fontSize: 22 }}>{item.name}</Text>
                </View>
                
            <Icons name={show === true ? 'chevron-up':'chevron-down'} size={44} color={'gray'} style={{left:20}} />
            </View>
                {show &&
                    <View style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center',height:240,width:'100%' }}>
                        <View style={{ padding: 20, paddingHorizontal: 40, width: 250, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between', bottom: 30 }}>
                            <View style={styles.comments}>
                            <Text style={{textAlign: 'justify'}}>"{item.comments} "</Text>
                            </View>
                        </View>

                    </View>}
            </TouchableOpacity>)}

        </View>
    )
}



export default Reviews;


const styles = StyleSheet.create({
    Conatiner: {
        flex: 1,
        // backgroundColor:'#f1f4f9'
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'tomato',
        // elevation: 3,
        borderRadius: 15,
        padding: 10,
        // flexDirection:'row',
        // justifyContent:'space-between',
        paddingRight: 100,
        marginVertical: 20
    },
    comments:{
        marginVertical:25,
        // backgroundColor: 'blue',
        width:260,


    }
})