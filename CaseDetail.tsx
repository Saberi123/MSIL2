import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GradientBackground from '../../components/Common/GradientBackground';
import HeaderComponent from '../components/HeaderComponent';
import I18next from '../../Localization/i18n';
import { styles } from './styles';
import TicketDetail from '../../components/CaseInfo/CaseInfo';
import { caseDetailMockData } from '../../content/CaseDetailMockData';
import SnapCollection from '../../components/SnapCollection';
import AudioTapeRecorder from '../../components/AudioTapeRecorder/AudioTapeRecorder';
import Divider from '../../components/Common/Divider';
import AssistanceDetail from '../../components/AssistanceDetail';
import { useNavigation } from '@react-navigation/native';

const CaseDetail: React.FC = () => {
    const navigation = useNavigation();
    return (
        <GradientBackground>
            <HeaderComponent
            headerText={I18next.t('CaseDetail.CaseDetails')}
            onPressLeftIcon={() => navigation.goBack()}
            onPressRightIcon={() => {}}
            extraStyle={styles.extraStyle}
            />
            <ScrollView style={styles.scrollContainer} >
                <View style={styles.container}>
                    <TicketDetail item={caseDetailMockData}  />
                
                {caseDetailMockData?.caseType === 'accidental' && (
                    <>
                    <SnapCollection testID="snap-collection" mediaSnaps={caseDetailMockData?.caseFiles} showCloseIcon={false} />
                    <AudioTapeRecorder testID="audio-tape" showDescriptionText={false} audioState={'RECORDED'} extraStyle={styles.audioStyle} />
                    </>
                )
                }
                {
                (caseDetailMockData?.caseStatus !== 'Declined' && caseDetailMockData?.caseStatus !== 'Cancelled') && (
                <>
                <Divider />
                {caseDetailMockData?.towingStatus && (
                    <AssistanceDetail testID="pre-assistance-detail" title={I18next.t('CaseDetail.PreAssistance')} subTitle={I18next.t('Images/Videos')} data={caseDetailMockData?.towingStatus} />
                )
                }
                <Divider />
                {caseDetailMockData?.towingStatus && (
                    <AssistanceDetail testID="post-assistance-detail" title={I18next.t('CaseDetail.PostAssistance')} showInfo={true} subTitle={I18next.t('Images/Videos')} data={caseDetailMockData?.towingStatus} />
                )
                }
                <Divider />
                {caseDetailMockData?.towingStatus && (
                    <AssistanceDetail testID="handover-details" title={I18next.t('CaseDetail.HandoverDetails')} subTitle={I18next.t('Images/Videos')} data={caseDetailMockData?.towingStatus} />
                )
                }
                </>
                )
                }
                </View>
            </ScrollView>
        </GradientBackground>
    );
};

export default CaseDetail;