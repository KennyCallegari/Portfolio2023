import Lottie from 'lottie-react-native'
import React, { FC } from "react"
import { Pressable, ViewStyle } from "react-native"
import { SCREEN_WIDTH } from '../ProjectsScreen/ProjectDetailsScreen'

interface ILabOnBoardingProps {
  setHasBeenTouched: (_: boolean) => void,
}

export const LabOnBoarding: FC<ILabOnBoardingProps> = function LabOnBoarding({ setHasBeenTouched }) {
  return <Pressable style={$container}
    onPressIn={() => setHasBeenTouched(true)}>
    <Lottie source={require('../../../assets/animations/drag-me-around.json')} autoPlay style={$lottie} />
  </Pressable>
}

const $container: ViewStyle = {
  zIndex: 1,
  opacity: 0.8,
  backgroundColor: 'black',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
}

const $lottie: ViewStyle = {
  width: SCREEN_WIDTH * 0.6
}
