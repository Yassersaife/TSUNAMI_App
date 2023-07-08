import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image

} from "react-native";
import React, { useState } from "react";

import brandsdata from "../data/brands";
import { Colors,Fonts,Size, Sizes } from "../constants/styles";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {brandsdata.map((item, id) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => handlePress(item.id)}>
            <View
              style={{
                backgroundColor:
                activeCategoryId == item.id
                    ? Colors.primaryColor
                    : Colors.primary4,
                ...style.categoryBtn,
                
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={item.brandImage}
                  style={{height: 45, width: 45, resizeMode: 'cover',    }}
                />
              </View>
              <Text
                style={{
                  ...Fonts.blackColor16Bold,
                  paddingHorizontal:10,
                  color:
                  activeCategoryId == item.id
                      ? Colors.whiteColor
                      : Colors.DEFAULT_BLACK,
                }}>
                {item.brandCategory}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
  );
};

export default Categories;

const style = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryBtn: {
    height: 55,
    width: 160,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 45,
    width: 45,
    borderRadius: 20,
    backgroundColor:Colors.SECONDARY_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
