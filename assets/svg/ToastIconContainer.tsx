/* eslint-disable max-len */
import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { View, ViewStyle } from "react-native";

function ToastIconContainer(props) {
  return (
    <View style={[$container, props.style]}>
      <Svg
        width={78}
        height={78}
        viewBox="0 0 78 78"
        style={$svg}
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.806 67.68a4.256 4.256 0 011.06-.48C63.012 62.963 73.32 49.846 73.32 34.32 73.32 15.366 57.954 0 39 0S4.68 15.366 4.68 34.32c0 13.503 7.798 25.184 19.136 30.787.013.006.007.026-.007.025a.013.013 0 00-.013.016l3.108 9.842c.79 2.505 3.74 3.58 5.957 2.173l14.945-9.484z"
        />
      </Svg>
      <View style={$icon}>
        {props.children}
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center'
}

const $svg: ViewStyle = {
  position: 'absolute',
}

const $icon: ViewStyle = {
  position: 'absolute',
  bottom: -12,
}


export default ToastIconContainer
