import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import CarousalItem from "./CarousalItem";
const { width, height } = Dimensions.get("window");





const Carousal = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const [dataList, setDataList] = useState(data)

  useEffect(()=>{
      setDataList(data)
      infiniteScroll(dataList)
  },[])

  let flatList = useRef(null);

  function infiniteScroll(dataList) {
    const numberData = dataList.length;
    let scrollValue = 0,
      scrolled = 0;
  
    setInterval(function() {
      scrolled++;
      if (scrolled < numberData) {
          scrollValue = scrollValue + width;
      } else {
          scrollValue = 0;
        scrolled = 0;
      }
      if(flatList.current){
          flatList.current.scrollToOffset({ animated: true, offset: scrollValue });
      }
    },3000);
  }

  if (data && data.length > 0) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `key${index}`}
          ref={flatList}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarousalItem item={item} />;
          }}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default Carousal;
