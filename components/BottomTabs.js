
import Icon, { Icons } from '../constants/Icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, Sizes,images } from '../constants/styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import * as Animatable from 'react-native-animatable';
import HomeScreen from '../screens/home/homeScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import CartScreen from '../screens/shop/CartScreen';


const TabArr = [
  { route: 'Home', label: 'Home', type: MaterialCommunityIcons, activeIcon: 'home', inActiveIcon: 'home-outline', component:HomeScreen },
  { route: 'Search', label: 'Search', type: MaterialCommunityIcons, activeIcon: 'shopping-search', inActiveIcon: 'shopping-search',component: ShopScreen },
  { route: 'Cart', label: 'Cart', type: MaterialCommunityIcons, activeIcon: 'cart', inActiveIcon: 'cart-outline', component: CartScreen },
  

];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primaryColor : Colors.lightPrimaryColor} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})