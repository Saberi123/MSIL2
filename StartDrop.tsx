import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgImgPath } from '../assets/images';
import { Layout } from '../assets/theme/Layout';
import FONTS from '../assets/theme/font';
import SIZES from '../assets/theme/sizes';
import Colors from '../assets/theme/color';
import Divider from './Common/Divider';
import { normalize } from '../assets/theme/Typography';
import I18next from '../Localization/i18n';

interface StartDropProps {
    startPoint: string;
    dropPoint: string;
}

const StartDrop: React.FC<StartDropProps> = ({startPoint, dropPoint}) => {
    return (
        <View
        testID={`customer-address`}
        style={styles.addressContainer}>
            <View style={styles.startDrop}>
                <SvgImgPath.StartingPoint style={styles.startingPointIcon} />
                    <SvgImgPath.GreyDashed />
                <SvgImgPath.DropPoint />
            </View>
            <View style={styles.startDropContainer}>
            <Text style={styles.addressText}>{startPoint || I18next.t('CaseDetail.startPoint')}</Text>
                <Divider extraStyle={styles.dividerStyle} />
            <Text style={styles.addressText}>{dropPoint || I18next.t('CaseDetail.dropPoint')}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    addressContainer: {
        marginTop: Layout.dimensions.margin_2,
        flexDirection: 'row',
    },
    dividerStyle:{
        width: normalize(271),
        color: Colors.borderColor,
    },
    startDropContainer: {
        left: Layout.dimensions.margin_5,
    },
    addressText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.font12,
        color: Colors.black,
    },
    startDrop: {
        alignItems: 'center', 
        justifyContent:'space-between'
    },
    startingPointIcon: {
        top: Layout.dimensions.margin_1
    }
});

export default StartDrop;