import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Alert,
} from 'react-native';
import Card from '../../components/Common/Card';
import { normalize } from '../../assets/theme/Typography';
import Colors from '../../assets/theme/color';
import VectorIcon from '../../assets/VectorIcon';
import { Layout } from '../../assets/theme/Layout';
import OpenDialer from '../../components/OpenDialer';
import { EmergencyMobileNumber } from '../../constants/Helper';
import Divider from '../../components/Common/Divider';
import FONTS from '../../assets/theme/font';
import I18next from '../../Localization/i18n';
import CarPickDrop from './CarPickDrop';
import { OngoingJobStatuses } from '../../constants/OnGoingJobStatuses';
import { useNavigation } from '@react-navigation/native';
import OnGoingJobHideShowComp from './OnGoingJobHideShowComp';

interface OngoingJobTowingCardProps {
  towingDetails: {};
  jobStatus: OngoingJobStatuses;
}

const OngoingJobTowingCard: React.FC<OngoingJobTowingCardProps> = ({
  jobStatus,
  towingDetails,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigation = useNavigation<any>();
  const toggleDetailsCard = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowDetails(!showDetails);
  };

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.towingInfoContainer}>
        <Text style={styles.towingName}>{towingDetails.towingPartnerName}</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity
            testID="chat-button"
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
            testID="call-button"
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
      {jobStatus != OngoingJobStatuses.ResolvedOnCall && (
        <View>
          <Divider />
          <CarPickDrop
            testID="car-pick-drop"
            jobStatus={jobStatus}
            towingDetails={towingDetails}
          />
        </View>
      )}

      <Divider />
      {showDetails && <View>
        <OnGoingJobHideShowComp/>
      </View>}
      <View style={styles.ticketRow}>
        <Text style={styles.ticketTitle} numberOfLines={1}>
          {I18next.t('Select_Location.TicketID')} {towingDetails.ticketID}
        </Text>
        <TouchableOpacity testID="btn-hide-show" onPress={toggleDetailsCard}>
          <Text style={styles.viewDetails} numberOfLines={1}>
            {showDetails
              ? I18next.t('Select_Location.HideDetails')
              : I18next.t('Select_Location.ViewDetails')}
          </Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate('PICK_AND_DROP_SCREEN')} style={styles.reportIssueContainer}>
        <Text style={styles.reportIssueText}>
          {I18next.t('OngoingJobTowing.ReportIssue')}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default OngoingJobTowingCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: normalize(8),
    overflow: 'hidden',
    backgroundColor: Colors.white70,
    elevation: 3,
    marginTop: normalize(10),
    padding: normalize(16),
  },
  towingInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(10),
  },
  towingName: {
    fontFamily: FONTS.bold,
    fontSize: normalize(16),
    fontWeight: '700',
    color: Colors.black,
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
  ticketRow: {
    flex: 1,
    paddingVertical: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketTitle: {
    fontSize: normalize(12),
    fontFamily: FONTS.regular,
    fontWeight: '400',
    color: Colors.black,
  },
  viewDetails: {
    color: Colors.blue,
    fontFamily: FONTS.bold,
    fontSize: normalize(14),
    fontWeight: '700',
  },
  reportIssueContainer: {
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(25),
  },
  reportIssueText: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    color: Colors.blue,
    fontSize: normalize(14),
  },
});
