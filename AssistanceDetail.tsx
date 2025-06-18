import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SnapCollection from './SnapCollection'
import Colors from '../assets/theme/color';
import { Layout } from '../assets/theme/Layout';
import FONTS from '../assets/theme/font';
import SIZES from '../assets/theme/sizes';
import I18next from '../Localization/i18n';

interface AssistanceDetailProps {
    title: string;
    subTitle: string;
    data: any;
    showInfo?: boolean;
    testID?: string;
}

const AssistanceDetail: React.FC<AssistanceDetailProps> = ({data, testID, subTitle, title, showInfo=false}) => {
    return(
        <View testID={testID}>
        <Text style={styles.assistanceHeader}>{title}</Text>
        {showInfo && (
            <View style={styles.ticketIdContainer}>
            {data?.resolvedOnCallVehicleIssue && (
                <View style={styles.itemContainer}>
                  <Text style={styles.issueText}>{I18next.t('CaseDetail.VehicleIssue')}</Text>
                  <Text style={[styles.issueText, { color: Colors.black }]}>
                    {data?.resolvedOnCallVehicleIssue}
                  </Text>
                </View>
            )}
            {data?.resolvedOnCallAssistanceProvided && (
                <View style={styles.itemContainer}>
                  <Text style={styles.issueText}>
                    {I18next.t('CaseDetail.AssistanceProvided')}
                  </Text>
                  <Text style={[styles.issueText, { color: Colors.black }]}>
                    {data?.resolvedOnCallAssistanceProvided}
                  </Text>
                </View>
              )}
            </View>
        )}
        <Text>{subTitle}</Text>
        <SnapCollection mediaSnaps={data?.preTowingFiles} showCloseIcon={false} removeSnap={() => {}} />
        </View>
    )
}

const styles = StyleSheet.create({
    assistanceHeader: {
        fontSize: SIZES.font16,
        fontFamily: FONTS.regular,
        color: Colors.black,
        marginVertical: Layout.dimensions.margin_2,
    },
    issueText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.font12,
        color: Colors.gray,
        marginBottom: Layout.dimensions.margin_4,
    },
    ticketIdContainer: {
        flexDirection: 'row', // Set the container to row direction
        flexWrap: 'wrap', // Enable wrapping to make a grid-like layout
        justifyContent: 'flex-start', // Align items to the left
    },
    itemContainer: {
        width: '50%', // Make each item take up 50% of the container width for two columns
        paddingVertical: Layout.dimensions.padding_8, // Add padding if needed
        paddingRight: Layout.dimensions.padding_8, // Add padding if needed
    },
})

export default AssistanceDetail;