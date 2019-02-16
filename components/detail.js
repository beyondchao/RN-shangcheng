import React, { Component } from "react";
import { Text, View, ScrollView, Image, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import Global from '../utility/global'


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            lid: 0
        };
    }
    componentDidMount() {
        var lid = this.props.navigation.getParam("lid");
        var url = Global.baseUrl + "/product/detail?lid=" + (lid + 1);
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    details: result.details
                })
            })
    }
    render() {
        return (
            <View style={{ backgroundColor: "#fff" }}>
                <ScrollView style={{height:730}}>
                    {
                        this.state.details.picList
                        &&
                        <Swiper
                        style={{width:400,height:500,alignSelf:"center"}}
                        loop={true}
                        autoplay={true}
                        autoplayTimeout={3}
                        horizontal={true}
                        showsPagination={true}
                        >
                            {
                                this.state.details.picList.map((value, key) => {
                                    return (
                                        <Image style={{ width: 400, height: 400 ,alignSelf:"center",marginTop:30}} source={{ uri: Global.baseImgUrl + value.md }}></Image>
                                    )
                                })

                            }
                        </Swiper>
                    }
                    <Text style={{marginBottom:20}}>{this.state.details.title}</Text>
                    <Text style={{marginBottom:20}}>{this.state.details.subtitle}</Text>
                </ScrollView>
                <View>
                    <Button title="编辑产品" color="red"></Button>
                </View>
            </View>
        );
    }
}

export default Detail;