import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image} from "react-native";

import axios from "axios";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const api_key = "1110d80a15a91f4772f9806279f2affa";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${path}`;

// debugging
//console.log(windowWidth);
//console.log(windowHeight);

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/popular", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);
  
  return (
    <View style={styles.viewStyles}>
      <FlatList
        data={data}
        keyExtractor={Movie => Movie.title}

        renderItem={({ item }) => {
          return(
            <TouchableOpacity 
              style={styles.Rectangle}
              onPress={()=>{
                navigation.navigate(
                  "Detail",
                  {title: item.title, release: item.release_date, desc: item.overview, poster: getImage(item.poster_path)}
                )
              }}
            >
              <Image
                style={styles.Image}
                source={{uri: getImage(item.poster_path)}}
              />
              <View style={styles.viewStylesChild1}>
                <Text>
                  <Text style={styles.textHighlight}>{item.title}</Text>
                </Text>
                <Text>({item.release_date})</Text>
                <Text numberOfLines={3}>
                  {item.overview}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

// TODO: Fix bad implementation of layout.
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
