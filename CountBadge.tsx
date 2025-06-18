import { StyleSheet, Text, View } from "react-native";
import Colors from "../assets/theme/color";
import { normalize } from "../assets/theme/Typography";
import { Layout } from "../assets/theme/Layout";
import SIZES from "../assets/theme/sizes";
import FONTS from "../assets/theme/font";

const CountBadge = ({ count }: { count: number }) => {
    return (
      <View style={styles.countView}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    );
  };

  export default CountBadge;

  const styles = StyleSheet.create({
    countView: {
        backgroundColor: Colors.borderColor,
        borderRadius: Layout.dimensions.borderRadius_15,
        width: Layout.dimensions.size(22),
        height: Layout.dimensions.size(22),
        alignItems: 'center',
        justifyContent: 'center',
      },
      countText: {
        color: Colors.darkblue,
        fontSize: SIZES.font12,
        fontFamily: FONTS.bold
      },
  })