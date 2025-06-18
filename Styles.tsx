import { StyleSheet } from 'react-native';
import { fontsSize, normalize } from '../../assets/theme/Typography';
import FONTS from '../../assets/theme/font';
import Colors from '../../assets/theme/color';
import TermAndCondition from '../../components/TermAndCondition';
import { Layout } from '../../assets/theme/Layout';

export const Styles = StyleSheet.create({
    containerView: {
        paddingHorizontal: Layout.dimensions.borderRadius_25,
        paddingVertical: Layout.dimensions.borderRadius_25,
    },
    userProfileContainerView: {
        height: Layout.dimensions.size(120),
        backgroundColor: "#F3F9FFB2",
        borderRadius: Layout.dimensions.borderRadius_10,
        shadowColor: Colors.black,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Layout.dimensions.padding_20,
        alignItems: 'center'
    },
    userProfileProfileView: {
        width: Layout.dimensions.size(80),
        height: Layout.dimensions.size(80),
        borderRadius: Layout.dimensions.size(40),
        borderWidth: Layout.dimensions.borderWidth_1,
        borderColor: Colors.yellowGold,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userProfileNameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProfileMobileView: {
        marginLeft: Layout.dimensions.margin_10,
    },
    userProfileName: {
        fontSize: fontsSize.medium,
        color: Colors.black,
        fontWeight: '700'
    },
    userProfileMobileViewWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Layout.dimensions.margin_5
    },
    userProfileText: {
        paddingLeft: Layout.dimensions.padding_5,
        fontWeight: '400',
        fontSize: fontsSize.default,
    },
    settingsContainerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    settingsIconView: {
        width: Layout.dimensions.size(40),
        height: Layout.dimensions.size(40),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Layout.dimensions.size(20),
    },
    settingsViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingText: {
        paddingLeft: Layout.dimensions.padding_10,
        fontWeight: '400',
        fontSize: fontsSize.medium,
        color: Colors.black
    },
    privacyText: {
        fontWeight:'700',
        fontSize: fontsSize.small,
        color: Colors.blue,
        textDecorationLine: 'underline',
    },
    termText:{
        fontWeight:'700',
        fontSize: fontsSize.small,
        color: Colors.blue,
        textDecorationLine: 'underline',
    },
    privacyView: {
        marginTop: Layout.dimensions.margin_20,
        flexDirection:'row'
    },
    seperatorText:{
        fontWeight:'700',
        fontSize: fontsSize.small,
        color: Colors.blue,
        paddingHorizontal:Layout.dimensions.padding_10
    }
});
