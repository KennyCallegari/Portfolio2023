import React, { FC } from "react"
import { ViewStyle, ImageStyle, StyleSheet, TextStyle, View, Pressable } from "react-native"
import { Text } from "app/components"
import { FULL_SIZE, IProjectsData, ITEM_HEIGHT, ITEM_WIDTH, SPACING, RADIUS } from "./ProjectsData"
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated"


interface IProjectsPreviewProps {
  item: IProjectsData,
  index: number,
  scrollX: SharedValue<number>,
  goToDetailsScreen: (_: IProjectsData) => void
}

export const ProjectsPreview: FC<IProjectsPreviewProps> = function ProjectsPreview(props: IProjectsPreviewProps) {
  const { item, index, goToDetailsScreen, scrollX } = props;
  const inputRange = [(index - 1) * FULL_SIZE, index * FULL_SIZE, ( index + 1 ) * FULL_SIZE]

  const $animatedImage = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [1, 1.1, 1]
    );

    return {
      transform: [{ scale }],
    };
  });

  const $animatedText = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [ITEM_WIDTH, 0, -ITEM_WIDTH],
      {
        extrapolateRight: Extrapolation.CLAMP,
      });

    return {
      transform: [{ translateX }],
    };
  });

  const $animatedDateText = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [ITEM_WIDTH + 1000, 0, -ITEM_WIDTH - 1000]
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0, 1, 0]
    );

    return {
      transform: [{ translateX }],
      opacity,
    };
  });

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
      <View style={$date}>
        <Animated.View style={$animatedDateText} sharedTransitionTag="tag">
          <Text text={item.date} color="neutral100" weight="semiBold" />
        </Animated.View>
      </View>
    </Pressable>
  )
}

const $container: ViewStyle = {
  width: ITEM_WIDTH,
  height: ITEM_HEIGHT,
  margin: SPACING,
  overflow: "hidden",
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

