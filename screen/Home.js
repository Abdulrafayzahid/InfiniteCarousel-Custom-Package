import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import CarouselW from 'react-native-banner-carousel-updated';
import Carousal from '../components/Carousal';
import { dummyData } from '../Data/DATA';
const {width, height} = Dimensions.get("window")
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
const Home = () => {
    const renderPage = (image, index) => {
        console.log(image.url);
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image.url }} />
            </View>
        );
    }
        return ( 
        <View>
            <Text style={{fontSize:24,marginBottom:20}}>Custom Slider</Text>
            <Carousal data={dummyData} />

            <Text style={{fontSize:24,marginVertical:20}}>Package Slider</Text>

            <View style={styles.container}>
                <CarouselW
                    autoplay
                    autoplayTimeout={3000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                    pageIndicatorStyle={{backgroundColor:"grey"}}
                    activePageIndicatorStyle={{backgroundColor:"blue"}}
                >
                    {dummyData.map((image, index) => renderPage(image, index))}
                </CarouselW>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        width: BannerWidth, height: BannerHeight
    },
});
export default Home;