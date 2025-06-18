import I18next from 'i18next';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VectorIcon from '../../assets/VectorIcon';
import ChargingIcon from '../../assets/images/charging.svg';
import Colors from '../../assets/theme/color';
import FONTS from '../../assets/theme/font';
import Divider from '../Common/Divider';
import { normalize } from '../../assets/theme/Typography';
import { Layout } from '../../assets/theme/Layout';
import SIZES from '../../assets/theme/sizes';
import { CaseDetailType } from '../../types/caseDetail';
import StartDrop from '../StartDrop';

interface TicketDetailsProps {
  item: CaseDetailType;
}

const TicketDetail: React.FC<TicketDetailsProps> = ({item}) => {
  const getStatusColors = (status: string) => {
    switch (status) {
      case 'Cancelled':
        return { background: Colors.lightRed, text: Colors.red };
      case 'Completed':
        return { background: Colors.lightGreen, text: Colors.green };
      default:
        return { background: Colors.lightRed, text: Colors.red };
    }
  };
  
  return (
    <View style={styles.mainContainer}>
      <View testID={`job-card-container`} style={styles.container}>
        <View style={[styles.jobStatusLine]}>
          <View style={styles.jobStatusTextContainer}>
            <Text style={styles.ticketText}>
              {I18next.t('CaseDetail.TicketID')}
              {item?.caseId}
            </Text>
            <View
              style={[
                styles.statusView,
                {
                  backgroundColor: getStatusColors(item?.caseStatus)
                    .background,
                },
              ]}>
              <Text
                style={[
                  styles.jobStatusText,
                  { color: getStatusColors(item?.caseStatus).text },
                ]}>
                {item?.caseStatus}
              </Text>
            </View>
          </View>
        </View>

        <Divider />

        <View style={styles.subContainer}>
          <View style={styles.carDetailsContainer}>
            <View style={styles.carDetailsSubContainer}>
              <View style={styles.modelContainer}>
                <View
                  style={styles.modelTitle}>
                  <View>
                    <Text testID={`address-label`} style={styles.carModelText}>
                      {`${item?.vehicleName}(${item?.registrationNum})`}
                    </Text>
                    {item?.isEV && (
                      <View style={styles.chargingIconContainer}>
                        <ChargingIcon
                          testID="charging-icon"
                          width={normalize(16)}
                          height={normalize(16)}
                          style={styles.chargingIcon}
                        />
                      </View>
                    )}
                  </View>
                  {item?.service_charge && (
                    <View style={styles.serviceChargeContainer}>
                      <Text style={styles.serviceChargeText}>
                        ₹{item?.service_charge}
                      </Text>
                    </View>
                  )}
                </View>
                {item?.caseType === 'accidental' ? (
                    <StartDrop startPoint={item?.startPoint} dropPoint={item?.dropPoint} />
                )
                :(
                <View
                  testID={`customer-address`}
                  style={styles.addressContainer}>
                  <Text style={styles.addressText}>{item?.address}</Text>
                </View>
                )
                }
              </View>
            </View>
          </View>

          <View style={styles.dateTimeInvoiceContainer}>
            <View style={styles.dateTimeContainer}>
              <View style={styles.dateContainer}>
                <VectorIcon
                  iconType="Feather"
                  iconName="calendar"
                  color={Colors.blue}
                  size={normalize(16)}
                />
                <View style={styles.timeDateContainer}>
                  <Text style={styles.ticketIdText}>{item?.date}</Text>
                </View>
              </View>
              <View style={styles.timeContainer}>
                <VectorIcon
                  iconType="Feather"
                  iconName="clock"
                  color={Colors.blue}
                  size={normalize(16)}
                />
                <View style={styles.timeDateContainer}>
                  <Text style={styles.ticketIdText}>{item?.time}</Text>
                </View>
              </View>
            </View>
            <View style={styles.invoiceContainer}>
              <View testID="invoice-icon" style={styles.invoiceIconContainer}>
                <VectorIcon
                  iconType="Feather"
                  iconName="download"
                  color={Colors.blue}
                  size={normalize(16)}
                />
              </View>
              <Text style={styles.invoiceText}>{I18next.t('CaseDetail.Invoice')}</Text>
            </View>
          </View>
            <View style={styles.ticketIdContainer}>
                <Divider />
                <Text style={styles.nameStyle}>{item?.customer_name}</Text>
                {item?.caseType === 'accidental' && (
                <>
              {item?.caseCategory && (
                <View style={styles.itemContainer}>
                  <Text style={styles.issueText}>{I18next.t('CaseDetail.Issue')}</Text>
                  <Text style={[styles.issueText, { color: Colors.black }]}>
                    {item?.caseCategory}
                  </Text>
                </View>
              )}
              {item?.caseDescription && (
                <View
                  style={[
                    styles.itemContainer,
                    { paddingVertical: Layout.dimensions.padding_0 },
                  ]}>
                  <Text style={styles.issueText}>
                    {I18next.t('CaseDetail.Details')}
                  </Text>
                  <Text style={[styles.issueText, { color: Colors.black }]}>
                    {item?.caseDescription}
                  </Text>
                </View>
              )}
              </>
              )}
            </View>
          
        </View>
      </View>
    </View>
  );
};

export default TicketDetail;

const styles = StyleSheet.create({
  container: {
    borderRadius: normalize('12'),
  },
  mainContainer: {
    width: '100%',
  },
  ticketText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font16,
    color: Colors.black,
  },
  modelContainer: {
    flex:1
  },
  modelTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusView: {
    paddingHorizontal: Layout.dimensions.padding_6,
    paddingVertical: Layout.dimensions.padding_2,
    borderRadius: Layout.dimensions.borderRadius_10,
  },
  carModelText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font16,
    color: Colors.black,
  },
  carDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carDetailsSubContainer: {
    flexDirection: 'row',
  },
  addressContainer: {
    marginTop: Layout.dimensions.margin_2,
    flexDirection: 'row',
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
    marginTop: Layout.dimensions.margin_5,
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
    marginVertical: Layout.dimensions.margin_10,
  },
  jobStatusTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginTop: Layout.dimensions.margin_12,
    marginBottom: Layout.dimensions.margin_4,
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
    backgroundColor: Colors.primary2Opacity,
    padding: Layout.dimensions.padding_3,
    borderRadius: Layout.dimensions.borderRadius_10,
    marginRight: Layout.dimensions.margin_5,
  },
  ticketIdContainer: {
    justifyContent: 'flex-start', // Align items to the left
  },
  itemContainer: {
    width: '50%', // Make each item take up 50% of the container width for two columns
    paddingVertical: Layout.dimensions.padding_8, // Add padding if needed
    paddingRight: Layout.dimensions.padding_8, // Add padding if needed
  },
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
  nameStyle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.font14,
    color: Colors.black,
  },
});
