import React from 'react';
import { KeyboardAvoidingView, Text, View, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import { SvgImgPath } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const UserProfileComponent = () => {
    const navigation = useNavigation<any>();
    return (
        <SafeAreaView>
            <TouchableOpacity testID='navigate-button' onPress={() => navigation.navigate('MY_PROFILE_SCREEN')}>
                <View style={Styles.userProfileContainerView}>
                    <View style={Styles.userProfileNameView}>
                        <View style={Styles.userProfileProfileView}>
                            <SvgImgPath.userProfile />
                        </View>
                        <View style={Styles.userProfileMobileView}>
                            <Text style={Styles.userProfileName}>Ramesh Kumar</Text>
                            <View style={Styles.userProfileMobileViewWithIcon}>
                                <SvgImgPath.phoneIcon width={30} height={30} />
                                <Text style={Styles.userProfileText}>+91 98765 43210</Text>
                            </View>
                        </View>
                    </View>
                    <SvgImgPath.fwdIcon width={20} height={20} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default UserProfileComponent;
