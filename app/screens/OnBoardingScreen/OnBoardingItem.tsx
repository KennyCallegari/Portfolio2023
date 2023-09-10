import React, { FC } from "react"
import { TextStyle, View, ViewStyle, useWindowDimensions, StyleSheet } from "react-native"
import { Text } from "app/components"
import { IOnBoardingData } from "./OnBoardingData"
import LottieView from "lottie-react-native"
import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated"
import { spacing } from "app/theme"


interface IOnBoardingItemProps {
  item: IOnBoardingData,
  index: number,
  x: SharedValue<number>,
}

export const OnBoardingItem: FC<IOnBoardingItemProps> = function OnBoardingItem(props: IOnBoardingItemProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions()

  const $lottieAnimation = useAnimatedStyle(()=>{
    const translateY = interpolate(
      props.x.value,
      [(props.index - 1) * SCREEN_WIDTH, props.index * SCREEN_WIDTH, (props.index + 1) * SCREEN_WIDTH],
      [200, 0, -200],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ translateY }]
    }
  })

  const $circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      props.x.value,
      [(props.index - 1) * SCREEN_WIDTH, props.index * SCREEN_WIDTH, (props.index + 1) * SCREEN_WIDTH],
      [1, 4, 4],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ scale }]
    }
  })

  const $circle = {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    borderRadius: SCREEN_WIDTH / 2,
    backgroundColor: props.item.backgroundColor,
  }

  const $lottie = {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.9
  }

  return (
    <View style={[$container, { width: SCREEN_WIDTH }]}>
      <View style={$circleContainer}>
        <Animated.View style={[$circle, $circleAnimation]} />
      </View>
      <Animated.View style={$lottieAnimation}>
        <LottieView source={props.item.animation} autoPlay loop speed={0.65} style={$lottie}  />
      </Animated.View>
      <Text preset="bold" size="xxl" style={$text(props.item.textColor)}>{props.item.text}</Text>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: 120,
}

const $circleContainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'flex-end',
}

const $text = (color: string): TextStyle =>({
  color,
  marginHorizontal: spacing.lg,
})

