import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import I18next from 'i18next';
import { OngoingJobStatuses } from '../../constants/OnGoingJobStatuses';
import CustomButton from '../../components/Common/CustomButton';
import Card from '../../components/Common/Card';
import { SvgImgPath } from '../../assets/images';
import { normalize } from '../../assets/theme/Typography';
import Colors from '../../assets/theme/color';
import FONTS from '../../assets/theme/font';

interface OngoingJobStatusButtonProps {
  jobStatus: OngoingJobStatuses;
  onStatusButtonPress: (status: OngoingJobStatuses) => void;
}

const OngoingJobStatusButton: React.FC<OngoingJobStatusButtonProps> = ({
  jobStatus,
  onStatusButtonPress,
}) => {
  const renderStatusButton = (text: string, status: OngoingJobStatuses) => (
    <CustomButton
      style={styles.statusButton}
      textStyle={styles.statusButtonText}
      title={text}
      onPress={() => onStatusButtonPress(status)}
      testID={`ongoing-job-status-button-${status}`}
    />
  );

  const renderContent = () => {
    switch (jobStatus) {
      case OngoingJobStatuses.JobNotStarted:
        return (
          <View>
            {renderStatusButton(
              I18next.t('OngoingJobTowing.OutForAssistance'),
              OngoingJobStatuses.OutForAssistance
            )}
            <Card style={styles.infoContainer}>
              <SvgImgPath.InfoCircle
                width={normalize(16)}
                height={normalize(16)}
              />
              <Text style={styles.infoText}>
                {I18next.t('OngoingJobTowing.CollectChargesFromCustomer')}
              </Text>
            </Card>
            {renderStatusButton(
              I18next.t('OngoingJobTowing.ResolvedOnCall'),
              OngoingJobStatuses.ResolvedOnCall
            )}
            {renderStatusButton(
              I18next.t('OngoingJobTowing.CustomerDeniedAssistance'),
              OngoingJobStatuses.CustomerDeniedAssistance
            )}
          </View>
        );
      case OngoingJobStatuses.OutForAssistance:
        return (
          <View>
            {renderStatusButton(
              I18next.t('OngoingJobTowing.ReachedCustomerLocation'),
              OngoingJobStatuses.ReachedCustomerLocation
            )}
            {renderStatusButton(
              I18next.t('OngoingJobTowing.ResolvedOnCall'),
              OngoingJobStatuses.ResolvedOnCall
            )}
            {renderStatusButton(
              I18next.t('OngoingJobTowing.CustomerDeniedAssistance'),
              OngoingJobStatuses.CustomerDeniedAssistance
            )}
          </View>
        );
      case OngoingJobStatuses.ReachedCustomerLocation:
        return (
          <View>
            {renderStatusButton(
              I18next.t('OngoingJobTowing.VehicleArrivedAtServiceCenter'),
              OngoingJobStatuses.VehicleArrivedAtServiceCenter
            )}
            {renderStatusButton(
              I18next.t('OngoingJobTowing.CustomerDeniedAssistance'),
              OngoingJobStatuses.CustomerDeniedAssistance
            )}
          </View>
        );
      case OngoingJobStatuses.VehicleArrivedAtServiceCenter:
        return (
          <View>
            {renderStatusButton(
              I18next.t('OngoingJobTowing.VehicleHandedOverToServiceCenter'),
              OngoingJobStatuses.VehicleHandoverToServiceCenter
            )}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.updateStatusContainer}>
      {jobStatus != OngoingJobStatuses.ResolvedOnCall &&
        jobStatus != OngoingJobStatuses.CustomerDeniedAssistance && (
          <Text style={styles.updateStatusText}>
            {I18next.t('OngoingJobTowing.UpdateYourStatus')}
          </Text>
        )}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  statusButton: {
    backgroundColor: Colors.white,
    paddingVertical: normalize(12),
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: normalize(5),
  },
  statusButtonText: {
    fontFamily: FONTS.bold,
    fontSize: normalize(14),
    fontWeight: '700',
    color: Colors.blue,
  },
  infoContainer: {
    flexDirection: 'row',
    borderRadius: normalize(8),
    overflow: 'hidden',
    backgroundColor: Colors.white70,
    marginVertical: normalize(10),
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(12),
  },
  infoText: {
    fontFamily: FONTS.regular,
    fontSize: normalize(14),
    color: Colors.black,
    fontWeight: '400',
    marginLeft: normalize(10),
  },
  updateStatusContainer: {
    marginTop: normalize(20),
    marginBottom: normalize(10),
  },
  updateStatusText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: normalize(16),
    color: Colors.black,
    marginBottom: normalize(15),
  },
});

export default OngoingJobStatusButton;
