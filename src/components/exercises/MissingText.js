import { addIndex, map } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';

import { PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSounds, playAll } from '../helpers/audio';
import { RoundImageWithButton, TextPicker } from '../Components';
import Video from '../common/Video';
const mapIndexed = addIndex(map);

const styles = {
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  vidContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const MissingText = ({
  image,
  video,
  sounds,
  text,
  missing,
  options,
  ...props
}) => {
  const textParts = mapIndexed((part, key) => {
    if (key === missing) {
      return (
        <View key={key}>
          <TextPicker
            options={options}
            onChange={props.changeAnswer}
            selectedKey={props.currentAnswer}
          />
        </View>
      );
    }
    return (
      <View key={key} style={{ padding: 5 }}>
        <Text style={DEFAULT}>{part}</Text>
      </View>
    );
  }, text);

  const renderAssets = () => {
    if (image) {
      return (
        <RoundImageWithButton
          image={image}
          imageSize={200}
          icon={speakerImage}
          buttonSize={40}
          onPress={() => (sounds ? playAll(sounds) : null)}
        />
      );
    }
    if (video) {
      return (
        <View style={styles.vidContainer}>
          <Video video={video} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderAssets()}
      <View style={{ flexDirection: 'row' }}>{textParts}</View>
    </View>
  );
};

export default props => {
  const C = props.sounds ? loadSounds(MissingText) : MissingText;
  return <C {...props} />;
};
