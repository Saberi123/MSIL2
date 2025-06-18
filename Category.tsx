import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CountBadge from '../components/CountBadge';
import styles from '../screens/RSAFilterScreen/styles';
import Colors from '../../src/assets/theme/color';

interface CategoryProps {
    catName: any;
    catIndex: number;
    testID: string;
    selectedCategory: string;
    setSelectedCategory: (catName: string) => void;
    filterData: any[];
  }

const Category: React.FC<CategoryProps> = ({ catName, catIndex, testID, selectedCategory, setSelectedCategory, filterData }) => {
  return (
    <TouchableOpacity
      testID={testID}
      key={catIndex}
      style={[styles.categoryItem, selectedCategory === catName && styles.selectedCategory]}
      onPress={() => {
        setSelectedCategory(catName);
        if (!filterData[catName]) {
          filterData[catName] = [];
          console.log('filterData', filterData);
          console.log('filterDataType', typeof(filterData));
        }
      }}>
      <Text
        style={[styles.categoryText, selectedCategory === catName && { color: Colors.blue, fontWeight: '700' }]}>
        {catName}
      </Text>
      {filterData[catName] && filterData[catName]?.length > 0 && (
        <CountBadge count={filterData[catName]?.length} />
      )}
    </TouchableOpacity>
  );
};

export default Category;
