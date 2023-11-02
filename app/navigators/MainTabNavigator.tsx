import React from "react"
import { ViewStyle } from "react-native"
import Lottie from 'lottie-react-native'
import { CompositeScreenProps } from "@react-navigation/native"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { ContactScreen, LabScreen, RateMyAppScreen } from "../screens"

import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { AnimatedTabBar } from "./AnimatedTabBar/AnimatedTabBar"
import { ProjectStackNavigator } from "./ProjectStackNavigator"

export type MainTabParamList = {
  ProjectStackNavigator: undefined
  Contact: undefined
  RateMyApp: undefined
  Lab: undefined
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

export function MainTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen
        name="ProjectStackNavigator"
        component={ProjectStackNavigator}
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
      <Tab.Screen
        name="Lab"
        component={LabScreen}
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
