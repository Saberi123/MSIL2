import React, { memo } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Colors from '../../assets/theme/color';
import { BottomTabBarStyle } from './styles';

interface TabBarProps {
    activeTab: string;
    tabs: {
        name: string;
        label: string;
        iconActive: React.ComponentType;
        iconInactive: React.ComponentType;
    }[];
    onTabPress: (tabName: string) => void;
    underLine?: boolean;
    styles?: {
        tabContainerStyle?: StyleProp<ViewStyle>;
        tabStyle?: StyleProp<ViewStyle>;
        activeTabStyle?: StyleProp<ViewStyle>;
        inactiveTabStyle?: StyleProp<ViewStyle>;
        activeTextStyle?: StyleProp<TextStyle>;
        inactiveTextStyle?: StyleProp<TextStyle>;
        iconColorActive?: string;
        iconColorInactive?: string;
    };
}

const BottomTabBar: React.FC<TabBarProps> = ({
    activeTab,
    tabs,
    onTabPress,
    underLine = true,
}) => {
    if (!tabs || tabs.length === 0) {
        return null;
    }

    return (
        <View style={BottomTabBarStyle.tabContainer}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name;
                const IconComponent = isActive ? tab.iconActive : tab.iconInactive;

                return (
                    <TouchableOpacity
                        testID={`tab-${tab.name}`}
                        key={tab.name}
                        style={BottomTabBarStyle.tab}
                        onPress={() => onTabPress(tab.name)}
                        accessibilityLabel={`Tab button for ${tab.name}`}
                        accessible={true}
                    >
                        <IconComponent />
                        <Text style={isActive ? BottomTabBarStyle.activeText : BottomTabBarStyle.inactiveText}>
                            {tab.label}
                        </Text>

                        {underLine && (
                            <View
                                testID={`underline-${tab.name}`}
                                style={[BottomTabBarStyle.underline, { backgroundColor: isActive ? Colors.blue : Colors.transparent }]} />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default memo(BottomTabBar);
