import { StyleSheet, Text, View } from 'react-native';
import { normalize } from '../../assets/theme/Typography';
import Colors from '../../assets/theme/color';
import FONTS from '../../assets/theme/font';
import Divider from '../../components/Common/Divider';
import { SvgImgPath } from '../../assets/images';
import { Line, Svg } from 'react-native-svg';
import I18next from '../../Localization/i18n';
import { OngoingJobStatuses } from '../../constants/OnGoingJobStatuses';
import CustomButton from '../../components/Common/CustomButton';

interface CarPickDropProps {
  isTowing?: boolean;
  jobStatus: OngoingJobStatuses;
  towingDetails?: {};
  testID?: string;
}

const CarPickDrop: React.FC<CarPickDropProps> = ({
  isTowing = true, // To DO for future use
  jobStatus,
  towingDetails,
  testID,
}) => {
  const dottedLineHeight =
    jobStatus == OngoingJobStatuses.OutForAssistance
      ? normalize(70)
      : normalize(20);

  return (
    <View testID={testID} style={styles.carDetailsContainer}>
      <Text style={styles.carModelText}>
        {towingDetails.vehicleName} ({towingDetails.vehicleRegistrationNumber})
      </Text>
      <View style={styles.carPickDropContainer}>
        <View>
          <SvgImgPath.StartingPoint
            width={normalize(16)}
            height={normalize(16)}
          />
          <Svg
            testID="dotted-line"
            height={dottedLineHeight}
            width={normalize(20)}>
            <Line
              stroke={Colors.blue}
              strokeWidth={2}
              strokeDasharray="3, 2"
              x1="8"
              y1="0"
              x2="8"
              y2={dottedLineHeight}
            />
          </Svg>
          <SvgImgPath.DropPoint width={normalize(16)} height={normalize(16)} />
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{towingDetails.customerAddress}</Text>
          {jobStatus == OngoingJobStatuses.OutForAssistance && (
            <CustomButton
              style={styles.button}
              textStyle={styles.buttonText}
              title={I18next.t('OngoingJobTowing.Navigate')}
              onPress={() => {}}
            />
          )}
          <Divider color={Colors.gray_CA} />
          <Text style={styles.address}>{towingDetails.dropLocation}</Text>
        </View>
      </View>
    </View>
  );
};

export default CarPickDrop;

const styles = StyleSheet.create({
  carDetailsContainer: {
    marginBottom: normalize(10),
  },
  carModelText: {
    fontFamily: FONTS.bold,
    fontSize: normalize(16),
    color: Colors.black,
    marginBottom: normalize(10),
  },
  carPickDropContainer: {
    flexDirection: 'row',
  },
  addressContainer: {
    width: '95%',
  },
  address: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: normalize(12),
    color: Colors.black,
    textAlignVertical: 'center',
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
});
