import React, { FC } from "react"
import { TextStyle, ViewStyle, useWindowDimensions,  ImageStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Animated,
{ SharedValue, interpolateColor, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated"
import { translate } from "app/i18n"
import { DuolingoButton } from "app/components"
import { footerColors, footerShadowsColors } from "./OnBoardingData"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AppStackParamList } from "app/navigators"
import { useStores } from "app/models"


interface IOnBoardingButtonProps {
  flatListRef: any,
  flatListIndex: SharedValue<number>,
  dataLength: number,
  x: SharedValue<number>
}

export const OnBoardingButton: FC<IOnBoardingButtonProps> = function OnBoardingButton(props: IOnBoardingButtonProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions()
  const { navigate } = useNavigation<NativeStackNavigationProp<AppStackParamList>>()
  const { userStore } = useStores()

  const $animatedButton = useAnimatedStyle(() => {
    const isLastScreen = props.flatListIndex.value === props.dataLength - 1

    return { 
      width: isLastScreen ? withSpring(140) : withSpring(60),
      height: 60,
    }
  })

  const $animatedArrow = useAnimatedStyle(() => {
    const isLastScreen = props.flatListIndex.value === props.dataLength - 1

    return {
      width: 30,
      height: 30,
      opacity: isLastScreen ? withTiming(0) : withTiming(1),
      transform: [{ translateX: isLastScreen ? withTiming(100) : withTiming(0) }]
    }
  })

  const $animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      props.x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH, 3 * SCREEN_WIDTH],
      footerColors,
    )

    return { backgroundColor }
  })

  const $animatedShadowColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      props.x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH, 3 * SCREEN_WIDTH],
      footerShadowsColors,
    )

    return { backgroundColor }
  })

  const $animatedText = useAnimatedStyle(() => {
    const isLastScreen = props.flatListIndex.value === props.dataLength - 1

    return {
      opacity: isLastScreen ? withTiming(1) : withTiming(0),
      transform: [{ translateX: isLastScreen ? withTiming(0) : withTiming(-200) }]
    }
  })

  const onPress = () => {
    const isLastScreen = props.flatListIndex.value === props.dataLength - 1

    if (isLastScreen) {
      userStore.setProp("hasSeenOnBoarding", true)
      return navigate("Main", { screen: "Projects" })
    }
    
    return props.flatListRef.current?.scrollToIndex({ index: props.flatListIndex.value + 1 })

  }
  
  return (
    <DuolingoButton onPress={onPress} style={$animatedShadowColor}>
      <Animated.View style={[$inner, $animatedColor, $animatedButton]}>
        <Animated.Text style={[$text, $animatedText]}>{translate('onBoardingScreen.button')}</Animated.Text>
        <Animated.Image source={require("../../../assets/icons/next.png")} style={[$arrow, $animatedArrow]} />
      </Animated.View>
    </DuolingoButton>
  )
}

const $inner: ViewStyle = {
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}

const $arrow: ImageStyle = {
  position: 'absolute',
  tintColor: 'white',
  width: 30,
  height: 30,
}

const $text: TextStyle = {
  color: 'white',
  position: 'absolute',
  fontFamily: 'rubikBold',
  fontSize: 16,
}


