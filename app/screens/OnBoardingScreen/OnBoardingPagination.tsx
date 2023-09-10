import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { IOnBoardingData } from "./OnBoardingData"
import { SharedValue } from "react-native-reanimated"
import { OnBoardingDot } from "./OnBoardingDot"


interface IOnBoardingPaginationProps {
  data: IOnBoardingData[],
  x: SharedValue<number>,
}

export const OnBoardingPagination: FC<IOnBoardingPaginationProps> = function OnBoardingPagination(
  props: IOnBoardingPaginationProps
) {
  return (
    <View style={$container}>
      {props.data.map((_, index) => <OnBoardingDot key={index} index={index} x={props.x} />)}
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: 'row',
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
}
