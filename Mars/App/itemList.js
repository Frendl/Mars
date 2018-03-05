import React, { Component } from "react";
import { View, FlatList, Text, Image } from "react-native";

import Item from "./item.js";
import NASAAPI from "./nasaApi.js";
import Sol from "./solDateField.js";
import Picker from "./cameraPicker.js";

export default class List extends Component {
  constructor(props) {
    super();
    this.state = {
      MarsImages: [],
      itemTapped: props.itemTapped
    };
  }

  SendImage(TappedImage) {
    console.log("TappedImage", TappedImage);
    this.setState({ itemTapped: TappedImage });
    this.props.TappedImage(TappedImage);
  }

  render() {
    console.log(this);
    return (
      <View style={{ flex: 1, marginTop: 0, backgroundColor: "#111111" }}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.props.MarsImages}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }

  renderItem(item) {
    return <Item item={item} {...this.props} />;
  }
}
