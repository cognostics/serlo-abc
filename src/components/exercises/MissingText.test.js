import React from 'react';
import renderer from 'react-test-renderer';

import MissingLetter from './MissingText';

it('renders without crashing', () => {
  const tree = renderer.create(
    <MissingLetter
      image={require('../../assets/images/apfel.jpg')}
      sounds={[
        require('../../assets/sounds/apfel_short.mp3'),
        require('../../assets/sounds/apfel_long.mp3')
      ]}
      text="Apfel"
      missing={3}
      options={['a', 'n', 'e']}
    />
  );
  expect(tree).toMatchSnapshot();
});
