import Colors from '../../assets/theme/color';
import Slider from '@react-native-community/slider';
import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Video, { ReactVideoSource, VideoRef } from 'react-native-video';
import { formatTime } from '../../utilities/TimeConversion';
import { normalize } from '../../assets/theme/Typography';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

type VideoPlayerProps = {
  source: ReactVideoSource;
  index: number;
  testID?: string;
};

const VideoPlayer = ({ source, index, testID }: VideoPlayerProps) => {
  const videoRef = useRef<VideoRef>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current?.seek(0);
      setIsPlaying(false);
    }
  }, [index]);

  const onLoad = (data: { duration: number }) => {
    setDuration(data.duration);
  };

  const onProgress = (data: { currentTime: number }) => {
    setCurrentTime(data.currentTime);
  };

  const handleSeek = (time: number) => {
    videoRef.current?.seek(time);
  };

  const togglePlayback = () => {
    setIsPlaying(prev => !prev);
  };

  const onEnd = () => {
    setIsPlaying(false);
    videoRef.current?.seek(0);
    setCurrentTime(0); // Reset time when video ends
  };

  const onError = () => {
    console.error('Video loading error');
  };

  return (
    <View testID="main-container" style={styles.container}>
      <Video
        testID={testID}
        ref={videoRef}
        source={source}
        style={styles.video}
        paused={!isPlaying}
        onLoad={onLoad}
        onEnd={onEnd}
        onProgress={onProgress}
        onError={onError}
      />
      <View style={styles.controls}>
        <TouchableOpacity testID="pause-button" onPress={togglePlayback}>
          <Icon
            name="control-pause"
            size={normalize(20)}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Slider
          testID="slider"
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          thumbTintColor={Colors.white}
          onSlidingComplete={handleSeek}
          minimumTrackTintColor={Colors.blue}
          maximumTrackTintColor={Colors.white}
        />
        <Text testID="time-text" style={styles.time}>
          {`${formatTime(currentTime)} / ${formatTime(duration)}`}
        </Text>
      </View>

      {!isPlaying && (
        <TouchableOpacity
          testID="play-button"
          style={styles.micIconContainer}
          onPress={togglePlayback}>
          <Feather name="play" size={normalize(35)} color={Colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoPlayer;
