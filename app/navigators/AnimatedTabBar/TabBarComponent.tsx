import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';


type TabBarComponentProps = {
  active?: boolean
  options: BottomTabNavigationOptions
  onPress: () => void
}

export const TabBarComponent = ({ active, options, onPress }: TabBarComponentProps) => {
  const ref = useRef(null)

  useEffect(() => {
    if (active && ref?.current) {
      ref.current.play()
    }
  }, [active])

  return (
    <Pressable onPress={onPress} style={$component}>
      <View style={$iconContainer}>
        {/* @ts-ignore */}
        {options.tabBarIcon && options.tabBarIcon({ ref })}
      </View>
    </Pressable>
  )
}


const $component: ViewStyle = {
  height: 60,
  width: 60,
}

const $iconContainer: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center'
}
