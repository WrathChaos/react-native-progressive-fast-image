<img alt="React Native Progressive Fast Image" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-progressive-fast-image)

[![Customizable progressive image for React Native with FastImage](https://img.shields.io/badge/-Customizable%20progressive%20image%20for%20React%20Native%20with%20FastImage-orange?style=for-the-badge)](https://github.com/WrathChaos/@freakycoder/react-native-progressive-fast-image)

[![npm version](https://img.shields.io/npm/v/@freakycoder/react-native-progressive-fast-image.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-progressive-fast-image)
[![npm](https://img.shields.io/npm/dt/@freakycoder/react-native-progressive-fast-image.svg?style=for-the-badge)](https://www.npmjs.com/package/@freakycoder/react-native-progressive-fast-image)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
  <tr>
    <td>
      <b>Progressive Fast Image</b>
    </td>
    <td>
      <b>Built-in Loading Progressive Fast Image</b>
    </td>
  </tr>
 <tr>
    <td align="center"> 
       <img alt="React Native Progressive Fast Image"
        src="assets/Screenshots/React-Native-Progressive-Fast-Image.gif" />
    </td>
    <td align="center">
       <img alt="React Native Progressive Fast Image"
        src="assets/Screenshots/React-Native-Progressive-Fast-Image-Loading.gif" />
    </td>
   </tr>
</table>

# Installation

Add the dependency:

```bash
npm i @freakycoder/react-native-progressive-fast-image
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-fast-image": ">= 8.3.2"
```

# Usage

## Import

```jsx
import ProgressiveFastImage from "@freakycoder/react-native-progressive-fast-image";
```

## Fundamental Usage

It accepts every `Image` and `FastImage` props. You can use it like you used to.

```jsx
<ProgressiveFastImage
  source={require("./assets/my-image.png")}
  thumbnailSource={require("./assets/my-image.png")}
/>
```

# Configuration - Props

useNativeDriver?: boolean;

| Property        |        Type         |  Default  | Description                           |
| --------------- | :-----------------: | :-------: | ------------------------------------- |
| source          |       Source        | undefined | set the main source of the image      |
| thumbnailSource | ImageSourcePropType | undefined | set the thumbnail source of the image |
| loadingSource   | ImageSourcePropType | undefined | set the error source of the image     |
| errorSource     | ImageSourcePropType | undefined | set the loading source of the image   |

## Customization Props

| Property                   |  Type   | Default | Description                                 |
| -------------------------- | :-----: | :-----: | ------------------------------------------- |
| style                      |  style  | default | change or override main image style         |
| loadingImageStyle          |  style  | default | change or override loading image style      |
| thumbnailAnimationDuration | number  | default | change the thumbnail animation's duration   |
| imageAnimationDuration     | number  | default | change the main image animation's duration  |
| useNativeDriver            | boolean |  true   | change the animations useNativeDriver value |

## Future Plans

- [x] ~~LICENSE~~
- [x] ~~Built-in Loading Indicator~~
- [x] ~~Built-in Error Image Source~~
- [ ] Write an article about the lib on Medium

## Better with built-in bug fix

**Fixes** FastImage's `source null` bug-fix.

- https://github.com/DylanVann/react-native-fast-image/issues/623
- https://github.com/DylanVann/react-native-fast-image/issues/27
- https://github.com/DylanVann/react-native-fast-image/issues/484
- https://github.com/DylanVann/react-native-fast-image/issues/96

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Progressive Fast Image is available under the MIT license. See the LICENSE file for more info.
