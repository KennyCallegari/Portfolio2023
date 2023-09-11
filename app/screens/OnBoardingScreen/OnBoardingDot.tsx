import React, { FC } from "react"
import { ViewStyle, useWindowDimensions } from "react-native"
import { footerColors } from "./OnBoardingData"
import Animated,
{ Extrapolate, SharedValue, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated"
import { spacing } from "app/theme"


interface IOnBoardingDotProps {
  index: number,
  key: number,
  x: SharedValue<number>,
}

export const OnBoardingDot: FC<IOnBoardingDotProps> = function OnBoardingDot(props: IOnBoardingDotProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions()
  const $animatedDot = useAnimatedStyle(() => {
    const width = interpolate(
      props.x.value,
      [(props.index - 1) * SCREEN_WIDTH, props.index * SCREEN_WIDTH, (props.index + 1) * SCREEN_WIDTH],
      [10, 20, 10],
      Extrapolate.CLAMP,
    )

    const opacity = interpolate(
      props.x.value,
      [(props.index - 1) * SCREEN_WIDTH, props.index * SCREEN_WIDTH, (props.index + 1) * SCREEN_WIDTH],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    )

    return { width, opacity }
  })

  const $animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      props.x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH, 3 * SCREEN_WIDTH],
      footerColors,
    )

    return { backgroundColor }
  })
  
  return <Animated.View style={[$dot, $animatedDot, $animatedColor]} />
}

const $dot: ViewStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: 'black',
  marginHorizontal: spacing.sm,
}
