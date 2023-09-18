import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarComponent } from './TabBarComponent';

export const TAB_BAR_HEIGHT = 70

/*
  Replace default tab bar component from @react-navigation/native
  It allows controls on animations
*/
export const AnimatedTabBar = (props: BottomTabBarProps) => {
  const { state: { index: activeIndex, routes }, navigation, descriptors } = props
  const { bottom } = useSafeAreaInsets()

  const $container: ViewStyle =  {
    position: 'absolute',
    height: TAB_BAR_HEIGHT,
    bottom,
    left: 0,
    right: 0,
  }

  return (
    <View style={$container}>
      <View style={$tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex
          const { options } = descriptors[route.key]

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onPress={() => navigation.navigate(route.name)}
            />
          )
        })}
      </View>
    </View>
  );
};

const $tabBarContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
}
