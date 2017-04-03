import React from 'react';
import { View, Text } from 'react-native';

import { RoundButton, RoundImageWithBorder } from '../Components';
import icon from '../../assets/images/speaker.png';
import { loadSound } from '../helpers/audio';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00B4D5',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row'
  },
  bigLetter: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  }
};

const MatchImage = ({ images, text, sound }) => {
  const play = () => {
    sound.playAsync();
    sound.setPlaybackFinishedCallback(() => {
      sound.setPositionAsync(0);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <RoundImageWithBorder image={images[0]} size={100} />
          <RoundImageWithBorder image={images[1]} size={100} />
        </View>
        <View style={styles.row}>
          <RoundImageWithBorder image={images[2]} size={100} />
          <RoundImageWithBorder image={images[3]} size={100} />
        </View>
      </View>
      <View style={[styles.row, { alignItems: 'flex-end' }]}>
        <Text style={styles.bigLetter}>{text}</Text>
        <RoundButton
          icon={icon}
          size={20}
          onPress={play}
          style={{
            marginLeft: 10
          }}
        />
      </View>
    </View>
  );
};

export default loadSound(MatchImage);
