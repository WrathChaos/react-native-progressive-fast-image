import * as React from "react";
import {
  View,
  Animated,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";
import FastImage, {
  ImageStyle as FastImageStyle,
  Source,
} from "react-native-fast-image";
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
/**
 * ? Local Imports
 */
import styles from "./ProgressiveFastImage.style";

export type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

export type CustomFastImageStyleProps =
  | StyleProp<FastImageStyle>
  | Array<StyleProp<FastImageStyle>>;

interface IProps {
  source: Source;
  errorSource?: Source;
  loadingSource?: ImageSourcePropType;
  thumbnailSource?: ImageSourcePropType;
  style?: CustomFastImageStyleProps;
  loadingImageStyle?: CustomFastImageStyleProps;
  thumbnailAnimationDuration?: number;
  imageAnimationDuration?: number;
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
  animatedLoadingImage = new Animated.Value(1);

  public static defaultProps = {
    useNativeDriver: true,
  };

  constructor(props: IProps) {
    super(props);
    this.state = { showDefault: true, error: false, imageLoaded: false };
  }

  onThumbnailLoad = () => {
    Animated.timing(this.animatedLoadingImage, {
      toValue: 0,
      useNativeDriver: this.props.useNativeDriver || true,
    }).start(() => {
      Animated.timing(this.animatedThumbnailImage, {
        toValue: 1,
        duration: this.props.thumbnailAnimationDuration,
        useNativeDriver: this.props.useNativeDriver || true,
      }).start();
    });
  };

  onImageLoad = () => {
    this.setState({ imageLoaded: false });
    Animated.timing(this.animatedImage, {
      toValue: 1,
      duration: this.props.imageAnimationDuration,
      useNativeDriver: this.props.useNativeDriver || true,
    }).start();
  };

  onLoadEnd = () => {
    this.setState({ showDefault: false });
  };

  onError = () => {
    this.setState({ error: true });
  };

  // ? bugfix: FastImage library's `source` null
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
    const { error } = this.state;
    const { loadingSource, errorSource } = this.props;
    if (!loadingSource) {
      return error ? errorSource : this.normalisedSource();
    }
    if (!errorSource) return this.normalisedSource();
    return error
      ? errorSource // ? Error Image
      : this.normalisedSource();
  };

  render() {
    const {
      style,
      source,
      loadingSource,
      thumbnailSource,
      loadingImageStyle = this.props.style,
      ...props
    } = this.props;

    return (
      <View style={styles.container}>
        {loadingSource && !this.state.imageLoaded && (
          <View style={[styles.loadingImageStyle, style]}>
            <AnimatedFastImage
              resizeMode="contain"
              style={[
                { opacity: this.animatedLoadingImage },
                loadingImageStyle,
              ]}
              source={this.props.loadingSource}
            />
          </View>
        )}
        <Animated.Image
          blurRadius={15}
          source={thumbnailSource}
          onLoad={this.onThumbnailLoad}
          style={[{ opacity: this.animatedThumbnailImage }, style]}
        />
        <AnimatedFastImage
          {...props}
          onError={this.onError}
          onLoad={this.onImageLoad}
          onLoadEnd={this.onLoadEnd}
          style={[styles.imageStyle, { opacity: this.animatedImage }, style]}
          source={this.statedSource()}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
