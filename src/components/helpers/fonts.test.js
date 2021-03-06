import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';

import { createLoadFonts } from './fonts';

describe('loadFonts', () => {
  let Font, fonts, Component, rendered, view;

  beforeEach(() => {
    Font = { loadAsync: jest.fn(() => new Promise(resolve => resolve())) };
    fonts = {
      norddruck: require('../../assets/fonts/norddruck.ttf'),
      norddruckArrows: require('../../assets/fonts/norddruck_arrows.ttf')
    };
    Component = createLoadFonts(Font)(fonts)(View);
    rendered = shallow(<Component foo="bar" />, {
      lifecycleExperimental: true
    });

    view = rendered.find(View);
  });

  it('passes down fontsLoaded to the wrapped component', () => {
    expect(view.prop('fontsLoaded')).toBeDefined();
  });

  it('passes down all props to the wrapped component', () => {
    expect(view.prop('foo')).toEqual('bar');
  });
});
