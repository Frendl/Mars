import React, { Component } from "react";
import { View, StyleSheet, Text, Picker } from "react-native";

export default class CamPicker extends Component {
  constructor(props) {
    super();
    this.state = {
      camera: props.camera
    };
  }

  handleValueChange(itemValue) {
    console.log("ItemCamValue ", itemValue);
    this.setState({ camera: itemValue });
    this.props.onChange(itemValue);
  }

  render() {
    return (
      <View style={styles.pickerViewStyle}>
        <Picker
          itemStyle={styles.pickerStyle}
          selectedValue={this.state.camera}
          onValueChange={this.handleValueChange.bind(this)}
        >
          <Picker.Item color="white" label="All Cameras" value="" />
          <Picker.Item
            color="white"
            label="Front Hazard Avoidance Camera"
            value="FHAZ"
          />
          <Picker.Item color="white" label="Navigation Camera" value="NAVCAM" />
          <Picker.Item color="white" label="Mast Camera" value="MAST" />
          <Picker.Item
            color="white"
            label="Chemistry and Camera Complex"
            value="CHEMCAM"
          />
          <Picker.Item
            color="white"
            label="Mars Hand Lens Imager"
            value="MAHLI"
          />
          <Picker.Item
            color="white"
            label="Mars Descent Imager"
            value="MARDI"
          />
          <Picker.Item
            color="white"
            label="Rear Hazard Avoidance Camera"
            value="RHAZ"
          />
        </Picker>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  pickerViewStyle: {},
  pickerStyle: {
    color: "white"
    // backgroundColor: 'blue'
  }
});
