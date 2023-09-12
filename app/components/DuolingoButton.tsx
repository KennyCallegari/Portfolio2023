import { colors } from "app/theme";
import React, { useState } from "react";
import { View, ViewStyle, Pressable } from "react-native";

interface IDuolingoButtonProps {
  children: React.ReactNode,
  style: ViewStyle,
  onPress: () => void,
  primaryColor?: string,
  shadowColor?: string,
  shadowDepth?: number,
}

export function DuolingoButton(props: IDuolingoButtonProps) {
  const {
    style,
    primaryColor = colors.palette.blue800,
    shadowColor = colors.palette.blue900,
    onPress,
    shadowDepth = 5,
    children
  } = props

  const [isPressed, setIsPressed] = useState(false);

  const onPressIn = () => {
    setIsPressed(true);
  };

  const onPressOut = () => {
    setIsPressed(false);
    onPress();
  };

  const $unpressed = {
    backgroundColor: shadowColor,
    paddingBottom: shadowDepth
  }

  const $pressed = {
    paddingTop: shadowDepth
  }

  const $inner = {
    backgroundColor: primaryColor,
    borderRadius: 60,
    paddingVertical: 12,
    paddingHorizontal: 12
  }

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}
      style={[$button, isPressed ? $pressed : $unpressed, style]}>
      <View style={$inner}>
        {children}
      </View>
    </Pressable>
  );
}

const $button: ViewStyle = {
  alignItems: "center",
  alignSelf: "center",
  borderRadius: 60
}

