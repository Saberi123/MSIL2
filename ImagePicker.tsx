import React from 'react';
import {
  Alert,
  Modal,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ImagePickerResponse, launchCamera } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Layout } from '../assets/theme/Layout';
import Colors from '../assets/theme/color';
import FONTS from '../assets/theme/font';
import VectorIcon from '../assets/VectorIcon';
import { normalize } from '../assets/theme/Typography';

interface SelectProps {
  recieveImages?: any;
  onClose(): void;
  showPicker?: boolean;
  testID?: string;
}

interface pickerPropTypes {
  mediaType: string;
  iconName: string;
  iconType: string;
  label: string;
  testID?: string;
}

const maxVideoSize: number = 50 * 1024 * 1024;
const maxImageSize: number = 5 * 1024 * 1024;

const pickOptions = [
  {
    mediaType: 'photo',
    iconName: 'camera-outline',
    iconType: 'Ionicons',
    label: 'Take Picture',
  },
  {
    mediaType: 'video',
    iconName: 'image-outline',
    iconType: 'Ionicons',
    label: 'Make a Video',
  },
];

const ImagePicker: React.FC<SelectProps> = ({
  showPicker,
  testID,
  onClose,
  recieveImages,
}) => {
  const toggle = (mediaType: string) => {
    onClose();
    requestCameraPermission(mediaType);
  };

  const requestCameraPermission = async (mode: string) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message:
            'Allow Maruti Suzuki Superapp to access your Camera to click photos?',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera(mode);
      } else {
        Alert.alert(
          'Permission Denied',
          'Camera permission is required to click photos.'
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = (mode: string) => {
    let options: any = {
      mediaType: mode,
      maxWidth: 1920,
      maxHeight: 1080,
      includeBase64: false,
      quality: 1,
    };
    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        Alert.alert('Cancelled', 'You did not take any photo.');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        console.log(
          'response from Camera',
          response.assets[0].fileSize,
          5 * 1024 * 1024
        );
        if (response.assets[0]?.type == 'video/mp4') {
          if (response.assets[0]?.fileSize > maxVideoSize) {
            // show alert message of size limit
            Alert.alert('Error', 'File size should be less than 50MB');
          } else {
            recieveImages(response.assets);
          }
        } else if (response.assets[0]?.fileSize > maxImageSize) {
          // show alert message of size limit
          Alert.alert('Error', 'File size should be less than 5MB');
        } else {
          recieveImages(response.assets);
        }
      }
    });
  };

  const PickerOption = ({
    mediaType,
    iconName,
    iconType,
    label,
    testID,
  }: pickerPropTypes) => {
    return (
      <TouchableOpacity
        testID={testID}
        style={Styles.touchStyle}
        onPress={() => toggle(mediaType)}>
        <View style={Styles.imageCamera}>
          <VectorIcon
            iconName={iconName}
            iconType={iconType}
            color={Colors.orange}
            size={24}
          />
        </View>
        <Text style={Styles.textStyle}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      testID={testID}
      visible={showPicker}
      transparent={true}
      animationType="slide"
      style={Styles.bottomSheetContainer}
      onRequestClose={() => onClose()}>
      <TouchableOpacity
        testID={'picker-background'}
        activeOpacity={0}
        onPress={() => onClose()}
        style={Styles.pickerBG}>
        <LinearGradient
          colors={['#C7DDF8', '#F0FAE0', '#C7DDF8']}
          style={Styles.gradientStyle}
          start={{ x: 0, y: 0.6 }}
          end={{ x: 1.3, y: 0 }}
          locations={[0.3, 1, 0.5]}>
          <View style={Styles.container}>
            <View style={Styles.handleBack} />
            {pickOptions.map((picker, pickerIndex) => {
              let { mediaType, iconName, iconType, label } = picker;
              return (
                <PickerOption
                  key={`picker-${label}`}
                  testID={`picker-${pickerIndex}`}
                  mediaType={mediaType}
                  iconName={iconName}
                  iconType={iconType}
                  label={label}
                />
              );
            })}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: normalize(120),
    paddingHorizontal: normalize('24'),
  },
  imageCamera: {
    height: normalize('40'),
    width: normalize('40'),
    borderRadius: normalize('40'),
    marginHorizontal: normalize('10'),
    backgroundColor: Colors.white70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.black,
  },
  line: { height: normalize('2'), backgroundColor: Colors.borderColor },
  touchStyle: {
    flexDirection: 'row',
    height: normalize(60),
    paddingVertical: normalize('10'),
    alignItems: 'center',
  },
  gradientStyle: {
    height: normalize(200),
    width: '100%',
    backgroundColor: Colors.white,
    borderTopRightRadius: Layout.dimensions.margin_20,
    borderTopLeftRadius: Layout.dimensions.margin_20,
    position: 'absolute',
    bottom: normalize(0),
  },
  bottomSheetContainer: {
    height: normalize('500'),
    backgroundColor: Colors.white,
    borderTopEndRadius: Layout.dimensions.margin_30,
    borderTopLeftRadius: Layout.dimensions.margin_20,
  },
  handleBack: {
    width: normalize('70'),
    height: Layout.dimensions.margin_3,
    alignSelf: 'center',
    backgroundColor: Colors.gray,
    marginVertical: Layout.dimensions.margin_10,
  },
  pickerBG: {
    flex: 1,
    backgroundColor: Colors.imagePickerBG, // Black background with 50% opacity
    justifyContent: 'flex-end', // To position the button at the bottom
  },
});

export default ImagePicker;
