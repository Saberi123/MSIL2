import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SvgImgPath } from '../assets/images';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const navigation = useNavigation();

    const tabs = [
        { name: 'Home', label: 'Home', iconActive: SvgImgPath.HomeActive, iconInactive: SvgImgPath.HomeInActive },
        { name: 'History', label: 'History', iconActive: SvgImgPath.HistoryActive, iconInactive: SvgImgPath.HistoryInactive },
        { name: 'Notifications', label: 'Notifications', iconActive: SvgImgPath.NotificationActive, iconInactive: SvgImgPath.NotificationInActive },
        { name: 'Account', label: 'Account', iconActive: SvgImgPath.AccountActive, iconInactive: SvgImgPath.AccountInactive },
    ];

    const handleTabPress = (tabName: string) => {
        setActiveTab(tabName);
        navigation.navigate(tabName);
    };


    return (
            <Tab.Navigator screenOptions={{ headerShown: false }}
                tabBar={(props) =>
                    <BottomTabBar
                        activeTab={activeTab}
                        tabs={tabs}
                        onTabPress={handleTabPress}
                    />
                }>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name='Notifications' component={NotificationScreen} />
                <Tab.Screen name='Account' component={AccountScreen} />
            </Tab.Navigator>
    )
}

export default BottomTabNavigation;