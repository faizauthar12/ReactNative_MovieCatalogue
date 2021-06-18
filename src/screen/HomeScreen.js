import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image} from "react-native";
import Movies from "../dummy/MoviesData";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// debugging
//console.log(windowWidth);
//console.log(windowHeight);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyles}>
      <FlatList
        data={Movies}
        keyExtractor={Movie => Movie.name}

        renderItem={({ item }) => {
          return(
            <TouchableOpacity 
              style={styles.Rectangle}
              onPress={()=>{navigation.navigate("Detail")}}>
              <Image
                style={styles.Image}
                source={require('../../assets/movie.jpg')}
              />
              <View style={styles.viewStylesChild1}>
                <Text>
                  <Text style={styles.textHighlight}>{item.name}</Text>({item.release})
                </Text>
                <Text numberOfLines={4}>
                  {item.desc}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyles: {
    alignItems: "center"
  },
  viewStylesChild1: {
    flexDirection: "column",
    flex: 2,
    marginStart: 10
  },
  Rectangle:{
    borderRadius: 10,
    margin: 5,
    padding: 20,
    width: windowWidth / 1.1,
    height: windowHeight / 5.5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    flexDirection: "row"
  },
  Image: {
    width: windowWidth/6,
    height: windowWidth/4,
    justifyContent: 'center',
  },
  textHighlight: {
    fontWeight: "700",
  }
});

export default HomeScreen;
