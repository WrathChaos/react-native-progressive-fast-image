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
  errorSource?: any;
  loadingSource?: any;
  thumbnailSource: any;
  useNativeDriver?: boolean;
}

interface IState {
  imageLoaded: boolean;
  error: boolean;
  showDefault: boolean;
}

class ProgressiveImage extends React.Component<IProps, IState> {
  animatedImage = new Animated.Value(0);
  animatedThumbnailImage = new Animated.Value(0);

  public static defaultProps = {
    useNativeDriver: true,
  };

  constructor(props: IProps) {
    super(props);
    this.state = { showDefault: true, error: false, imageLoaded: false };
  }

  onThumbnailLoad = () => {
    Animated.timing(this.animatedThumbnailImage, {
      toValue: 1,
      useNativeDriver: this.props.useNativeDriver || true,
    }).start();
  };

  onImageLoad = () => {
    this.setState({ imageLoaded: false });
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

  statedSource = () => {
    const { showDefault, error } = this.state;
    const { loadingSource, errorSource } = this.props;
    if (!loadingSource) {
      return error ? errorSource : this.normalisedSource();
    }
    if (!errorSource) return this.normalisedSource();
    return showDefault
      ? loadingSource // ? Loading Image
      : error
      ? errorSource // ? Error Image
      : this.normalisedSource();
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
        {!this.state.imageLoaded && (
          <Animated.Image
            style={[styles.imageStyle, style]}
            resizeMode="contain"
            source={this.props.loadingSource}
          />
        )}
        <AnimatedFastImage
          {...props}
          source={this.statedSource()}
          onLoad={this.onImageLoad}
          style={[styles.imageStyle, { opacity: this.animatedImage }, style]}
          onLoadEnd={() => {
            console.log("onLoadEnd");
            this.setState({ showDefault: false });
          }}
          onError={() => this.setState({ error: true })}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
