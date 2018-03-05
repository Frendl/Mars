import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, StatusBar } from "react-native";
import App from "./App/app";
import Title from "./App/titlePage";
import NavHandler from "./App/navHandler.js";

export default class Mars extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <NavHandler />
      </View>
    );
  }
}

AppRegistry.registerComponent("Mars", () => Mars);
