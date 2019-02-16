import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,ScrollView,Button } from 'react-native';

export default class MainComponent extends Component {
  /**
   * path:要跳转的目的地的路由地址
   */
  handlePress=(path)=>{
    this.props.navigation.navigate(path)
  }

  render() {
    // powderblue(:- 10:35)
    return <ScrollView style={{ backgroundColor: 'powderblue' }}>
      {/* 第一行 */}
      <View style={{ flexDirection: 'row' }}>
        {/* 第一列 */}
        <View style={myStyles.myCol}>
          <Text style={{ color: 'red', fontSize: 25 }}>200</Text>
          <Text>当日PC端PV量</Text>
        </View>
        {/* 第二列 */}
        <View style={myStyles.myCol}>
          <Text style={{ color: 'green', fontSize: 25 }}>230</Text>
          <Text>移动端PV量</Text>
        </View>
      </View>
      {/* 第二行 */}
      <View style={{ flexDirection: 'row' }}>
        {/* 第一列 */}
        <View style={myStyles.myCol}>
          <Text style={{ color: 'red', fontSize: 25 }}>1020</Text>
          <Text>已完成订单总数</Text>
        </View>
        {/* 第二列 */}
        <View style={myStyles.myCol}>
          <Text style={{ color: 'green', fontSize: 25 }}>2390</Text>
          <Text>当日App下载量</Text>
        </View>
      </View>
      <Text>{'\n\n'}</Text>
      {/* 第三行 */}
      <View style={{ flexDirection: 'row' }}>
        {/* 第一列 */}
        <TouchableOpacity style={myStyles.myNewCol}>
          <Image style={{width:60,height:60}} source={require("../imgs/order.png")}></Image>
          <Text>订单管理</Text>
        </TouchableOpacity>
        {/* 第二列 */}
        <TouchableOpacity  style={myStyles.myNewCol}>
          <Image style={{width:60,height:60}} source={require("../imgs/user.png")}></Image>
          <Text>用户管理</Text>
        </TouchableOpacity>        
      </View>
      {/* 第四行 */}
      <View style={{ flexDirection: 'row' }}>
        {/* 第一列 */}
        <TouchableOpacity 
        onPress={()=>this.handlePress("productList")}
        style={myStyles.myNewCol}>
          <Image style={{width:60,height:60}} source={require("../imgs/product.png")}></Image>
          <Text>商品管理</Text>
        </TouchableOpacity>
        {/* 第二列 */}
        <TouchableOpacity  style={myStyles.myNewCol}>
          <Image style={{width:60,height:60}} source={require("../imgs/setting.png")}></Image>
          <Text>设置</Text>
        </TouchableOpacity>        
      </View>     
      <Text>{'\n\n'}</Text> 
    </ScrollView>
  }
}

var myStyles = StyleSheet.create({
  myNewCol:{
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myCol: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white'
  }
})