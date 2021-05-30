import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
const {width, height} = Dimensions.get("window")

const CarousalItem = ({item}) => {



    return ( 
        <View style={styles.cardView}>
            <Image style={styles.image} source={{uri: item.url}} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}> {item.description} </Text>
            </View>
        </View>
     );
}
 
export default CarousalItem;

const styles = StyleSheet.create({
    cardView:{
        flex:1,
        width: width,
        height: height /3,
        backgroundColor: "white",
        shadowColor:"#000",
        shadowOffset:{width:0.8, height: 0.8},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5
    },

    textView:{
        position:"absolute",
        bottom:10,
        margin:10,
        left:5
    },

    image:{
        width: width,
        height: height/3,
    },

    itemTitle:{
        color:"white",
        fontSize: 22,
        shadowColor: "#000",
        shadowOffset: {width:0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        elevation:5,
        fontWeight: "bold",
    },

    itemDescription: {
        color: "white", 
        fontSize: 12,
        shadowColor: "#000",
        shadowOffset: {width:0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation:5
    }
})