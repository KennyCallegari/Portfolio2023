import React, { FC } from "react"
import { ViewStyle, ImageStyle, StyleSheet, TextStyle, Animated, View, Pressable } from "react-native"
import { Text } from "app/components"
import { FULL_SIZE, IProjectsData, ITEM_HEIGHT, ITEM_WIDTH, SPACING, RADIUS } from "./ProjectsData"


interface IProjectsPreviewProps {
  item: IProjectsData,
  index: number,
  scrollX: Animated.Value,
  goToDetailsScreen: (_: IProjectsData) => void
}

export const ProjectsPreview: FC<IProjectsPreviewProps> = function ProjectsPreview(props: IProjectsPreviewProps) {
  const { item, index, scrollX, goToDetailsScreen } = props;
  const inputRange = [(index - 1) * FULL_SIZE, index * FULL_SIZE, ( index + 1 ) * FULL_SIZE]

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
  })

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1.1, 1, 1.1],
  })

  const $animatedText = { transform: [{ translateX }] }
  const $animatedImage = { transform: [{ scale }] }

  return (
    <Pressable onPress={() => goToDetailsScreen(item)} style={$container}>
      <View style={$imageContainer}>
        <Animated.Image source={item.imageSource} style={[$image, $animatedImage]} />
      </View>
      <View style={$appNameContainer}>
        <Animated.View style={$animatedText} sharedTransitionTag="tag">
          <Text text={item.appName} style={$appName} color="neutral100" size="xxl" weight="semiBold" />
        </Animated.View>
      </View>
      <Text text={item.date} style={$date} color="neutral100" weight="semiBold" />
    </Pressable>
  )
}

const $container: ViewStyle = {
  width: ITEM_WIDTH,
  height: ITEM_HEIGHT,
  margin: SPACING
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
  top: SPACING,
  left: SPACING,
}

const $appName: TextStyle = {
  textTransform: 'uppercase',
}

const $date: TextStyle = {
  position: 'absolute',
  bottom: SPACING,
  left: SPACING,
}

