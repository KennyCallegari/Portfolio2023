import { colors } from "app/theme";
import React, { useState } from "react";
import { ViewStyle, Pressable } from "react-native";
import Animated from "react-native-reanimated";

interface IDuolingoButtonProps {
  children: React.ReactNode,
  onPress: () => void,
  style?: ViewStyle,
  primaryColor?: string,
  shadowColor?: string,
  shadowDepth?: number,
}

export function DuolingoButton(props: IDuolingoButtonProps) {
  const {
    style,
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
    backgroundColor: 'transparent', // remove background color if children has one
    paddingTop: shadowDepth
  }

  const $button: ViewStyle = {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 60,
  }
  

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[$button, style, isPressed ? $pressed : $unpressed]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}

