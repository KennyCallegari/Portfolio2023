import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { colors } from "app/theme"
import { MainTabScreenProps } from "app/navigators"
import { Screen } from "app/components"

interface ProjectsScreenProps extends MainTabScreenProps<"Projects"> {}

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen() {

  return (
    <Screen style={$container}>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.angry500
}
