import React from 'react';
import {SafeAreaView,   TouchableOpacity,  StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts, Sizes ,Size} from '../../constants/styles';
import {PrimaryButton} from '../../components/Button';
import { Ionicons,MaterialIcons,Foundation } from "@expo/vector-icons";
import { fonts } from 'react-native-elements/dist/config';


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
  id: 3,
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


 

];


const CartScreen = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 5,
            padding: 10,
            flex: 1,
            alignItems:'flex-start',
          }}>
          <Text style={{...Fonts.blackColor16Bold,paddingVertical:0}}>{item.name}</Text>
         
          <Text style={{...Fonts.primaryColor18SemiBold,paddingVertical:15}}>₪{item.price}</Text>
        </View>
        <View
        style={{
          alignItems: 'center'
        }}>
       
        <View style={{ alignItems: 'center',paddingHorizontal:5}}>
          <Text style={{...Fonts.blackColor18Bold,paddingBottom:10}}>1</Text>
          <View style={style.actionBtn}>
            <Icon name="add" size={25} color={Colors.DEFAULT_WHITE} style={{paddingHorizontal:2}}/>
            <Icon name="remove" size={25} color={Colors.DEFAULT_WHITE} style={{paddingHorizontal:2}} />
          </View>
          <TouchableOpacity
                style={{
                  backgroundColor: Colors.SECONDARY_WHITE,
                  padding: Size/2,
                  borderRadius: Size * 1.5,
                  marginTop:10

                  
                }}
              >
        <MaterialIcons name="delete-forever" size={30} color="red" />
        </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.whiteColor, flex: 1}}>
      <View style={style.header}>
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
                  size={Size *1.5}
                 
           
                />
              </TouchableOpacity>
              
                      <Text style={{...Fonts.primaryColor24SemiBold,paddingHorizontal:10}}>المحفظة</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{paddingBottom: 80}}
        data={products}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        style={{backgroundColor:Colors.whiteColor}}
              />
        
            <View
            style={{            
backgroundColor:Colors.whiteColor,
              flexDirection:"colum",
              marginVertical: 5,
              borderColor:Colors.primaryColor,
              borderTopWidth:0.3,
              paddingHorizontal:20

              
            }}>
            <View
              style={{            

                flexDirection:"column",
                paddingVertical: 10,

                
              }}>
              <View  style={{
                flexDirection:"row",
                justifyContent: 'space-between',
                paddingVertical: 10,
                
              }}>
                <Text style={{...Fonts.blackColor20SemiBold}}>الفاتورة
                </Text>
                
                </View>
                <View
              style={{
                flexDirection:"row",
                justifyContent: 'space-between',
                paddingVertical: 10,
                
              }}>
                <Text style={{...Fonts.blackColor18SemiBold}}>
                مجموع السعر
              </Text>
              <Text style={{...Fonts.primaryColor18SemiBold}}>
$50</Text>
              </View>
              
            </View>
            <View style={{margin: 20,paddingBottom:40}}>
              <PrimaryButton title="تاكيد الطلب" />
            </View>
            </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 130,
    elevation: 1,
    borderRadius: 20,
    borderWidth:0.3,
    backgroundColor: Colors.SECONDARY_WHITE,
    marginVertical: 8,
    marginHorizontal: 20,
    borderColor:Colors.primaryColor,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 70,
    height: 30,
    backgroundColor:Colors.primaryColor,
    borderRadius: 30,
    paddingHorizontal: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
