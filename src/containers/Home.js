/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TYSdk, Utils, IconFont, Divider } from 'tuya-panel-kit';
import { useState } from 'react';
import CircularPicker from 'react-native-circular-picker';

import ContentLayout from './contentLayout';
import ConsoleLayout from './consoleLayout';
// import { LinearGradient } from 'tuya-panel-kit';
import LinearGradient from 'react-native-linear-gradient';
// import { Button } from 'react-native-elements';
// import { Icon } from 'react-native-vector-icons/Icon';
import icons from '../res/iconfont.json';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Dimensions, Button } from 'react-native';
import { Rect, Text as SvgText } from 'react-native-svg';
// import Dialog from "react-native-dialog";

const { convertX: cx, convertY: cy } = Utils.RatioUtils;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    dpData: PropTypes.object.isRequired,
    logs: PropTypes.array,
  };

  render() {
    return (
      <View style={{ flex: 1 }, [styles.container]}>
        {/* <ContentLayout
          style={{ flex: 2, paddingTop: 5 }}
          dpData={this.props.dpData}
          dispatch={this.props.dispatch}
        />

        <ConsoleLayout style={{ flex: 1 }} dispatch={this.props.dispatch} logs={this.props.logs} /> */}
        <View flexDirection="row" style={{ marginVertical: 20, justifyContent: 'center' }}>
          <View>
            <IconFont d={icons.close} size={cx(28)} fill="#ff0" stroke="#ff0" />
          </View>
          <View>
            <Text accessibilityLabel="HomeScene_TopView_Mode" style={[styles.text], { fontSize: 14 }}>
              Battery Full
            </Text>
          </View>
        </View>
        <View flexDirection="row" style={styles.matchCenter}>
          <View flexDirection="column" style={styles.matchCenter}>
            <Text accessibilityLabel="HomeScene_TopView_Mode" style={[styles.text], { fontSize: 20, fontWeight: "500" }}>
              Next Program
            </Text>
          </View>
        </View>
        <View flexDirection="row" style={styles.matchCenter}>
          <Text accessibilityLabel="HomeScene_TopView_Mode" style={[styles.text], { fontSize: 14 }}>
            Wednesday 18:30
          </Text>
        </View>
        <View flexDirection="row" style={{ marginVertical: 20, justifyContent: 'center' }}>
          <View style={styles.circle}>
            <View flexDirection="row">
              <View>
                <Text style={{ color: "grey", fontSize: 65 }}>
                  5
                </Text>
              </View>
              <View>
                <Text style={{ color: "grey", fontSize: 20 }}>
                  L
                </Text>
              </View>
            </View>
            <Text>
              lastest usage
            </Text>
            <View height={50} />
            <View width={windowWidth / 2}>
              <Divider height={1} />
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text>Current mode</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "500" }} >Closed</Text>
          </View>
        </View>


        <View flexDirection="row" style={{ marginTop: 40, justifyContent: 'center' }}>
          {/* <Button
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ['red', 'pink'],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }} /> */}
          <TouchableOpacity style={styles.button}>
            {/* <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradient}>
              <Text style={styles.text}>Gradient Button</Text>
            </LinearGradient> 
          <LinearGradient
              x1={0} y1={30}
              x2={100} y2={30}
              stops={{
                '0%': 'rgba(98,194,161,1)',
                '100%': 'rgba(104,210,161,1)',
              }}
            >
              <Rect x="0" y="0" rx="15" ry="15" height={50} width={200} />
              <SvgText stroke="white" fill="white" strokeWidth="1.1"
                stroke-width="20px" x="80" y="15" fontSize="20">Open</SvgText>
            </LinearGradient>*/}
            <Text style={{ fontSize: 20, color: 'white', fontWeight: '500', }}>
              Open
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Dialog.Container visible={true}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" />
          <Dialog.Button label="Delete" />
        </Dialog.Container> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F8F8F8',
    height: windowHeight
  },
  circle: {
    borderRadius: 1000,
    borderColor: '#111',
    backgroundColor: 'white',
    width: windowWidth - 80,
    height: windowWidth - 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: "grey",
    backgroundColor: "#62C2A1",
    width: windowWidth / 1.5,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  matchCenter: {
    justifyContent: 'center',
    marginVertical: 5
  },
  section__mode: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: cx(16),
    paddingVertical: cy(6),
    borderRadius: cy(15),
  },

  section__quality: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: cy(11),
  },

  section__fault: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: cy(36),
    paddingHorizontal: cx(18),
    backgroundColor: '#FF813E',
  },

  quality__left: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  quality__right: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: cx(6),
    paddingHorizontal: cx(6),
  },
  text: {
    color: '#333',
  },

  text__big: {
    fontSize: cx(18),
    marginRight: cx(6),
  },
});