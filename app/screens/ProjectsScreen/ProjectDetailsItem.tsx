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
import { Gesture, GestureDetector } from "react-native-gesture-handler"

import ProjectDetailsCard from "./ProjectDetailsCard";
import { CARD_HEIGHT, CARD_WIDTH, IProjectDetailsData, SNAP_POINTS, height } from "./ProjectDetailsData";


interface IProjectDetailsItemProps {
  item: IProjectDetailsData,
  index: number,
  shuffleBack: Animated.SharedValue<boolean>
}

export const ProjectDetailsItem: FC<IProjectDetailsItemProps> = function ProjectDetailsItem(
  props: IProjectDetailsItemProps
) {
  const { item, index, shuffleBack } = props;

  const translateX = useSharedValue(0) // actual x axis position of the card
  const translateY = useSharedValue(-height) // actual y axis position of the card
  const offset = useSharedValue({ x: 0, y: 0 }); // mainly used to prevent bugs when shaking card quickly
  const theta = Math.random() * 16 - 8 // initial angle of the card is random
  const rotateZ = useSharedValue(0) // actual angle of the card
  const scale = useSharedValue(1) // used when card is grabed for better visual illusion

  // if shuffle back is true -> set every card x position to zero and reset rotateZ
  useAnimatedReaction(() => shuffleBack.value, (currentValue) => {
    if (currentValue) {
      const delay = index * 150 + 100
      translateX.value = withDelay(delay, withSpring(0))
      rotateZ.value = withDelay(
        delay,
        withSpring(
          theta,
          {},
          () => { shuffleBack.value = false }
        )
      )
    }
  })

  // cards falling from the sky effect
  useEffect(() => {
    const delay = index * 250 + 1000
    translateY.value = withDelay(delay, withTiming(0, { duration: 250, easing: Easing.inOut(Easing.ease) }))
    rotateZ.value = withDelay(delay, withTiming(theta, { duration: 250, easing: Easing.inOut(Easing.ease) }))
  }, [])

  const onGestureEvent = Gesture.Pan()
    // when grabbed
    .onBegin(() => {
      offset.value = { x: translateX.value, y: translateY.value };
      scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) })
      rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) })
    })
    // when moved around
    .onChange(({ translationX, translationY }) => {
      translateX.value = translationX + offset.value.x
      translateY.value = translationY + offset.value.y
    })
    // when realised -> goes to snap points : either back to origin or out of screen
    .onFinalize(({ velocityX, velocityY }) => {
      const destination = snapPoint(translateX.value, velocityX, SNAP_POINTS)
      translateX.value = withSpring(destination, { velocity: velocityX })
      translateY.value = withSpring(0, { velocity: velocityY })
      scale.value = withTiming(
        1,
        { easing: Easing.inOut(Easing.ease) },
        // if the last card goes out of screen, we set shuffle back to true
        () => { shuffleBack.value = (index === 0 && destination !== 0) }
      )
    });
  
  const $animatedCard = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
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
