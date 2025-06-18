import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import React from 'react';
import { normalize } from '../../assets/theme/Typography';
import ChargingIcon from '../../assets/images/charging.svg';
import FONTS from '../../assets/theme/font';
import SIZES from '../../assets/theme/sizes';
import Colors from '../../assets/theme/color';
import { Layout } from '../../assets/theme/Layout';
import { SvgImgPath } from '../../assets/images';
import I18next from 'i18next';
import CarPickDrop from './CarPickDrop';
import { OngoingJobStatuses } from '../../constants/OnGoingJobStatuses';
import { IncomingJob } from '../../types';

const renderIssueIcon = (issue: string) => {
  switch (issue) {
    case 'Car Start Issue':
      return (
        <SvgImgPath.CarIssueBlue
          testID="car-issue-icon"
          width={14}
          height={14}
        />
      );
    case 'Battery Dead':
      return (
        <SvgImgPath.BatteryDeadBlue
          testID="battery-dead-icon"
          width={14}
          height={14}
        />
      );
    case 'Puncture':
      return (
        <SvgImgPath.PuncherBlue testID="puncture-icon" width={14} height={14} />
      );
    case 'Electrical Issue':
      return (
        <SvgImgPath.PlugBlue
          testID="electrical-issue-icon"
          width={14}
          height={14}
        />
      );
    case 'Low Fuel':
      return (
        <SvgImgPath.FuelBlue testID="low-fuel-icon" width={14} height={14} />
      );
    case 'Others':
      return (
        <SvgImgPath.OthersBlue testID="others-icon" width={14} height={14} />
      );
    default:
      return <SvgImgPath.OthersBlue width={14} height={14} />;
  }
};
interface JobCardItemProps {
  item: IncomingJob;
  testId?: string;
  index: number;
  onPressAccept: () => void;
  onPressDecline: () => void;
}

const JobCardItem: React.FC<JobCardItemProps> = ({
  item,
  index,
  testId,
  onPressAccept,
  onPressDecline,
}) => {
  const isAfter10PM = () => {
    var currentTime = moment();
    if (currentTime.hour() >= 22) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View testID={`job-card-container-${index}`} style={styles.container}>
      <View style={styles.subContainer}>
        {item.isTowing ? (
          <CarPickDrop
            jobStatus={OngoingJobStatuses.JobNotStarted}
            towingDetails={item}
          />
        ) : (
          <View>
            <View style={styles.carDetailsContainer}>
              <Text
                testID={`address-label-${index}`}
                style={styles.carModelText}>
                {`${item.vehicleName}(${item.vehicleRegistrationNumber})`}
              </Text>
              {item?.isEV && (
                <ChargingIcon
                  width={normalize(16)}
                  height={normalize(16)}
                  style={styles.chargingIcon}
                />
              )}
            </View>
            <View
              testID={`customer-address-${index}`}
              style={styles.addressContainer}>
              <Text style={styles.addressText}>{item.customerAddress}</Text>
            </View>
          </View>
        )}
        {isAfter10PM() && (
          <View style={styles.travellingContainer}>
            <Text style={styles.travellingText}>
              {I18next.t('Technician.TravellingWith')}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <SvgImgPath.AlertTriangle
                width={normalize(16)}
                height={normalize(16)}
                color={Colors.red}
              />
              <Text style={styles.travelPartnerText}>{item.partnerName}</Text>
            </View>
          </View>
        )}
        {item?.issue && (
          <View>
            <View
              style={{
                borderBottomWidth: 1,
                flex: 1,
                borderColor: Colors.borderColor,
                marginVertical: Layout.dimensions.borderRadius_10,
              }}></View>
            <Text style={styles.issueText}>
              {I18next.t('Technician.Issue')}
            </Text>
            <View testID={`issue-type-${index}`} style={styles.issueContainer}>
              {renderIssueIcon(item.issue)}
              <Text style={styles.issueTypeText}>{item.issue}</Text>
            </View>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            testID={`job-card-container-${index}-declineButton`}
            style={styles.declineButton}
            onPress={onPressDecline}>
            <Text style={styles.declineButtonText}>
              {I18next.t('Technician.Decline')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID={`incomingJobCard_${index}-acceptButton`}
            style={styles.acceptButton}
            onPress={onPressAccept}>
            <Text style={styles.acceptButtonText}>
              {I18next.t('Technician.Accept')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JobCardItem;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    backgroundColor: Colors.white70,
    borderRadius: normalize(12),
    marginBottom: Layout.dimensions.margin_16,
    borderColor: Colors.white,
    borderWidth: Layout.dimensions.borderWidth_1,
  },
  carModelText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font16,
    color: Colors.black,
  },
  carDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: normalize(295),
  },
  addressContainer: {
    marginTop: Layout.dimensions.margin_2,
  },
  addressText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.black,
  },
  issueText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.gray,
    marginBottom: Layout.dimensions.margin_4,
  },
  subContainer: {
    marginHorizontal: Layout.dimensions.margin_16,
    marginVertical: Layout.dimensions.margin_10,
  },
  issueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  issueTypeText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.black,
    paddingLeft: Layout.dimensions.padding_5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Layout.dimensions.margin_10,
    marginBottom: Layout.dimensions.margin_5,
  },
  acceptButton: {
    width: normalize(139),
    height: normalize(40),
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(12),
  },
  acceptButtonText: {
    color: Colors.white,
    fontSize: SIZES.font14,
  },
  declineButtonText: {
    color: Colors.blue,
    fontSize: SIZES.font14,
  },
  declineButton: {
    width: normalize(139),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
    borderWidth: Layout.dimensions.borderWidth_1,
    borderRadius: normalize(12),
  },
  chargingIcon: {
    marginLeft: Layout.dimensions.margin_5,
  },
  travellingContainer: {
    marginTop: Layout.dimensions.margin_10,
  },
  travellingText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.gray,
  },
  travelPartnerText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.black,
    fontWeight: '400',
    marginLeft: Layout.dimensions.margin_5,
  },
});
