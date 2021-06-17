import React from "react";
import { Text, StyleSheet, View} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.view}>
        <Text>Home Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    margin: 10
  }
});

export default HomeScreen;
