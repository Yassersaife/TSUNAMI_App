import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Colors,Fonts,Size } from "../constants/styles";

import { Ionicons } from "@expo/vector-icons";

const SearchField = (props) => {
  return (
    <View
      style={{
        borderRadius: Size*3,
        overflow: "hidden",
        backgroundColor:Colors.DEFAULT_WHITE,
        borderWidth:1,
        borderColor:Colors.primaryColor,
        marginVertical:Size*2,
        width:'90%',
        left:20
        


      }}
    >
      <BlurView
      
        style={{
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "80%",
           ...Fonts.blackColor18Bold,
            padding: Size,
            paddingLeft: Size * 3.5,
            textAlign:'right'
          }}
          placeholder="ابحث عن ..."
          placeholderTextColor={Colors.DARK_THREE}
          value={props.searchQuery}
          onChangeText={props.handleSearch}

        />
        <Ionicons
          style={{
            position: "absolute",
            left: Size,
          }}
          name="search"
          color={Colors.primaryColor}
          size={Size * 3}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
