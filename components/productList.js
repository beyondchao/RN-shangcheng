import React, { Component } from 'react';
import { Text, View, FlatList, Image ,TouchableOpacity} from 'react-native';

class ProductLIst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pno: 1,
            totalPage: 0
        };
    }
    componentDidMount() {
        //发起请求，获取商品列表
        var url = "http://176.204.25.28:8080/product/list"
        fetch(url)
            .then(response => response.json())
            .then(result => {
                var tempList = result.data;
                for (let i = 0; i < tempList.length; i++) {
                    tempList[i].key = i
                }
                this.setState({
                    list: tempList,
                    totalPage: result.pageCount
                })
            })
    }
    loadMore = () => {
        console.log(12222222)
        var pno = this.state.pno;
        pno++;
        if (pno > this.state.totalPage) { return }

        var url = "http://176.204.25.28:8080/product/list?pno=" + pno;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                var tempList = this.state.list;
                var length = tempList.length
                for (var i = 0; i < result.data.length; i++) {
                    result.data[i].key = length + i
                }
                tempList = tempList.concat(result.data);
                this.setState({
                    list: tempList,
                    pno: pno
                })
            })
    }
    /**
     * info对象，包含item，index属性
     */
    handleShowItem = (info) => {
        return (
            <View >
                <TouchableOpacity 
                style={{ flexDirection: 'row',alignItems:'center' }}
                onPress={()=>this.handlePress(info.index)}>
                    <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={{ uri: "http://176.204.25.28/" + info.item.pic }}></Image>
                    <Text style={{fontSize:12}}>{info.item.title}</Text>
                </TouchableOpacity>
                <Text>{"\n"}</Text>
            </View>
        )
    }
    handlePress=(lid)=>{
        this.props.navigation.navigate("detail",{lid:lid})
    }
    render() {
        return (
            <View>
                <FlatList
                    onEndReached={this.loadMore}
                    data={this.state.list} extraData={this.state} renderItem={this.handleShowItem}></FlatList>
            </View>
        );
    }
}

export default ProductLIst;