/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// index.ios.js build for ios
// import a liblary 

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create some component

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );


AppRegistry.registerComponent('albums', () => App);
