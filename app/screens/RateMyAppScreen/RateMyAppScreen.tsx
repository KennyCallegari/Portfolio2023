import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, Animated as RNAnimated } from "react-native"
import { Path } from "react-native-svg"
import { interpolate as interpolatePath } from 'flubber'
import { MainTabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { spacing } from "app/theme"
import Animated,
{ Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { RateMyAppSvgContent } from "./RateMyAppSvgContent"
import { PATHS, SCREEN_HEIGHT, SCREEN_WIDTH } from "./RateMyAppData"
import { getColorValueByType } from "./RateMyAppUtils"


interface RateMyAppScreenProps extends MainTabScreenProps<"RateMyApp"> {}

interface IState {
  lastPath: string,
  currentPath: string
}

/*
  This screen has 2 animated values : one for the background color, the other for the path inside the svg
  The path is interpolated with flubber, wich is a library dedicated to interpolate svg smoothly
  To do that : 
    - The progress value change from 0 to 1 on the press on a star
    - A listener is set on progress value and inside the listener we interpolate the path according to 
      progress value
    - A state keeps the current path to show and the last past showed. So that we can pass these parameters to the
      interpolatePath function
    - Exemple : 
      - you were on the 3rd star, you press the 5th one
      - inside the useEffect, interpolatePath will create an interpolation of the 3rd and the 5th face svg
      - then the progress value will go from 0 to 1
      - and the listener on it will set the svg path value to the interpolatePath(progress.value)

  I believe we can convert this screen with react-native-reanimated but I didn't manage to use useCode / call
    to add a listener to the progress value
*/
export const RateMyAppScreen: FC<RateMyAppScreenProps> = observer(function RateMyAppScreen() {
  const progress = useRef(new RNAnimated.Value(0)).current;
  const colorProgress = useSharedValue(0.5);

  const [paths, setPaths] = useState<IState>({ lastPath: null, currentPath: PATHS.neutral })
  const [starIndex, setStarIndex] = useState(2)
  const pathRef = useRef<Path>(null)

  const $containerInsets = useSafeAreaInsetsStyle(["bottom", "top"], "margin")

  useEffect(() => {
    if (!paths.lastPath) return;

    // Create an interpolation of the 2 desired paths
    const pathInterpolate: (_: number) => string  = interpolatePath( 
      paths.lastPath,
      paths.currentPath,
      { maxSegmentLength: 3 }
    );

    // change the svg path to the interpolation value interpolatePath(progress.value)
    progress.addListener(
      ({ value }) => {
        // we need to reset progress to 0 so it can go back to 1, but we don't want the animation to reset
        if (value === 0 || !pathRef?.current) return;

        const path = pathInterpolate(value);

        // @ts-ignore
        pathRef.current.setNativeProps({ d: path });
      });
  }, [paths.lastPath, paths.currentPath])

  const onPressStar = (type: string, index: number) => {
    setStarIndex(index)
    setPaths(lastState => ({
      lastPath: lastState.currentPath,
      currentPath: PATHS[type]
    }))

    const toValue = getColorValueByType(type)
    colorProgress.value = withTiming(toValue, { duration: 800, easing: Easing.inOut(Easing.ease) })

    RNAnimated
      .timing(
        progress,
        {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }
      )
      .start(() => {
        progress.setValue(0)
      })
  }

  const $animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 0.25, 0.5, 0.75,1],
      ['#DA3A3A', '#DA7D3A', '#E2C432', '#B2DA3A', '#8ADA3A'],
    )

    return { backgroundColor }
  })

  return (
    <Screen preset="fixed" contentContainerStyle={$screen}>
      <Animated.View style={$animatedColor}>
        <View style={[$containerInsets, $container]}>
          <Text tx="rateMyAppScreen.title" size="xxl" weight="semiBold" color="neutral100" style={$title} />
          <RateMyAppSvgContent onPressStar={onPressStar} starIndex={starIndex} pathRef={pathRef} />
        </View>
      </Animated.View>
    </Screen>
  )
})

const $screen: ViewStyle = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
}

const $container: ViewStyle = {
  flex: 1,
  width: SCREEN_WIDTH,
  paddingHorizontal: spacing.xl,
  justifyContent: "space-between",
}

const $title: ViewStyle = {
  marginTop: spacing.xl,
}
