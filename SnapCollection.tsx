import VectorIcon from '../assets/VectorIcon';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Layout } from '../assets/theme/Layout';
import { SvgImgPath } from '../assets/images';
//import { normalize } from 'Theme/Typography';

interface SnapCollectionProps {
  mediaSnaps: { snapshot: any; snapIndex: any }[];
  removeSnap: (snapIndex: any) => void;
  testID?: string;
  extraPicWrapperStyle?: object;
  canManageSnaps?: boolean;
  extraSnapsWrapper?: object;
  onOpenPicker?: () => void;
  onPressSnap?: () => void;
}

const SnapCollection: React.FC<SnapCollectionProps> = ({
  mediaSnaps,
  removeSnap,
  testID,
  extraPicWrapperStyle,
  extraSnapsWrapper,
  canManageSnaps = true,
  onOpenPicker,
  onPressSnap,
}) => {
  return (
    <View testID={testID} style={[styles.snapsWrapper, extraSnapsWrapper]}>
      {mediaSnaps?.map((snapshot: any, snapIndex: any) => {
        return (
          <TouchableOpacity
            onPress={onPressSnap}
            testID={`snap-${snapIndex}`}
            key={snapIndex}
            style={[styles.picWrapper, extraPicWrapperStyle]}>
            <Image
              testID={`image-${snapIndex}`}
              source={
                snapshot?.uri
                  ? { uri: snapshot?.uri }
                  : require('../content/puncturePic.png')
              }
              style={styles.image}
              resizeMode="cover" // You can use other modes like 'contain', 'stretch', etc.
            />
            {canManageSnaps && (
              <TouchableOpacity
                testID={`close-button-${snapIndex}`}
                onPress={() => removeSnap(snapIndex)}
                style={styles.closeIcon}>
                <VectorIcon
                  iconName="close"
                  color={'#ffffff'}
                  iconType="AntDesign"
                  size={15}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        );
      })}
      {canManageSnaps && (
        <TouchableOpacity testID={'add-image-btn'} onPress={onOpenPicker}>
          <SvgImgPath.AddImageIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Layout.dimensions.size(65),
    aspectRatio: 1,
    borderRadius: Layout.dimensions.borderRadius_10,
  },
  closeIcon: {
    position: 'absolute',
    width: Layout.dimensions.size(25),
    aspectRatio: 1,
    borderRadius: Layout.dimensions.borderRadius_15,
    backgroundColor: '#3A8FFF',
    top: Layout.dimensions.size(-6),
    right: Layout.dimensions.size(-6),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Layout.dimensions.borderWidth_1,
    borderColor: '#ffffff',
  },
  snapsWrapper: {
    width: '100%',
    paddingVertical: Layout.dimensions.padding_10,
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  picWrapper: {
    position: 'relative',
    marginRight: Layout.dimensions.margin_15,
    marginVertical: Layout.dimensions.margin_5,
  },
});

export default SnapCollection;
