import React, { Component, useState } from 'react';
import { TYSdk, Utils, IconFont, Divider } from 'tuya-panel-kit';
import CircularPicker from 'react-native-circular-picker';

import ContentLayout from './contentLayout';
import ConsoleLayout from './consoleLayout';
import LinearGradient from 'react-native-linear-gradient';
import icons from '../res/iconfont.json';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Dimensions, Button } from 'react-native';
import { Rect, Text as SvgText } from 'react-native-svg';
// import { Icon } from 'react-native-vector-icons/Icon'
// import WeekdayPicker from "react-native-weekday-picker"
import WeekdayPicker from "react-weekday-picker";

const { convertX: cx, convertY: cy } = Utils.RatioUtils;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const settingPage = () => {

  var modifiers = {
    'weekend': function (weekday) {
      return weekday == 0 || weekday == 6;
    }
  };
  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Planning</Text>
      </View>
      <View style={[styles.block]}>
        <TouchableOpacity flex flexDirection="row">
          <Text color="red" flex={1}>Plan A</Text>
          <Text color="red" flex={1}>Pluse</Text>
          <View flex={6}></View>
          {/* <Icon name="rocket" size={30} color="#900" /> */}
        </TouchableOpacity>
        <View>
          <Text>
            Start:
          </Text>
          <Text>
            18:00
          </Text>
          <Text>
            Duration
          </Text>
          <Text>
            02:15
          </Text>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: windowWidth * 0.05,
    backgroundColor: '#F8F8F8',
    height: windowHeight
  },
  block: {
    padding: 10,
    backgroundColor: "white",
    width: windowWidth * 0.9,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },
  heading: {
    margin: 10,
    fontSize: 25,
    fontWeight: "500"
  }
});
export default settingPage;