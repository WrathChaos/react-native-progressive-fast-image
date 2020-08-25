import React from "react";
import { StatusBar, FlatList, Dimensions } from "react-native";
import ProgressiveFastImage from "@freakycoder/react-native-progressive-fast-image";
const { width: ScreenWidth } = Dimensions.get("window");
console.disableYellowBox = true;

const images = [
  {
    uri:
      "https://images.unsplash.com/photo-1544627836-e63eb27c6e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544621660-1a179ba542a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544945582-3b466d874eac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544979407-1204ff29f490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544807459-eb0ae8cda3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544954617-f5c6b0d16164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2064&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544914118-b7a55a9ecca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544913776-90c1223073a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1545128309-686a71a99f76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1545140976-8c17471ba12d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2340&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1545105511-839f4a45a030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1545079968-1feb95494244?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1545128337-6c5cf2684520?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544933411-f64b01485fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544177817-454e1238e05f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544946632-b73cacef16ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
  },
];

const App = () => {
  const renderItem = (data: any) => {
    const { item, index } = data;

    return (
      <ProgressiveFastImage
        key={item}
        style={{
          width: ScreenWidth / 2,
          height: ScreenWidth / 2,
        }}
        source={item}
        thumbnailSource={item}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <FlatList numColumns={2} data={images} renderItem={renderItem} />
    </>
  );
};

export default App;
