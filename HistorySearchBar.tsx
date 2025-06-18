import Colors from '../assets/theme/color';
import VectorIcon from '../assets/VectorIcon';
import I18next from 'i18next';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Layout } from '../assets/theme/Layout';
import { SvgImgPath } from '../assets/images';

interface HistorySearchBarProps {
  testID?: string;
  onPressFilter: () => void;
  keyword: string;
  updateKeyword: (text: string) => void;
}

const HistorySearchBar: React.FC<HistorySearchBarProps> = ({
  testID,
  onPressFilter,
  keyword,
  updateKeyword,
}) => {
  return (
    <View style={styles.container}>
        <VectorIcon
          iconType="Feather"
          iconName="search"
          size={20}
          color="black"
        />
      <View style={styles.inputTextContainer}>
        <TextInput
          placeholder={I18next.t('History.SearchHistory')}
          style={{ paddingLeft: Layout.dimensions.padding_10 }}
          value={keyword}
          onChangeText={updateKeyword}
        />
      </View>
      <TouchableOpacity onPress={onPressFilter}
            testID="filter-button"
      >
        <SvgImgPath.FilterIcon width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white70,
    marginTop: Layout.dimensions.margin_15, 
    marginBottom: Layout.dimensions.margin_18,
    borderRadius: Layout.dimensions.borderRadius_50,
    paddingVertical: Layout.dimensions.padding_5,
    paddingHorizontal: Layout.dimensions.padding_15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTextContainer: {
    flex: 1,
  },
});

export default HistorySearchBar;
