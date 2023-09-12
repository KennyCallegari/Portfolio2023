import * as React from "react"
import Animated from "react-native-reanimated"
import {
  StyleProp,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native"


interface AnimatedTouchableProps extends TouchableOpacityProps {
  /**
   * The icon
   */
  children: React.ReactNode

  /**
   * An animated style
   */
  style?: StyleProp<ViewStyle>

  /**
   * An function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render an icon as a child of a TouchableWithoutFeedback and an animated view.
 */
export function AnimatedTouchable(props: AnimatedTouchableProps) {
  const { children, style: $animatedStyle, onPress } = props

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={$animatedStyle}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
