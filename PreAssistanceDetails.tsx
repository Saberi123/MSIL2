import React, { useState } from 'react';
import { View, Text, StyleSheet, LayoutAnimation } from 'react-native';
import SnapCollection from './SnapCollection';
import ImagePicker from './ImagePicker';
import CustomButton from './Common/CustomButton';
import Colors from '../assets/theme/color';
import { normalize } from '../assets/theme/Typography';
import ImagePreviewScreen from './ImagePreviewModal/ImagePreviewModal';

const PreAssistanceDetails = () => {
  const [preAssistancePics, setPreAssistancePics] = useState<any[]>([]);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const removeSnapShot = (indexToRemove: any) => {
    const newSnaps = preAssistancePics.filter(
      (snap, snapIndex) => snapIndex !== indexToRemove
    );
    setPreAssistancePics(newSnaps);
  };

  const recieveAssistancePics = (pics: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPreAssistancePics([...preAssistancePics, ...pics]);
  };

  const openDeviceCamera = async () => {
    setShowImagePicker(true);
  };

  const previewMediaFiles = () => {
    setShowPreviewModal(true);
  };

  return (
    <View testID={'container'} style={styles.container}>
      <Text style={styles.label}>Pre Assistance Details*</Text>

      <View testID={'instruction-row'} style={styles.instructionRow}>
        <Text style={styles.instruction1}>Vehicle Images/Videos</Text>
        <Text style={styles.instruction2}>Files up to 5MB accepted</Text>
      </View>

      <SnapCollection
        testID="pre-assistance-snaps"
        mediaSnaps={preAssistancePics}
        removeSnap={removeSnapShot}
        canManageSnaps={true}
        onOpenPicker={openDeviceCamera}
        extraSnapsWrapper={styles.snapsWrapper}
        onPressSnap={previewMediaFiles}
      />

      <CustomButton
        testID={'confirm-button'}
        style={styles.button}
        textStyle={styles.buttonText}
        title={'Confirm'}
        onPress={() => {}}
      />

      {showImagePicker && (
        <ImagePicker
          testID={'image-picker'}
          showPicker={showImagePicker}
          onClose={() => {
            setShowImagePicker(false);
          }}
          recieveImages={recieveAssistancePics}
        />
      )}

      {showPreviewModal && (
        <ImagePreviewScreen
          testID={'preview-modal'}
          images={preAssistancePics}
          visible={showPreviewModal}
          onClose={() => setShowPreviewModal(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: normalize(16),
  },
  button: {
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(12),
    padding: normalize(10),
    marginTop: normalize(5),
  },
  buttonText: {
    color: Colors.white,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: normalize(16),
  },
  instructionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(16),
  },
  instruction1: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.gray,
  },
  instruction2: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.disabledColor,
  },
  snapsWrapper: {
    paddingBottom: normalize(10),
  },
});

export default PreAssistanceDetails;
