import { ViewStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  imageStyle: ImageStyle;
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
