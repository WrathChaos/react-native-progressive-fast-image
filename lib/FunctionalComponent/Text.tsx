import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import Size from "./Size";

export interface TextProps {
  size?: "S" | "M" | "L" | "XL" | "XXL"; // size name
  style?: TextStyle;
  bold?: boolean;
  color?: string;
  children: React.ReactNode;
}

const getSize: { [key: string]: number } = Size;

const checkSize = (size: string): number => {
  return getSize[size] || 0;
};

const Text = ({
  size = "M",
  children,
  style,
  bold,
  color,
  ...rest
}: TextProps) => (
  <RNText
    {...rest}
    style={{
      ...style,
      fontSize: checkSize(size),
      fontWeight: bold ? "700" : "400",
      color: color || "black"
    }}
  >
    {children}
  </RNText>
);

export default Text;
