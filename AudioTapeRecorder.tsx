import I18next from 'i18next';

import React, { useRef, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import { SvgImgPath } from '../../assets/images';
import Timer from '../Timer';
import styles from './styles';

const audioRecorderPlayer = new AudioRecorderPlayer();

interface propType {
  testID?: string;
  showDescriptionText?: boolean;
  audioState?: string;
  extraStyle?: { backgroundColor?: string; color?: string; fontFamily?: string, borderColor?: string };
}

// AudioTapeRecorder Component
const AudioTapeRecorder = ({ testID, showDescriptionText, audioState, extraStyle }: propType) => {
  const recordingPath = useRef<string>('');
  const [recorderState, setRecorderState] = useState(audioState ??'UNUSED'); //UNUSED, RECORDING, RECORDED, PLAYING
  const timerShouldActive =
    recorderState === 'RECORDING' || recorderState === 'PLAYING' ? true : false;

  // Function to start recording
  const startRecording = async () => {
    try {
      const path = `${RNFS.DocumentDirectoryPath}/recording.mp3`;

      recordingPath.current = path;
      await audioRecorderPlayer.startRecorder(path);

      audioRecorderPlayer.addRecordBackListener(e => {
        return;
      });
      setRecorderState('RECORDING');
    } catch {
      /* empty */
    }
  };

  // Function to stop recording
  const stopRecording = async () => {
    try {
      await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();

      setRecorderState('RECORDED');
    } catch {
      /* empty */
    }
  };

  // Function to play recording
  const playRecording = async () => {
    try {
      const fileExists = await RNFS.exists(recordingPath.current);
      if (!fileExists) {
        Alert.alert('Error', 'Audio file not found.');
        return;
      }

      if (recorderState === 'PLAYING') {
        await stopPlaying();
      }

      await audioRecorderPlayer.startPlayer(recordingPath.current);
      setRecorderState('PLAYING');
      audioRecorderPlayer.addPlayBackListener(e => {
        if (e?.currentPosition && e?.duration) {
          if (e.currentPosition === e.duration) {
            stopPlaying();
          }
        }
        return;
      });
    } catch (error: any) {
      Alert.alert(error, 'Unable to play recording.');
    }
  };

  // Function to stop playing
  const stopPlaying = async () => {
    try {
      await audioRecorderPlayer.stopPlayer();
      setRecorderState('RECORDED');
    } catch {
      /* empty */
    }
  };

  // Component to render left view of the recorder
  const RecorderLeftView = () => {
    switch (recorderState) {
      case 'UNUSED':
        return (
          <Text testID={`tag-label-1`} style={styles.voiceText}>
            {I18next.t('Select_Location.TapRecordDetails')}
          </Text>
        );

      case 'RECORDING':
        return (
          <View testID={`tag-label-2`} style={styles.playingLeftView}>
            {/* To Do => To make a Timer Component here.... */}
            <Timer isActive={timerShouldActive} />
            <SvgImgPath.Waves height={24} width={24} />
          </View>
        );

      case 'RECORDED':
        return (
          <View testID={`tag-label-3`} style={styles.playingLeftView}>
            {/*   Circular Button */}
            <TouchableOpacity
              testID={'tag-label-4'}
              style={styles.circleBtn}
              onPress={onRecorderBtnPressed}>
                {audioState === 'RECORDED' ?
                  <SvgImgPath.PlayWhite height={15} width={15} />
                  :
                  <SvgImgPath.Play height={18} width={18} />
                }
            </TouchableOpacity>

            {/* To Do => To make a Timer Component here.... */}
            <Text style={{color: extraStyle?.color, fontFamily: extraStyle?.fontFamily}}>{'00:21'}</Text>
            <SvgImgPath.Waves height={24} width={24} />
          </View>
        );

      case 'PLAYING':
        return (
          <View testID={`tag-label-5`} style={styles.playingLeftView}>
            <TouchableOpacity
              testID={`tag-label-6`}
              style={styles.circleBtn}
              onPress={onRecorderBtnPressed}>
              <SvgImgPath.PauseBtn height={12} width={12} />
            </TouchableOpacity>
            <Timer isActive={timerShouldActive} />
            <SvgImgPath.Waves height={24} width={24} />
          </View>
        );

      default:
        return null;
    }
  };

  // Function to handle recorder button press
  const onRecorderBtnPressed = () => {
    recorderState === 'UNUSED'
      ? startRecording()
      : recorderState === 'RECORDING'
      ? stopRecording()
      : recorderState === 'PLAYING'
      ? stopPlaying()
      : playRecording();
  };

  // Component to render right view of the recorder
  const RecorderRightView = () => {
    switch (recorderState) {
      case 'UNUSED':
        return (
          <TouchableOpacity onPress={onRecorderBtnPressed}>
            <SvgImgPath.Voice height={24} width={24} />
          </TouchableOpacity>
        );

      case 'RECORDING':
        return (
          <TouchableOpacity onPress={onRecorderBtnPressed}>
            <SvgImgPath.Record height={24} width={24} />
          </TouchableOpacity>
        );

      case 'RECORDED':
        return null;

      case 'PLAYING':
        return (
          <TouchableOpacity style={styles.rightView}>
            <Text style={styles.speedTxt}>{'1x'}</Text>
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };
  
  // Component to render the AudioTapeRecorder
  return (
    <>
      <View testID={testID} style={[styles.voiceView, {backgroundColor: extraStyle?.backgroundColor}]}>
        <RecorderLeftView />
        <RecorderRightView />
      </View>
      {showDescriptionText && <Text style={styles.voiceText}>{'Recording up to 5 mins accepted'}</Text>}
    </>
  );
};

export default AudioTapeRecorder;
