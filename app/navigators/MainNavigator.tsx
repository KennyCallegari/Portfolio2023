import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import Lottie from 'lottie-react-native'
import { ContactScreen, ProjectsScreen, RateMyAppScreen } from "../screens"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { AnimatedTabBar } from "./AnimatedTabBar/AnimatedTabBar"
import { ViewStyle } from "react-native"

export type MainTabParamList = {
  Projects: undefined
  Contact: undefined
  RateMyApp: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
BottomTabScreenProps<MainTabParamList, T>,
AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

export function MainNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false}
            source={require('../../assets/animations/react-native.json')} style={$icon} />
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false}
            source={require('../../assets/animations/react-native.json')} style={$icon} />
        }}
      />
      <Tab.Screen
        name="RateMyApp"
        component={RateMyAppScreen}
        options={{
          // @ts-ignore
          tabBarIcon: ({ ref }) => <Lottie ref={ref} loop={false}
            source={require('../../assets/animations/wave-emoji.json')} style={$icon} />
        }}
      />
    </Tab.Navigator>
  )
}

const $icon: ViewStyle = {
  height: 60,
  width: 60,
}
