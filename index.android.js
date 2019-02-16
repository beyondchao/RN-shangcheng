/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './components/login';
import Main from './components/main';
import ProductList from './components/productList';
import Detail from './components/detail'
import {createStackNavigator} from 'react-navigation'

import {AppRegistry} from 'react-native';

var myNavigator = createStackNavigator({
  login:{
    screen:Login,
    navigationOptions:()=>{
      return {
        headerTitle:"登录",
        headerTitleStyle:{
          color:'#c40000',
          textAlign:'center',
          flex:1
        },
        headerStyle:{
          borderBottomWidth:1,
          borderColor:"#ccc",
        }
      }
    },
  },
  productList:{
    screen:ProductList,
    navigationOptions:()=>{
      return {
        headerTitle:"商品列表",
        headerTitleStyle:{
          color:'#c40000',
          textAlign:'center',
          flex:1
        },
        headerStyle:{
          borderBottomWidth:1,
          borderColor:"#ccc",
        }
      }
    }
  },
  main:{
    screen:Main,
    navigationOptions:()=>{
      return {
        headerTitle:"管理页面",
        headerTitleStyle:{
          color:'#c40000',
          textAlign:'center',
          flex:1
        },
        headerStyle:{
          borderBottomWidth:1,
          borderColor:"#ccc",
        }
      }
    }
  },
  detail:{
    screen:Detail
  }
})




AppRegistry.registerComponent('myapp', () => myNavigator);
