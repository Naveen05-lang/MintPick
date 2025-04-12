import React from 'react';
import {View,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import ProductListScreen from './screens/ProductListScreen';
import CategoryListScreen from './screens/CategoryListScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="CategoryList" component={CategoryListScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen} />       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




