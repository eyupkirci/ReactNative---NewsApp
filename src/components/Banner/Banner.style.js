import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    bannerImage: {
      height: Dimensions.get('window').height / 6,
      width: Dimensions.get('window').width / 1.5,
    },
  });
