import * as React from "react";
import { View, Animated } from "react-native";
import FastImage from "react-native-fast-image";
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
/**
 * ? Local Imports
 */
import styles from "./ProgressiveFastImage.style";

interface IProps {
  style?: any;
  source: any;
  thumbnailSource: any;
  useNativeDriver?: boolean;
}

interface IState {}

class ProgressiveImage extends React.Component<IProps, IState> {
  animatedImage = new Animated.Value(0);
  animatedThumbnailImage = new Animated.Value(0);

  public static defaultProps = {
    useNativeDriver: true,
  };

  onThumbnailLoad = () => {
    Animated.timing(this.animatedThumbnailImage, {
      toValue: 1,
      useNativeDriver: this.props.useNativeDriver || true,
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.animatedImage, {
      toValue: 1,
      useNativeDriver: this.props.useNativeDriver || true,
    }).start();
  };

  // ? Fixing FastImage library's `source` null bug
  normalisedSource = () => {
    const { source } = this.props;
    const normalisedSource =
      source && typeof source.uri === "string" && !source.uri.split("http")[1]
        ? null
        : source;
    return this.props.source && this.props.source.uri
      ? normalisedSource
      : source;
  };

  render() {
    const { thumbnailSource, source, style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Animated.Image
          {...props}
          blurRadius={1}
          source={thumbnailSource}
          onLoad={this.onThumbnailLoad}
          style={[{ opacity: this.animatedThumbnailImage }, style]}
        />
        <AnimatedFastImage
          {...props}
          source={this.normalisedSource()}
          onLoad={this.onImageLoad}
          style={[styles.imageStyle, { opacity: this.animatedImage }, style]}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
