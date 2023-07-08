import React from 'react';
import {SafeAreaView,   TouchableOpacity,  StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Fonts, Sizes ,Size} from '../../constants/styles';
import {PrimaryButton} from '../../components/Button';
import { Ionicons,MaterialIcons,Foundation } from "@expo/vector-icons";


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
        <Image source={item.image} style={{height: 100, width: 100}} />
        <View
          style={{
            height: 100,
            marginLeft: 5,
            paddingVertical: 5,
            flex: 1,
            alignItems:'flex-start',
          }}>
          <Text style={{...Fonts.blackColor16Bold,paddingVertical:5}}>{item.name}</Text>
          <Text style={{...Fonts.grayColor14SemiBold,paddingVertical:5}}>
            {item.includes}
          </Text>
          <Text style={{...Fonts.blackColor18Bold,paddingVertical:5}}>₪{item.price}</Text>
        </View>
        <View style={{ alignItems: 'center',paddingHorizontal:10}}>
          <Text style={{...Fonts.blackColor18Bold,paddingBottom:10}}>1</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={Colors.DEFAULT_WHITE} />
            <Icon name="add" size={25} color={Colors.DEFAULT_WHITE} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
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
                  size={Size * 2}
                 
           
                />
              </TouchableOpacity>
              
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>المحفظة</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={products}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                مجموع السعر
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="تاكيد الطلب" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 130,
    elevation: 15,
    borderRadius: 15,
    borderWidth:1,
    backgroundColor: Colors.SECONDARY_WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor:Colors.primaryColor,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor:Colors.lightPrimaryColor,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
