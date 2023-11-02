import { colors } from 'app/theme'
import Lottie from 'lottie-react-native'
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { SCREEN_WIDTH } from '../ProjectsScreen/ProjectDetailsScreen'

export const LabLoader: FC = function LabLoader() {
  return <View style={$container}>
    <Lottie source={require('../../../assets/animations/loading-catoune.json')} autoPlay style={$lottie} />
  </View>
}

const $container: ViewStyle = {
  zIndex: 1,
  backgroundColor: colors.palette.neutral100,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
}

const $lottie: ViewStyle = {
  width: SCREEN_WIDTH * 0.4
}
