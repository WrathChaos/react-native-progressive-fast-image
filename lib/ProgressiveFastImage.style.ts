import { ViewStyle, StyleSheet } from "react-native";
import { ImageStyle as FastImageStyle } from "react-native-fast-image";

interface Style {
  container: ViewStyle;
  imageStyle: FastImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    backgroundColor: "transparent",
  },
  imageStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});
