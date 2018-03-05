import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Modal
} from "react-native";

import Item from "./item.js";
import NASAAPI from "./nasaApi.js";
import List from "./itemList.js";
import Options from "./optionsModal.js";
import TappedItem from "./tappedItem.js";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      MarsImages: [],
      camera: "FHAZ",
      solDate: "1000",
      modalVisible: false,
      tappedItem: [],
      fullScreen: false
    };
  }

  componentDidMount() {
    this.refetchPhotos();
  }

  refetchPhotos() {
    NASAAPI.fetchPhotos(this.state.camera, this.state.solDate, json => {
      this.setState({ MarsImages: json.photos });
    });
  }

  newCamera(newCamera) {
    this.setState({ camera: newCamera }, () => {
      this.refetchPhotos();
    });
  }

  newSolDate(newSolDate) {
    this.setState({ solDate: newSolDate }, () => {
      this.refetchPhotos();
    });
  }

  modal(visible) {
    console.log("AppOptionsModalVisibility", visible);
    this.setState({ modalVisible: visible });
    console.log("PostActionAppOptionsModalVisibility", this.state.modalVisible);
  }

  imageTapped(imageTappedFromList) {
    console.log("Tapped Item in App Component", imageTappedFromList);
    this.setState({ tappedItem: imageTappedFromList });
  }

  fullScreen(switchValue) {
    console.log(switchValue);
    this.setState({ fullScreen: switchValue });
  }

  render() {
    console.log("App's State tappedItem object", this.state.tappedItem);
    return (
      <View style={{ flex: 1, marginTop: 0, backgroundColor: "#111111" }}>
        <View style={{ flex: 0 }}>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.fullScreen}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
            style={{ flex: 0 }}
          >
            <View style={{ flex: 1 }}>
              <TappedItem
                style={{ flex: 1, marginTop: 0 }}
                tappedItemData={this.state.tappedItem}
                fullScreenSwitch={this.fullScreen.bind(this)}
              />
            </View>
          </Modal>
        </View>
        <View style={{ flex: 1, marginTop: 0 }}>
          <List
            MarsImages={this.state.MarsImages}
            tapImageFunction={this.imageTapped.bind(this)}
            fullScreenSwitch={this.fullScreen.bind(this)}
            //properties should be lower case.
          />
        </View>
        <View style={{ flex: 0, marginTop: 0 }}>
          <Options
            camera={this.state.camera}
            solDate={this.state.solDate}
            onSolChange={this.newSolDate.bind(this)}
            onCamChange={this.newCamera.bind(this)}
            modalVisible={this.state.modalVisible}
            onModal={this.modal.bind(this)}
            navHandler={this.props.navHandler}
          />
        </View>
      </View>
    );
  }
}
