import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { normalize } from '../../assets/theme/Typography';
import Colors from '../../assets/theme/color';
import { Layout } from '../../assets/theme/Layout';
import SIZES from '../../assets/theme/sizes';
import I18next from 'i18next';

interface DeclineJobModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (selectedReason: string | null) => void;
  testId?: string;
}

const DeclineJobModal: React.FC<DeclineJobModalProps> = ({ 
  visible, 
  onClose, 
  onConfirm, 
  testId 
}) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const reasons = [
    'Job out of scope',
    'Unavailable to receive jobs',
    'Customer asked to decline',
    'XYZ 2',
    'XYZ 3',
    'Other'
  ];

  const handleConfirm = () => {
    onConfirm(selectedReason);
    onClose(); // Close the modal after confirming
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      testID={testId}
    >
      <View style={styles.overlay}>
          {/* Close button */}
        <View style={styles.modalContainer}>
          <TouchableOpacity testID={`${testId}-closeButton`} style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          
          {/* Title */}
          <Text style={styles.title}>
          {I18next.t('Technician.SelectTheReasonFor')}<Text style={styles.declineText}>{I18next.t('Technician.declining')}</Text>
          </Text>
          <View style={styles.subContainer}>

          {/* Reason buttons */}
          {reasons.map((reason, index) => (
              <TouchableOpacity
              key={index}
              style={[
                  styles.reasonButton,
                  selectedReason === reason && styles.selectedReasonButton
                ]}
                onPress={() => setSelectedReason(reason)}
                >
              <Text style={[
                  styles.reasonText,
                  selectedReason === reason && styles.selectedReasonText
                ]}>
                {reason}
              </Text>
            </TouchableOpacity>
          ))}
          
          {/* Confirm button */}
          <TouchableOpacity testID={`${testId}-confirmButton`} style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: normalize(327),
    backgroundColor: Colors.white70,
    borderRadius: normalize(12),
    padding: Layout.dimensions.padding_20,
},
subContainer: {
    alignItems: 'center',
    marginTop: Layout.dimensions.margin_20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: Layout.dimensions.margin_10,
  },
  closeText: {
    fontSize: SIZES.font20,
    color: Colors.black,
  },
  title: {
    fontSize: SIZES.font20,
    fontFamily: 'Roboto.regular',
  },
  declineText: {
    color: Colors.orange,
  },
  reasonButton: {
    borderWidth: Layout.dimensions.borderWidth_1,
    paddingVertical: 10,
    width: normalize(295),
    height: normalize(40),
    marginVertical: normalize(5),
    borderColor: Colors.borderColor,
    borderRadius: normalize(8),
    alignItems: 'center',
  },
  selectedReasonButton: {
    backgroundColor: Colors.blue,
  },
  reasonText: {
    color: Colors.blue,
  },
  selectedReasonText: {
    color: Colors.white,
  },
  confirmButton: {
    marginTop: 20,
    width: normalize(295),
    height: normalize(40),
    backgroundColor: Colors.blue,
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: Colors.white,
    fontFamily: 'Roboto.bold',
  },
});

export default DeclineJobModal;
