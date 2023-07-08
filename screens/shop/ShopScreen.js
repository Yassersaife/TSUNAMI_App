import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "../../components/SearchField";
import Categories from '../../components/Categories';
import { Colors, Fonts, Sizes ,Size} from '../../constants/styles';
import { MaterialCommunityIcons, MaterialIcons ,Foundation} from '@expo/vector-icons';


const avatar = require("../../assets/images/icon.png");

const { width,height } = Dimensions.get("window");
const products =[
  { 
  id: 1,
  name: "iPhone 12",
  includes:"خصم اضافي %10",

  image: require('../../assets/images/products/iphone12.jpg'),
  price: "2259.99",
  description:"كفالة سنة",
  brandId: 1,
  date: 'جديد',
  storage: 128,
  battery:100,
  colors:[{
    id:1,
    code:Colors.redColor,
  },
  {
    id:2,
    code:Colors.DEFAULT_YELLOW,
  },
  {
    id:3,
    code:Colors.DEFAULT_WHITE,
  },
  {
    id:4,
    code:Colors.DEFAULT_BLACK,
  },
  {
    id:5,
    code:Colors.DEFAULT_GREEN,
  },


  ]
},
{ 
  id: 2,
  name: "iPhone 11",
  includes:"خصم اضافي %10",

  image: require('../../assets/images/products/iphone11.jpg'),
  price: "1259.99",
  description:"كفالة سنة",
  brandId: 1,
  date: 'جديد',
  storage: 128,
  battery:100,
  colors:[{
    id:1,
    code:Colors.redColor,
  },
  {
    id:2,
    code:Colors.DEFAULT_YELLOW,
  },
  {
    id:3,
    code:Colors.DEFAULT_WHITE,
  },
  {
    id:4,
    code:Colors.DEFAULT_BLACK,
  },
  {
    id:5,
    code:Colors.DEFAULT_GREEN,
  },


  ]
},

{ 
  id: 3,
  name: "iPhone 13 pro max",
  includes:"خصم اضافي %10",

  image: require('../../assets/images/products/iphone13.jpg'),
  price: "3259.99",
  description:"كفالة سنة",
  brandId: 1,
  date: 'جديد',
  storage: 256,
  battery:100,
  colors:[{
    id:1,
    code:Colors.redColor,
  },
  {
    id:2,
    code:Colors.DEFAULT_YELLOW,
  },
  {
    id:3,
    code:Colors.DEFAULT_WHITE,
  },
  {
    id:4,
    code:Colors.DEFAULT_BLACK,
  },
  {
    id:5,
    code:Colors.DEFAULT_GREEN,
  },


  ]
},

{ 
  id: 4,
  name: "iPhone 14 pro max",
  includes:"خصم اضافي %10",

  image: require('../../assets/images/products/iphone14.jpg'),
  price: "2259.99",
  description:"كفالة سنة",
  brandId: 1,
  date: 'جديد',
  storage: 128,
  battery:100,
  colors:[{
    id:1,
    code:Colors.redColor,
  },
  {
    id:2,
    code:Colors.DEFAULT_YELLOW,
  },
  {
    id:3,
    code:Colors.DEFAULT_WHITE,
  },
  {
    id:4,
    code:Colors.DEFAULT_BLACK,
  },
  {
    id:5,
    code:Colors.DEFAULT_GREEN,
  },


  ]
},

{ 
  id: 5,
  name: "Samsung Galaxy S23 Ultra",
  includes:"خصم اضافي %10",
  image: require('../../assets/images/products/u23.jpg'),
  price: "2259.99",
  description:"كفالة سنة",
  brandId: 2,
  date: 'جديد',
  storage: 256,
  battery:100,
  colors:[{
    id:1,
    code:Colors.redColor,
  },
  {
    id:2,
    code:Colors.DEFAULT_YELLOW,
  },
  {
    id:3,
    code:Colors.DEFAULT_WHITE,
  },
  {
    id:4,
    code:Colors.DEFAULT_BLACK,
  },
  {
    id:5,
    code:Colors.DEFAULT_GREEN,
  },


  ]
},

{ 
  id: 6,
  name: "Xiaomi Poco X5 Pro",
  includes:"خصم اضافي %10",

  image: require('../../assets/images/products/xiaomi.jpg'),
  price: "4000.99",
  description:"كفالة سنة",
  brandId: 3,
  date: 'جديد',
  storage: 256,
  battery:100,
},

 

];




const ShopScreen = ({navigation}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };


  return (
    <SafeAreaView>
      <ScrollView
        style={{

          padding: Size/2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding:10,

          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: Size*2,
              overflow: "hidden",
              width: Size * 5,
              height: Size * 5,
            }}
            
          >
            <BlurView

              style={{

                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.DARK_THREE,
                  padding: Size,
                  borderRadius: Size * 1.5,
                }}
              >
                <Image
              source={require('../../assets/images/icon.png')}
              style={{ width: 60, height: 60, borderRadius: 100.5,borderWidth: 0.1,  borderColor: Colors.primaryColor}}          />
            
              </TouchableOpacity>
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: Size * 5,
              height: Size * 5,
              overflow: "hidden",
              borderRadius: Size,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: Size / 2,
              }}
            >
            <Foundation
                        name="shopping-cart"
                        size={Size * 4}
                        color={Colors.primaryColor}
                      />
              
            </BlurView>
          </View>
        </View>
        <View style={{ width: "80%", marginVertical: Size * 3,  color: Colors.primary2,alignItems:'center',textAlign:'center'
}}>
          <Text
            style={{
              ...Fonts.blackColor24SemiBold,textAlign:'center',alignItems:'center',left:Size*4,
            }}
          >
           استعرض تشكيلتنا المتنوعة واختر الهاتف الأمثل عبر تطبيق 
          
          <Text
            style={{
              ...Fonts.primaryColor24SemiBold,paddingHorizontal:10
            }}>
            {" "}
             تسونامي فون
            {" "}
          
          </Text>
          
          </Text>
        </View>
        <SearchField searchQuery={searchQuery} handleSearch={handleSearch}/>

        <Categories onChange={(id) => setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginVertical:Size*2,
            paddingLeft:5,


          }}
        >
          {products
            .filter((item) => {
              if (activeCategoryId === null) {
                return true;
              }
              return item.brandId === activeCategoryId;
            })
            .map((item) => (
              
                <View
                key={item.id}
                style={{
                  width: width / 2 - Size * 2,
                  marginBottom: Size*2,
                  borderRadius: Size *3,
                  overflow: "hidden",
                  height:300,
                  
                }}
              >
                <BlurView
                
                  intensity={95}
                  style={{
                    backgroundColor:Colors.DARK_FIVE,
                    padding: Size,

                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 190,
                      width: "100%",
                    }}
                    onPress={() => {
                    navigation.navigate('ProductInfo', {
                      product: item
                    })}}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: Size * 2,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right:-9,
                        borderBottomStartRadius: Size * 3,
                        borderTopEndRadius: Size * 2,
                        overflow: "hidden",
                        top:-10
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: Size -2,
                        }}
                      >
                        <Foundation
                          style={{
                            marginLeft: Size / 2,
                          }}
                          name="burst-new"
                          color={Colors.primaryColor}
                          size={Size * 2}
                        />
                        <Text
                          style={{
                            ...Fonts.whiteColor14SemiBold,
                                 marginLeft: Size / 2,
                          }}
                        >
                          {item.date}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: Colors.blackColor,
                      ...Fonts.blackColor16Bold,
                      marginTop: Size,
                      marginBottom: Size / 2,
                      alignItems:'center',
                      textAlign: 'center',

                      
                      
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{...Fonts.blackColor12Regular, alignItems:'center',color:Colors.DEFAULT_RED,
                    textAlign: 'center',
}}
                  >
                    {item.includes}
                  </Text>
                  <View
                    style={{
                      marginVertical: Size / 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" ,  alignItems:'center',    padding:5,
}}>
                      <Text
                        style={{
                          color: Colors.lightPrimaryColor,
                          marginRight: Size / 2,
                          fontSize: Size * 2,
                        }}
                      >
                        ₪
                      </Text>
                      <Text
                        style={{ color: Colors.DARK_ONE, fontSize: Size * 1.6 }}
                      >
                        {item.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                           onPress={() => {
                    navigation.navigate('ProductInfo', {
                      product: item
                    });
                }}

                      style={{
                        backgroundColor: Colors.DEFAULT_WHITE,
                        padding: Size ,
                        borderRadius: Size,
                        borderBottomRightRadius:30,
                        left:10
                      }}
                    >
                      <MaterialIcons
                        name="add-shopping-cart"
                        size={Size * 3}
                        color={Colors.primaryColor}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
