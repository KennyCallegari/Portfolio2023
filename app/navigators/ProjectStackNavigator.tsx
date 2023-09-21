import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { enableScreens } from "react-native-screens"
import {
  ProjectsDetailsScreen,
  ProjectsScreen
} from "app/screens"
import { Easing } from "react-native-reanimated"
import { IProjectsData } from "app/screens/ProjectsScreen/ProjectsData"

enableScreens()

export type ProjectStackNavigatorParamList = {
  Projects: undefined
  ProjectsDetails: {
    item: IProjectsData
  }
}

export type ProjectStackScreenProps<T extends keyof ProjectStackNavigatorParamList> = NativeStackScreenProps<
ProjectStackNavigatorParamList,
T
>


const Stack = createNativeStackNavigator<ProjectStackNavigatorParamList>()

export const ProjectStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Projects">
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen
        name="ProjectsDetails"
        component={ProjectsDetailsScreen}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: { animation: "timing", config: { duration: 400, easing: Easing.inOut(Easing.ease) } },
            close: { animation: "timing", config: { duration: 400, easing: Easing.inOut(Easing.ease) } }
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          }
        })}
      />
    </Stack.Navigator>
  )
}
