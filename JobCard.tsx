import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SIZES from '../../assets/theme/sizes';
import Colors from '../../assets/theme/color';
import { Layout } from '../../assets/theme/Layout';
import { normalize } from '../../assets/theme/Typography';
import JobCardItem from './JobCardItem';
import { useDispatch, useSelector } from 'react-redux';
import OngoingJobCard from './OngoingJobCard';
import I18next from 'i18next';
import DeclineJobModal from './DeclineJobModal';
import { useNavigation } from '@react-navigation/native';
import { IncomingJob } from '../../types';
import {
  acceptAllJob,
  declineAllJob,
  setAllJobs,
} from '../../rtk/slices/jobSlice';

interface JobCardProps {
  incomingJobs: IncomingJob[];
  testId?: string;
}

const JobCard: React.FC<JobCardProps> = ({ incomingJobs, testId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [declineIndex, setDeclineIndex] = useState<number | null>(null);
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const incomingOnlineJobs = useSelector(state => state.allJob.incomingJobs);
  const ongoingJobs = useSelector(state => state.allJob.ongoingJobs);

  useEffect(() => {
    dispatch(setAllJobs(incomingJobs));
  }, [dispatch, incomingJobs]);

  const handleDeclineJob = (index: number) => {
    setDeclineIndex(index);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setDeclineIndex(null);
  };

  const handleConfirmReason = (selectedReason: string | null) => {
    if (selectedReason && declineIndex !== null) {
      dispatch(declineAllJob(declineIndex)); // Dispatch declineJob with the job index
      console.log('Decline job with reason:', selectedReason);
    }
    handleCloseModal(); // Close the modal after confirming
  };

  return (
    <View testID={`${testId}-jobCardContainer`} style={styles.container}>
      <View
        testID={`${testId}-ongoingJobContainer`}
        style={styles.ongoingJobContainer}>
        {ongoingJobs.length > 0 && (
          <View
            testID={`${testId}-ongoingJobHeader`}
            style={styles.headerContainer}>
            <Text style={styles.headerText}>{`${I18next.t(
              'Technician.OnGoingJobs'
            )}`}</Text>
          </View>
        )}
        <View testID={`${testId}-ongoingJobList`} style={styles.listContainer}>
          <FlatList
            data={ongoingJobs}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <OngoingJobCard
                // onPressUpdateStatus={() => console.log('Update status')}
                onPressUpdateStatus={() =>
                  navigation.navigate('OngoingJobTowingScreen')
                }
                key={index}
                item={item}
                index={index}
                testId={`${testId}-ongoingJobCard_${index}`}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View
        testID={`${testId}-incomingJobContainer`}
        style={styles.incomingJobContainer}>
        {incomingOnlineJobs.length > 0 && (
          <View
            testID={`${testId}-incomingJobHeader`}
            style={styles.headerContainer}>
            <Text style={styles.headerText}>{`${I18next.t(
              'Technician.IncomingJobs'
            )}`}</Text>
          </View>
        )}
        <View testID={`${testId}-incomingJobList`} style={styles.listContainer}>
          <FlatList
            data={incomingOnlineJobs}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <>
                <JobCardItem
                  onPressAccept={() => dispatch(acceptAllJob(index))}
                  onPressDecline={() => handleDeclineJob(index)}
                  key={index}
                  item={item}
                  index={index}
                  testId={`${testId}-incomingJobCard_${index}`}
                />
                <DeclineJobModal
                  visible={isModalVisible && declineIndex === index}
                  onClose={handleCloseModal}
                  onConfirm={handleConfirmReason}
                  testId={`jobCard-declineJobModal_${index}`}
                />
              </>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Layout.dimensions.margin_25,
    width: normalize(327),
  },
  headerContainer: {
    marginBottom: Layout.dimensions.margin_10,
  },
  headerText: {
    fontSize: SIZES.font20,
    fontFamily: 'Roboto.regular',
    color: Colors.black,
  },
  listContainer: {},
  ongoingJobContainer: {},
  incomingJobContainer: {},
});
