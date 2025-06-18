import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ChargingIcon from '../assets/images/charging.svg';
import I18next from 'i18next';
import VectorIcon from '../assets/VectorIcon';
import { HistoryListDataType } from '../types';
import { normalize } from '../assets/theme/Typography';
import { Layout } from '../assets/theme/Layout';
import FONTS from '../assets/theme/font';
import SIZES from '../assets/theme/sizes';
import Colors from '../assets/theme/color';
import moment from 'moment';

interface TicketCardItemProps {
  item: HistoryListDataType;
  index: number;
  onPressTicketCard: () => void;
}

const formatDateTime = (dateString: string): { date: string; time: string } => {
  const parsedDate = moment(dateString, 'YYYY-MM-DD hh:mm:ss A');
  return {
    date: parsedDate.format('DD MMM YYYY'),
    time: parsedDate.format('hh:mm a'),
  };
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Declined':
    case 'Customer Cancelled':
      return Colors.red;
    case 'Completed':
      return Colors.green;
    default:
      return Colors.orange;
  }
};

const HistoryListItem: React.FC<TicketCardItemProps> = ({
  item,
  index,
  onPressTicketCard,
}) => {
  const { date, time } = formatDateTime(item.dateTime);
  return (
    <TouchableOpacity
      testID={`job-card-container-${index}`}
      onPress={onPressTicketCard}
      style={styles.container}>
      <View style={styles.jobStatusContainer}>
        <View
          style={[
            styles.jobStatusLine,
            { borderColor: getStatusColor(item.caseStatus) },
          ]}></View>
        <View style={styles.jobStatusTextContainer}>
          <Text
            style={[
              styles.jobStatusText,
              { color: getStatusColor(item.caseStatus) },
            ]}>
            {item.caseStatus}
          </Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.carDetailsContainer}>
          <View style={styles.carDetailsSubContainer}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  testID={`address-label-${index}`}
                  style={styles.carModelText}>
                  {`${item.vehicleName}(${item.registrationNum})`}
                </Text>
                {item.fuleType === 'EV' && (
                  <View style={styles.chargingIconContainer}>
                    <ChargingIcon
                      width={normalize(16)}
                      height={normalize(16)}
                      style={styles.chargingIcon}
                    />
                  </View>
                )}
              </View>
              <View
                testID={`customer-address-${index}`}
                style={styles.addressContainer}>
                <Text style={styles.addressText}>{item.address}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            flex: 1,
            borderColor: Colors.borderColor,
            marginVertical: Layout.dimensions.borderRadius_10,
          }}></View>
        <View style={styles.dateTimeInvoiceContainer}>
          <View style={styles.dateTimeContainer}>
            <View style={styles.dateContainer}>
              <VectorIcon
                iconType="Feather"
                iconName="calendar"
                color={Colors.blue}
                size={normalize(20)}
              />
              <View style={styles.timeDateContainer}>
                <Text style={styles.ticketIdText}>{date}</Text>
              </View>
            </View>
            <View style={styles.timeContainer}>
              <VectorIcon
                iconType="Feather"
                iconName="clock"
                color={Colors.blue}
                size={normalize(20)}
              />
              <View style={styles.timeDateContainer}>
                <Text style={styles.ticketIdText}>{time}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dividerLine}></View>
        <View style={styles.ticketIdContainer}>
          <Text style={styles.ticketIdText}>
            {I18next.t('History.TicketID')}
            {item.caseId}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryListItem;

const styles = StyleSheet.create({
  container: {
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carDetailsSubContainer: {
    flexDirection: 'row',
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
  chargingIcon: {
    marginLeft: Layout.dimensions.margin_5,
  },
  jobStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: Layout.dimensions.margin_12,
  },
  jobStatusLine: {
    borderRightWidth: normalize(3),
    height: normalize(16),
    borderColor: Colors.red,
    borderTopEndRadius: Layout.dimensions.borderRadius_5,
    borderBottomEndRadius: Layout.dimensions.borderRadius_5,
  },
  jobStatusTextContainer: {
    flex: 1,
    marginLeft: Layout.dimensions.margin_10,
    justifyContent: 'center',
  },
  jobStatusText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font12,
  },
  serviceChargeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceChargeText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font16,
    color: Colors.black,
  },
  dateTimeInvoiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  dateTimeContainer: {
    flexDirection: 'row',
  },
  dateContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Layout.dimensions.margin_10,
  },
  invoiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  invoiceIconContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: Layout.dimensions.padding_3,
    borderRadius: Layout.dimensions.borderRadius_100,
    marginRight: Layout.dimensions.margin_5,
  },
  ticketIdContainer: {},
  ticketIdText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.black,
  },
  invoiceText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font12,
    color: Colors.black,
  },
  timeDateContainer: {
    marginLeft: Layout.dimensions.margin_5,
  },
  chargingIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerLine: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: Colors.borderColor,
    marginVertical: Layout.dimensions.borderRadius_10,
  },
});
