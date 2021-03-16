import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import SignIn from '../screens/login';
import SignUp from '../screens/signup';
import Dashboard from '../screens/dashboard';
import Order from '../screens/order';
import Task from '../screens/task';
import Customer from '../screens/customer';
import Product from '../screens/product';
// import Customers from '../screens/customers';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen
          name="login"
          component={SignIn}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="order"
          component={Order}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="task"
          component={Task}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="customer"
          component={Customer}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="product"
          component={Product}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
