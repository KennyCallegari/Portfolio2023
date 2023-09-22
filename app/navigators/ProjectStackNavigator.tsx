import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  ProjectsDetailsScreen,
  ProjectsScreen
} from "app/screens"
import { IProjectsData } from "app/screens/ProjectsScreen/ProjectsData"

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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 200,
      }}
      initialRouteName="Projects">
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="ProjectsDetails" component={ProjectsDetailsScreen} />
    </Stack.Navigator>
  )
}
