import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

export default class TappedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemTapped: props.itemTapped
    };
  }

  onItemPress() {
    const switchValue = false;
    this.props.fullScreenSwitch(switchValue);
  }

  render() {
    console.log("TappedItem Item this", this);
    let uri = this.props.tappedItemData.img_src;
    uri = uri.replace("http", "https");
    return (
      <TouchableOpacity
        onPress={() => this.onItemPress()}
        style={{ flex: 1, height: 300 }}
      >
        <Image
          style={{ flex: 1, height: 300, backgroundColor: "black" }}
          cover={Image.resizeMode.contain}
          source={{ uri: uri }}
        />
        <Text style={{ color: "white" }}> {this.props.tappedItemData.id} </Text>
      </TouchableOpacity>
    );
  }
}
