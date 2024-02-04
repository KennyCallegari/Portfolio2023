import { colors } from "app/theme";
import React, { useState } from "react";
import { ViewStyle, Pressable } from "react-native";
import Animated from "react-native-reanimated";

interface IDuolingoButtonProps {
  /*
    A View with a borderRadius equals to the prop "borderRadius"
    It's the content of your button
  */
  children: React.ReactNode,
  onPress: () => void,
  style?: ViewStyle,
  /*
    The color of what looks like the bottom the 3D button
  */
  shadowColor?: string,
  /*
    The depth of what looks like the bottom the 3D button
    The more depth, the more the button seems to pop
  */
  shadowDepth?: number,
  borderRadius?: number,
}

/*
  Makes the external apparence of a View looks like a button from Duolingo
  with a satisfying press animation
*/
export function DuolingoButton(props: IDuolingoButtonProps) {
  const {
    children,
    onPress,
    style,
    shadowColor = colors.palette.blue900,
    shadowDepth = 5,
    borderRadius = 60,
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
    borderRadius,
  }
  

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[$button, style, isPressed ? $pressed : $unpressed]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}

