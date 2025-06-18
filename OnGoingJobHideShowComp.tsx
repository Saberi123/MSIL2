/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SvgImgPath } from '../../assets/images';
import { fontsSize } from '../../assets/theme/Typography';
import { Layout } from '../../assets/theme/Layout';
import Colors from '../../assets/theme/color';
import Divider from '../../components/Common/Divider';
import SnapCollection from '../../components/SnapCollection';
import AudioTapeRecorder from '../../components/AudioTapeRecorder/AudioTapeRecorder';

const OnGoingJobHideShowComp = () => {
  const caseDetails = [
    {
      snapshot: {
        image:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      snapIndex: 0,
    },
    {
      snapshot: {
        image:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      snapIndex: 1,
    },
    {
      snapshot: {
        image:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      snapIndex: 2,
    },
    {
      snapshot: {
        image:
          'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
      snapIndex: 3,
    },
  ];
  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <Text style={styles.issueText}>Issue</Text>
        <View style={styles.issueTyepView}>
          <SvgImgPath.tyreIcon width={12} height={12} />
          <Text style={styles.issueTypeText}>Puncture</Text>
        </View>
        <View style={styles.issueDetailsView}>
          <Text style={styles.issueText}>Details</Text>
          <Text style={styles.issueDetailsText}>
            Left back tyre has a problem
          </Text>
          <View>
            <SnapCollection
              mediaSnaps={caseDetails}
              removeSnap={() => {}}
              extraSnapsWrapper={styles.snapsWrapper}
              canManageSnaps={false}
            />
          </View>
        </View>
        <View>
          <AudioTapeRecorder />
        </View>
        <Divider />
        <View style={styles.issueDetailsView}>
          <Text style={styles.preAssistanceText}>Pre Assistance Details</Text>
          <Text style={styles.preAssistanceVehicle}>Vehicle Images/Videos</Text>
          <View>
            <SnapCollection
              mediaSnaps={caseDetails}
              removeSnap={() => {}}
              extraSnapsWrapper={styles.snapsWrapper}
              canManageSnaps={false}
            />
          </View>
        </View>
        <Divider />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  issueDetailsView: {
    marginVertical: Layout.dimensions.margin_5,
  },
  snapsWrapper: {
    paddingBottom: Layout.dimensions.padding_10,
  },
  preAssistanceText: {
    fontSize: fontsSize.medium,
    fontWeight: '400',
    color: Colors.black,
  },
  preAssistanceVehicle: {
    fontSize: fontsSize.small,
    fontWeight: '400',
    paddingVertical: Layout.dimensions.padding_5,
  },
  audioTimeText: {
    fontSize: fontsSize.default,
    fontWeight: '700',
    color: Colors.black,
    marginHorizontal: Layout.dimensions.margin_5,
  },
  audioPlayIconView: {
    width: Layout.dimensions.size(30),
    height: Layout.dimensions.size(30),
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Layout.dimensions.borderRadius_15,
    marginLeft: Layout.dimensions.margin_5,
  },
  audioView: {
    borderWidth: Layout.dimensions.borderWidth_1,
    height: Layout.dimensions.size(45),
    borderColor: Colors.blue,
    borderRadius: Layout.dimensions.borderRadius_20,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: Layout.dimensions.margin_10,
  },
  issueTypeText: {
    fontSize: fontsSize.small,
    fontWeight: '400',
    marginLeft: Layout.dimensions.margin_5,
    color: Colors.black,
  },
  issueText: {
    fontSize: fontsSize.small,
    fontWeight: '400',
  },
  issueDetailsText: {
    fontSize: fontsSize.small,
    fontWeight: '400',
    color: Colors.black,
    paddingVertical: Layout.dimensions.padding_5,
  },
  issueTyepView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Layout.dimensions.margin_5,
  },
});

export default OnGoingJobHideShowComp;
