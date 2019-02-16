import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet } from 'react-native';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            upwd: ''
        };
    }
    handleSaveUname = (msg) => {
        this.setState({
            uname: msg
        })
    }
    handleSaveUpwd = (msg) => {
        this.setState({
            upwd: msg
        })
    }
    handlePress = () => {
        var uname = this.state.uname;
        var upwd = this.state.upwd;
        var url = "http://176.204.25.28:8080/user/login";
        var config = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `uname=${uname}&upwd=${upwd}`
        }
        fetch(url, config)
            .then((response) => response.json())
            .then(result => {
                console.log(result);
                if (result.code == 200) {
                    alert("登陆成功")
                    this.props.navigation.navigate("main")
                }
            })
    }
    render() {
        return (
            <View>
                <Image style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }} source={require("../imgs/3.jpg")}></Image>
                <TextInput
                    style={styles.myTextInput}
                    onChangeText={this.handleSaveUname}
                    value={this.state.uname}
                    placeholder='请输入用户名'
                    underlineColorAndroid="transparent"></TextInput>
                <TextInput
                    style={styles.myTextInput}
                    onChangeText={this.handleSaveUpwd}
                    value={this.state.upwd}
                    placeholder="请输入密码"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                ></TextInput>
                <Button style={styles.shadowStyle} title="登录" onPress={this.handlePress}></Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    myTextInput: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 15,
        height: 40,
        backgroundColor: '#fff'
    },

    shadowStyle: {
        shadowColor: '#ccc',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        elevation: 10,
        borderBottomWidth:1,
        borderColor:"#ccc"
    }

})

export default Login;