import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./screen/Home";

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
