import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { normalize } from '../../assets/theme/Typography';
import FONTS from '../../assets/theme/font';
import SIZES from '../../assets/theme/sizes';
import Colors from '../../assets/theme/color';
import { Layout } from '../../assets/theme/Layout';
import { SvgImgPath } from '../../assets/images';
import OpenDialer from '../../components/OpenDialer';
import { EmergencyMobileNumber } from '../../constants/Helper';
import VectorIcon from '../../assets/VectorIcon';
import I18next from 'i18next';
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
          testID="icon-BatteryDead"
          width={14}
          height={14}
        />
      );
    case 'Puncture':
      return (
        <SvgImgPath.PuncherBlue testID="icon-Puncture" width={14} height={14} />
      );
    case 'Electrical Issue':
      return (
        <SvgImgPath.PlugBlue
          testID="icon-ElectricalIssue"
          width={14}
          height={14}
        />
      );
    case 'Low Fuel':
      return (
        <SvgImgPath.FuelBlue testID="icon-LowFuel" width={14} height={14} />
      );
    case 'Others':
      return (
        <SvgImgPath.OthersBlue testID="icon-Others" width={14} height={14} />
      );
    default:
      return (
        <SvgImgPath.OthersBlue testID="icon-Others" width={14} height={14} />
      );
  }
};

interface OngoingJobCardProps {
  item: IncomingJob;
  testId?: string;
  index: number;
  onPressUpdateStatus: () => void;
}

const OngoingJobCard: React.FC<OngoingJobCardProps> = ({
  item,
  index,
  testId,
  onPressUpdateStatus,
}) => {
  return (
    <View testID={`ongoingJobCard_${index}`} style={styles.container}>
      <View style={styles.jobStatusContainer}>
        <View style={styles.jobNotStartedLine}></View>
        <View style={styles.jobStatusTextContainer}>
          <Text style={styles.jobStatusText}>
            {I18next.t('Technician.JobNotStarted')}
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.profileCard}>
            <View style={styles.ticketTextContainer}>
              <Text style={styles.headerTitle} numberOfLines={1}>
                {item?.customerName}
              </Text>
              <View style={styles.ticketTextContainer}>
                <Text style={styles.ticketText} numberOfLines={1}>
                  {I18next.t('Technician.TicketID')} {item?.rsaTicketNumber}
                </Text>
              </View>
            </View>

            <View style={styles.contactContainer}>
              <TouchableOpacity
                testID={`chatButton_${index}`}
                style={styles.chatButton}
                onPress={() => OpenDialer(EmergencyMobileNumber)}>
                <VectorIcon
                  iconName="chatbox-ellipses-outline"
                  iconType="Ionicons"
                  size={normalize(18)}
                  color={Colors.black}
                />
              </TouchableOpacity>

              <TouchableOpacity
                testID={`callButton_${index}`}
                style={styles.callButton}
                onPress={() => OpenDialer(EmergencyMobileNumber)}>
                <VectorIcon
                  iconType="Ionicons"
                  iconName="call-outline"
                  size={normalize(18)}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: Layout.dimensions.borderWidth_1,
              flex: 1,
              borderColor: Colors.borderColor,
              marginVertical: normalize(10),
            }}></View>
        </View>
        <View style={styles.carDetailsContainer}>
          <Text style={styles.carModelText}>
            {`${item.vehicleName}(${item.vehicleRegistrationNumber})`}
          </Text>
          {item?.isEV && (
            <View style={styles.chargingIcon}>
              <SvgImgPath.ChargingIcon
                width={normalize(16)}
                height={normalize(16)}
              />
            </View>
          )}
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{item.customerAddress}</Text>
        </View>
        {item?.issue && (
          <View>
            <View
              style={{
                borderBottomWidth: Layout.dimensions.borderWidth_1,
                flex: 1,
                borderColor: Colors.borderColor,
                marginVertical: Layout.dimensions.borderRadius_10,
              }}></View>
            <Text style={styles.issueText}>Issue</Text>
            <View style={styles.issueContainer}>
              {renderIssueIcon(item.issue)}
              <Text style={styles.issueTypeText}>{item.issue}</Text>
            </View>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            testID={`updateStatusButton_${index}`}
            style={styles.updateStatusButton}
            onPress={onPressUpdateStatus}>
            <Text style={styles.declineButtonText}>{`${I18next.t(
              'Technician.UpdateStatus'
            )}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OngoingJobCard;

const styles = StyleSheet.create({
  container: {
    width: normalize(327),
    backgroundColor: Colors.white70,
    borderRadius: normalize(12),
    marginBottom: Layout.dimensions.margin_16,
    borderColor: Colors.white,
    borderWidth: Layout.dimensions.borderWidth_1,
  },
  jobStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: Layout.dimensions.margin_12,
  },
  jobNotStartedLine: {
    borderRightWidth: normalize(3),
    height: normalize(14),
    borderColor: Colors.red,
    borderTopEndRadius: Layout.dimensions.borderRadius_5,
    borderBottomEndRadius: Layout.dimensions.borderRadius_5,
  },
  jobStatusTextContainer: {
    flex: 1,
    marginLeft: Layout.dimensions.margin_10,
  },
  jobStatusText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font12,
    color: Colors.red,
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
    marginTop: Layout.dimensions.margin_4,
  },
  ticketTextContainer: {
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
  updateStatusButton: {
    width: normalize(295),
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

  technicianNameContainer: {
    flex: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  chatButton: {
    height: normalize(32),
    width: normalize(32),
    borderRadius: normalize(40),
    marginHorizontal: Layout.dimensions.margin_10,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: normalize(5),
  },
  callButton: {
    height: normalize(32),
    width: normalize(32),
    borderRadius: normalize(40),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: normalize(5),
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: SIZES.font14,
    fontFamily: FONTS.bold,
    color: Colors.black,
  },
  ticketText: {
    fontSize: SIZES.font12,
    fontFamily: FONTS.regular,
    color: Colors.black,
  },
});
