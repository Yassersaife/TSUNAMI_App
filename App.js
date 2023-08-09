import 'react-native-gesture-handler';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { withTranslation } from 'react-i18next';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './components/loadingScreen';
import SplashScreen from './screens/splashScreen';
import OnboardingScreen from './screens/onBoarding/onboardingScreen';
import {  CardStyleInterpolators } from 'react-navigation-stack';
import { I18nManager } from 'react-native';
import i18n from './languages/index';//don't remove this line
import BottomTabs from './components/BottomTabs';
import ProductInfo from './screens/shop/ProductInfo';
import CartScreen from './screens/shop/CartScreen';


LogBox.ignoreAllLogs();
// Set text direction to RTL (right-to-left)
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
           ...TransitionPresets.SlideFromLeft, // Apply the desired transition preset
        }}
      >

        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs}  />
        <Stack.Screen name="ProductInfo" component={ProductInfo}/>
        <Stack.Screen name="Cart" component={CartScreen}/>




      </Stack.Navigator>
    </NavigationContainer>
    
  );
}



export default App = () => {
 
  return (
    <Route />

  );
}