import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../assets/theme/color';
import { normalize } from '../../assets/theme/Typography';
import FONTS from '../../assets/theme/font';
import { OngoingJobStatuses } from '../../constants/OnGoingJobStatuses';

interface JobStatusDisplayProps {
  jobStatus: OngoingJobStatuses;
  testID?: string;
}

const JobStatusDisplay: React.FC<JobStatusDisplayProps> = ({
  jobStatus = OngoingJobStatuses.JobNotStarted,
  testID = 'status-container',
}) => {
  const getBackgroundColor = (status: OngoingJobStatuses) => {
    switch (status) {
      case OngoingJobStatuses.JobNotStarted:
        return Colors.lightRed;
      case OngoingJobStatuses.OutForAssistance:
        return Colors.lightYellow;
      case OngoingJobStatuses.ReachedCustomerLocation:
        return Colors.lightYellow;
      case OngoingJobStatuses.VehicleArrivedAtServiceCenter:
        return Colors.lightYellow;
      case OngoingJobStatuses.VehicleHandoverToServiceCenter:
        return Colors.lightGreen;
      case OngoingJobStatuses.ResolvedOnCall:
        return Colors.lightGreen;
      case OngoingJobStatuses.CustomerDeniedAssistance:
        return Colors.lightGreen;
    }
  };

  const getTextColor = (status: OngoingJobStatuses) => {
    switch (status) {
      case OngoingJobStatuses.JobNotStarted:
        return Colors.red;
      case OngoingJobStatuses.OutForAssistance:
        return Colors.yellowGold;
      case OngoingJobStatuses.ReachedCustomerLocation:
        return Colors.yellowGold;
      case OngoingJobStatuses.VehicleArrivedAtServiceCenter:
        return Colors.yellowGold;
      case OngoingJobStatuses.VehicleHandoverToServiceCenter:
        return Colors.green;
      case OngoingJobStatuses.ResolvedOnCall:
        return Colors.green;
      case OngoingJobStatuses.CustomerDeniedAssistance:
        return Colors.green;
    }
  };

  return (
    <View
      testID={testID}
      style={[
        styles.statusContainer,
        { backgroundColor: getBackgroundColor(jobStatus) },
      ]}>
      <Text style={[styles.statusText, { color: getTextColor(jobStatus) }]}>
        {jobStatus}
      </Text>
    </View>
  );
};

export default JobStatusDisplay;

const styles = StyleSheet.create({
  statusContainer: {
    borderRadius: normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: normalize(12),
    marginVertical: normalize(20),
  },
  statusText: {
    color: Colors.red,
    fontSize: normalize(14),
    fontFamily: FONTS.bold,
    fontWeight: '700',
  },
});
