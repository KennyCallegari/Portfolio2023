import React from "react"
import { View, ViewStyle, StyleSheet, ImageStyle, Image, TextStyle } from "react-native"
import { ProjectStackScreenProps } from "app/navigators"
import { Icon, Text } from "app/components"
import { IProjectsData, ITEM_WIDTH, RADIUS, SPACING } from "./ProjectsData"
import { colors } from "app/theme"
import { SharedElement } from "react-navigation-shared-element"

interface ProjectsDetailsScreenProps extends ProjectStackScreenProps<"ProjectsDetails"> {
  item: IProjectsData
}

const ProjectsDetailsScreen = function ProjectsDetailsScreen({ navigation, route }: ProjectsDetailsScreenProps) {
  const { item } = route.params

  return (
    <View style={$container}>
      <Icon icon="back" containerStyle={$backButton} size={35} color={colors.palette.neutral100}
        onPress={() => navigation.goBack()} />
      <SharedElement id={`item.${item.key}.image`} style={StyleSheet.absoluteFill}>
        <View style={$imageContainer}>
          <Image source={item.imageSource} style={$image} />
        </View>
      </SharedElement>
      <SharedElement id={`item.${item.key}.appName`}>
        <View style={$appNameContainer}>
          <Text text={item.appName} color="neutral100" size="xxl" weight="semiBold" style={$appName} />
        </View>
      </SharedElement>
    </View>
  )
}

ProjectsDetailsScreen.sharedElements = (route) => {
  const { item } = route.params

  return [
    { id: `item.${item.key}.image` },
    { id: `item.${item.key}.appName` },
  ]
}

export default ProjectsDetailsScreen

const $container: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: colors.palette.angry500
}

const $backButton: ImageStyle = {
  position: 'absolute',
  zIndex: 1,
  top: 80,
  left: SPACING * 2,
}

const $imageContainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  overflow: "hidden",
  borderRadius: RADIUS,
}

const $image: ImageStyle = {
  ...StyleSheet.absoluteFillObject,
  width: undefined,
  height: undefined,
  resizeMode: 'cover',
}

const $appNameContainer: ViewStyle = {
  width: ITEM_WIDTH * .8,
  position: 'absolute',
  top: 120,
  left: SPACING * 2,
}

const $appName: TextStyle = {
  textTransform: 'uppercase',
}

