import React, { FC } from "react"
import { ViewStyle, ImageStyle, TextStyle, View, Pressable } from "react-native"
import Animated, { FadeInDown, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated"

import { Text } from "app/components"
import { colors } from "app/theme"

import {
  FULL_SIZE,
  IProjectsData,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  SPACING,
  RADIUS,
  transition,
  transitionText
} from "./ProjectsData"


interface IProjectsPreviewProps {
  item: IProjectsData,
  index: number,
  disabled: boolean,
  scrollX: SharedValue<number>,
  goToDetailsScreen: (_: IProjectsData) => void
}

export const ProjectsPreview: FC<IProjectsPreviewProps> = function ProjectsPreview(props: IProjectsPreviewProps) {
  const { item, index, disabled, goToDetailsScreen, scrollX } = props;

  const inputRange = [(index - 1) * FULL_SIZE, index * FULL_SIZE, ( index + 1 ) * FULL_SIZE]

  const $animatedImage = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [1.2, 1, 1.2]
    );

    return {
      transform: [{ scale }],
    };
  });

  const $animatedText = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [ITEM_WIDTH, 0, -ITEM_WIDTH]
    );

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

    return {
      transform: [{ translateX }],
    };
  });

  const onPress = () => goToDetailsScreen(item)

  return (
    <Animated.View entering={FadeInDown.duration(1000).delay(1000*index)} style={$container}>
      <Pressable disabled={disabled} onPress={onPress} style={$contentContainer}>
        <View style={$image}>
          <Animated.Image
            sharedTransitionTag={`image${item.id}`}
            sharedTransitionStyle={transition}
            source={{ uri: item.imageSource }}
            style={[$image, $animatedImage]}
            resizeMode='cover'
          />
        </View>

        <Animated.Text sharedTransitionTag={`title${item.id}`} sharedTransitionStyle={transitionText}
          style={[$appName, $animatedText]} entering={FadeInDown.duration(500).delay(600)}>
          {item.appName}
        </Animated.Text>

        <Animated.View style={[$date, $animatedDateText]} entering={FadeInDown.duration(500).delay(800)}>
          <Text text={item.date} color="neutral100" weight="semiBold" />
        </Animated.View>

      </Pressable>
    </Animated.View>
  )
}

const $container: ViewStyle = {
  width: ITEM_WIDTH,
  height: ITEM_HEIGHT,
  margin: SPACING,
  borderRadius: RADIUS,

  // to calculate shadow efficiently we need to set a background color
  backgroundColor: 'white',

  shadowColor: colors.palette.neutral900,
  shadowOffset: {
    width: 1,
    height: 10,
  },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  elevation: 4,
}

const $contentContainer: ViewStyle = {
  borderColor: colors.palette.neutral100,
  borderWidth: 2,
  width: ITEM_WIDTH,
  height: ITEM_HEIGHT,
  borderRadius: RADIUS + 1,
  overflow:'hidden'
}

const $image: ImageStyle = {
  width: ITEM_WIDTH,
  height: ITEM_HEIGHT,
  overflow: "hidden",
  borderRadius: RADIUS,
  zIndex: 0,
}

const $appName: TextStyle = {
  width: ITEM_WIDTH,
  zIndex: 1,

  position: 'absolute',
  top: SPACING,
  textAlign: 'center',
  textTransform: 'uppercase',

  color: colors.palette.neutral100,
  fontSize: 36,
  lineHeight: 44,
  fontFamily: 'rubikSemiBold'
}

const $date: TextStyle = {
  position: 'absolute',
  bottom: SPACING,
  left: SPACING,
  zIndex: 1,
}
