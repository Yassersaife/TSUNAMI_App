import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Ionicons,MaterialIcons,Foundation } from "@expo/vector-icons";
import { Colors, Fonts, Sizes ,Size} from '../../constants/styles';
import { BlurView } from "expo-blur";

const { height, width } = Dimensions.get("window");


const ProductInfo = ({ navigation,route }) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const { product} = route.params;

  
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={product.image}
            style={{
              height: height / 2 + Size * 6,

              justifyContent: "space-between",
            }}
            imageStyle={{
              borderRadius: Size * 4,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: Size * 1,
              }}
            >
              <TouchableOpacity
               onPress={() => navigation.pop()}
                style={{
                  backgroundColor: Colors.DARK_THREE,
                  padding: Size,
                  borderRadius: Size * 1.5,
                  
                }}
              >
                <Ionicons
                  name="arrow-forward"
                  color={Colors.primaryColor}
                  size={Size * 2}
                 
           
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.DARK_THREE,
                  padding: Size,
                  borderRadius: Size * 1.5,
                }}
              >
                <Foundation
                  name="heart"
                  color={Colors.DEFAULT_RED}
                  size={Size * 2}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderRadius: Size * 3,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={70}
                tint="dark"
                style={{
                  padding: Size * 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      ...Fonts.whiteColor18SemiBold,
                      marginBottom: Size,
                    }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={{
                      ...Fonts.whiteColor14SemiBold,
                      paddingVertical:Size,
                      textAlign:'left'
                    }}
                  >
                    {product.includes}
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: Size/2 }}>
                    <Foundation

                      name="burst-new"
                      size={Size * 3}
                      color={Colors.DEFAULT_YELLOW}
                    />
                    <Text
                      style={{
                        ...Fonts.whiteColor22Bold,
                        marginLeft: Size,
                      }}
                    >
                      {product.date}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "40%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    
                  </View>
                  <View
                    style={{
                      borderRadius: Size / 2,
                      alignItems: "center",
                      flexDirection: 'row',
                justifyContent: 'space-between',

                    }}
                  >
                  <View
                      style={{
                        padding: Size / 4,
                        width:Size*5,
                        height: Size*5,
                        backgroundColor: Colors.DARK_FOUR,
                        borderRadius: Size,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons
                        name="sd-storage"
                        size={20}
                        color={Colors.primaryColor}
                      />
                      <Text
                        style={{
                          ...Fonts.primaryColor14SemiBold

                        }}
                      >
                       {product.storage}G
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: Size / 4,
                        width: Size * 5,
                        height: Size * 5,
                        backgroundColor: Colors.DARK_FOUR,
                        borderRadius: Size,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons
                        name="battery-charging-full"
                        size={Size * 2}
                        color={Colors.primaryColor}
                      />
                      <Text
                        style={{
                          ...Fonts.primaryColor14SemiBold
                        }}
                      >
                       %{ product.battery}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderRadius: Size / 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...Fonts.primaryColor16SemiBold
                      }}
                    >
                    Tsunami Phone

                    </Text>
                                      
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical:Size,
              left:10,


            }}
          >
           <Text
              style={{
                ...Fonts.blackColor18Bold,
                marginBottom: Size,
                padding:Size,
              }}
            >
              اللون
            </Text>
            {product.colors.map((color, index) => (
              <View
                key={color.id}
                style={[
                  {
                    margin: Size / 2,
                    borderRadius: Size * 2,
                  },
                  activeColorIndex === index && {
                    borderWidth: Size / 2,
                    borderColor: Colors.DARK_FIVE,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => setActiveColorIndex(index)}
                  style={{
                    backgroundColor: color.code,
                    height:25,
                    width: 25,
                    borderRadius: 30,
                  }}
                />
              </View>
            ))}
          </View>
          <View
            style={{
              padding: Size,
              flexDirection: "column",
              paddingVertical:Size*2,
              alignItems:'flex-start',
              left:10,


              
            }}
          >
            <Text
              style={{
                ...Fonts.blackColor18Bold,
                textAlign:'right',

              }}
            >
            المواصفات
            </Text>
            
            <Text numberOfLines={3} style={{ color: Colors.DEFAULT_BLACK ,              textAlign:'right',
}}>
              {product.description}
            </Text>
            
            
          </View>
          
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View
          style={{
            padding: Size,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: Size * 3,
          }}
        >
          <Text style={{ color: Colors.blackColor, fontSize: Size * 1.5}}>
            السعر
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: Colors.primaryColor, fontSize: Size * 2.5 }}>
            ₪
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontSize: Size * 2.5,
                marginLeft: Size / 2,
              }}
            >
              {product.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginRight: Size,
            backgroundColor: Colors.primaryColor,
            width: width / 2 + Size * 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: Size * 2,
          }}
        >
          <Text
            style={{
              color: Colors.DEFAULT_WHITE,
              fontSize: Size * 2,
              fontWeight: "700",
            }}
          >
            أشتري الان
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
