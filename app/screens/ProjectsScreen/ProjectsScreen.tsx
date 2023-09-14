import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { colors } from "app/theme"
import { AppStackScreenProps } from "app/navigators"

interface ProjectsScreenProps extends AppStackScreenProps<"OnBoarding"> {}

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen() {

  return (
    <View style={$container}>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.angry500
}