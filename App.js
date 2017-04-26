import React from 'react';
import loadFonts from './src/components/helpers/fonts';
import { NativeModules } from 'react-native';
import NativeApp from './src'

const App = ({ fontsLoaded }) => fontsLoaded && <NativeApp />;

export default loadFonts({
  norddruck: require('./src/assets/fonts/norddruck.ttf'),
  serlo: require('./src/assets/fonts/serlo.ttf')
})(App);
