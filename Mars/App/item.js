import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";

import TappedItem from "./tappedItem.js";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemTapped: false,
      Image: []
    };
  }

  onItemPress() {
    const imageTappedFromList = this.props.item.item;
    const switchValue = true;
    console.log("Pressed Item Data:", imageTappedFromList);
    this.props.tapImageFunction(imageTappedFromList);
    this.props.fullScreenSwitch(switchValue);
  }

  render() {
    let uri = this.props.item.item.img_src;
    uri = uri.replace("http", "https");
    console.log(this);
    return (
      <TouchableOpacity
        onPress={this.onItemPress.bind(this)}
        style={{ flex: 1, height: 300 }}
      >
        <Image
          style={{ flex: 1, height: 300, backgroundColor: "black" }}
          cover={Image.resizeMode.contain}
          source={{ uri: uri }}
        />
        <View
          style={{
            flex: 0,
            height: 20,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white" }}> 
            {this.props.item.item.id}
          </Text>
          <Text style={{ color: "white" }}>
            {this.props.item.item.earth_date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
