import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailScreen =  ({route}) => {
    //console.log(route);
    
    return(
        <View >
            <Image
                style={styles.imageBackground}
                source={{uri: route.params.poster}}
            />
            <View style={styles.viewChild}>
                <Image
                    style={styles.imageStyles}
                    source={{uri: route.params.poster}}
                />
                <Text style={styles.textTitle}>
                    <Text style={styles.textHighlight}>{route.params.title}</Text> ({route.params.release})
                </Text>
                <Text>{route.params.desc}</Text>
            </View>
        </View>
    )
}

// TODO: Fix bad implementation of layout.
const styles = StyleSheet.create({
    viewChild: {
        marginTop: 10,
        marginStart: 30,
        marginEnd: 30
    },
    imageStyles: {
        width: windowWidth/3,
        height: windowWidth/2,
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 20
    },
    imageBackground: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight/3.3,
        opacity: 0.4
    },
    textTitle: {
        fontSize: 30
    },
    textHighlight: {
        fontWeight: "700"
    }
});

export default DetailScreen;