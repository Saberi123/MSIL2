import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NoPastRequest from './NoPastRequest';
import HistoryListItem from './HistoryListItem';
import { HistoryListDataType } from '../types';
import { Layout } from '../assets/theme/Layout';
import moment from 'moment';

interface HistoryCardProps {
  requestHistory: HistoryListDataType[];
  testId?: string;
  keyword: string;
  onPressTicketCard: (item: any) => void;
}

const HistoryList: React.FC<HistoryCardProps> = ({
  requestHistory,
  testId,
  onPressTicketCard,
  keyword,
}) => {
  const dispatch = useDispatch();

  const { allHistory, filterData, filterApplied } = useSelector(
    (state: any) => state?.history
  );

  const getListAccordingFilter = (filterData: any) => {
    let filteredData = allHistory;

    // Loop through all selected categories in filterData
    Object.keys(filterData)?.forEach(category => {
      const selectedOptions = filterData[category];

      const ticketFilter = (optionSelected: string[]) => {
        if (optionSelected.length > 0 && optionSelected[0] !== 'All') {
          // Filter by ticket_status
          filteredData = filteredData?.filter((item: any) =>
            optionSelected.includes(item.caseStatus)
          );
        }
      };
      const dateFilter = (optionSelected: { from: string; to: string }) => {
        if (optionSelected?.from !== null && optionSelected?.to !== null) {
          // Filter by car_reg_number
          const start = new Date(optionSelected?.from);
          const end = new Date(optionSelected?.to);
          filteredData = filteredData?.filter((item: any) => {
            return (
              moment(item.dateTime, 'YYYY-MM-DD hh:mm:ss A')
                .toDate()
                .setHours(0, 0, 0, 0) >= start.setHours(0, 0, 0, 0) &&
              moment(item.dateTime, 'YYYY-MM-DD hh:mm:ss A')
                .toDate()
                .setHours(0, 0, 0, 0) <= end.setHours(0, 0, 0, 0)
            );
          });
        }
      };

      // Apply filtering only if selectedOptions has values
      switch (category) {
        case 'Dates':
          dateFilter(selectedOptions);
          break;

        case 'Ticket Status':
          ticketFilter(selectedOptions);
          break;

        default:
          break; // If no valid category, do nothing
      }
    });

    return filteredData;
  };

  const getListAccordingToKeyword = (keyword: string) => {
    return requestHistory.filter(
      rqstData =>
        rqstData.caseStatus.toLowerCase().includes(keyword.toLowerCase()) ||
        rqstData.registrationNum
          .toLowerCase()
          .includes(keyword.toLowerCase()) ||
        rqstData.caseId.toLowerCase().includes(keyword.toLowerCase()) ||
        rqstData.vehicleName.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  return (
    <View testID={`${testId}-incomingJobList`} style={styles.listContainer}>
      {requestHistory.length > 0 ? (
        <FlatList
          data={
            keyword && keyword.length > 3
              ? getListAccordingToKeyword(keyword)
              : filterApplied
              ? getListAccordingFilter(filterData)
              : allHistory
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <HistoryListItem
              key={index}
              item={item}
              index={index}
              onPressTicketCard={() => onPressTicketCard(item)}
            />
          )}
        />
      ) : (
        <NoPastRequest testID="no-job-container" />
      )}
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    marginBottom: Layout.dimensions.margin_60,
  },
});
