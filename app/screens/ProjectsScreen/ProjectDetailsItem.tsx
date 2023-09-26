import React, { FC, useEffect } from "react"
import { View, ViewStyle, StyleSheet } from "react-native"
import Animated,
{
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming
} from "react-native-reanimated"
import { snapPoint } from "react-native-redash";

import {
  IProjectDetailsData,
  CARD_WIDTH,
  CARD_HEIGHT,
  SNAP_POINTS,
  height
} from "./ProjectsData"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import ProjectDetailsCard from "./ProjectDetailsCard";


interface IProjectDetailsItemProps {
  item: IProjectDetailsData,
  index: number,
  shuffleBack: Animated.SharedValue<boolean>
}

export const ProjectDetailsItem: FC<IProjectDetailsItemProps> = function ProjectDetailsItem(
  props: IProjectDetailsItemProps
) {
  const { item, index, shuffleBack } = props;
  // const backgroundColors = ["#edf4ec", colors.palette.secondary200, "#eceefa", "#e3eaf1"]

  const x = useSharedValue(0)
  const y = useSharedValue(-height)
  const initialX = useSharedValue(0)
  const initialY = useSharedValue(0)
  const theta = Math.random() * 16 - 8
  const rotateZ = useSharedValue(0)
  const scale = useSharedValue(1)

  useAnimatedReaction(() => shuffleBack.value, (currentValue) => {
    if (currentValue) {
      const delay = index * 150 + 100
      x.value = withDelay(delay, withSpring(0))
      rotateZ.value = withDelay(delay, withSpring(theta, {}, () => {
        shuffleBack.value = false
      }))
    }
  })

  useEffect(() => {
    const delay = index * 250 + 1000
    y.value = withDelay(delay, withTiming(0, { duration: 250, easing: Easing.inOut(Easing.ease) }))
    rotateZ.value = withDelay(delay, withTiming(theta, { duration: 250, easing: Easing.inOut(Easing.ease) }))
  }, [])

  const onGestureEvent = Gesture.Pan()
    .onBegin(() => {
      initialX.value = x.value
      initialY.value = y.value
      scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) })
      rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) })
    })
    .onChange(({ translationX, translationY }) => {
      x.value = translationX + initialX.value
      y.value = translationY + initialY.value
    })
    .onFinalize(({ velocityX, velocityY }) => {
      const destination = snapPoint(x.value, velocityX, SNAP_POINTS)
      x.value = withSpring(destination, { velocity: velocityX })
      y.value = withSpring(0, { velocity: velocityY })
      scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) }, () => {
        if (index === 0 && destination !== 0) {
          shuffleBack.value = true
        }
      })
    });
  
  const $animatedCard = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value },
      { translateY: y.value },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: scale.value },
    ]
  }))


  return (
    <View style={$container} pointerEvents="box-none">
      <GestureDetector gesture={onGestureEvent}>
        <Animated.View style={[$card, $animatedCard]}>
          <ProjectDetailsCard item={item} />
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

const $container: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 26,
}

const $card: ViewStyle = {
  backgroundColor: "white",
  borderRadius: 26,
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  justifyContent: "center",
  alignItems: "center",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}
