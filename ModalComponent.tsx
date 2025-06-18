import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import SIZES from '../../assets/theme/sizes';
import Colors from '../../assets/theme/color';
import VectorIcon from '../../assets/VectorIcon';
import { normalize } from '../../assets/theme/Typography';

interface ModalComponentProps {
  isVisible: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  onClose?: () => void;
  modalStyle?: ViewStyle;
  backdropPress?: () => void;
  testID?: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isVisible,
  children,
  style,
  onClose,
  modalStyle,
  backdropPress,
  testID = 'custom_modal',
}) => {
  return (
    <Modal
      testID={testID}
      isVisible={isVisible}
      style={[styles.modal, style]}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.7}>
      {backdropPress && (
        <Pressable
          testID="close_button"
          style={styles.crossButtonView}
          onPress={backdropPress}>
          <VectorIcon
            iconName="close"
            color={Colors.black}
            iconType="Ionicons"
            size={45}
          />
        </Pressable>
      )}
      <View testID="modal_child_view" style={[styles.modalContent, modalStyle]}>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: normalize(22),
    borderRadius: normalize(12),
    width: '90%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: SIZES.font18,
    marginBottom: normalize(12),
  },
  crossButtonView: {
    height: normalize(50),
    width: normalize(50),
    borderRadius: normalize(25),
    marginBottom: normalize(20),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalComponent;
