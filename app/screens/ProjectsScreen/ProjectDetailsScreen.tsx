import React from "react"
import { ViewStyle, StyleSheet, ImageStyle, TextStyle, Dimensions, View } from "react-native"
import { ProjectStackScreenProps } from "app/navigators"
import { Icon, Screen } from "app/components"
import {
  IProjectDetailsData,
  IProjectsData,
  ITEM_WIDTH,
  SPACING,
  rosarioData,
  transition,
  transitionText
} from "./ProjectsData"
import { colors } from "app/theme"
import Animated, { FadeIn, useSharedValue } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ProjectDetailsItem } from "./ProjectDetailsItem"

interface ProjectDetailsScreenProps extends ProjectStackScreenProps<"ProjectsDetails"> {
  item: IProjectsData
}

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen")

const ProjectDetailsScreen = function ProjectDetailsScreen({ navigation, route }: ProjectDetailsScreenProps) {
  const { item } = route.params
  const { top: safeTop } = useSafeAreaInsets()

  const shuffleBack = useSharedValue(false)

  const $backButton: ImageStyle = {
    position: 'absolute',
    zIndex: 2,
    top: safeTop + 30,
    left: SPACING * 2,
  }

  const $appName: TextStyle = {
    width: ITEM_WIDTH,
    zIndex: 1,

    textTransform: 'uppercase',
    color: colors.palette.neutral100,
    fontSize: 36,
    lineHeight: 44,
    fontFamily: 'rubikSemiBold',

    position: 'absolute',
    top: safeTop + 26,
    alignSelf: 'center',
    textAlign: 'center',
    transform: [{ translateX: 0 }],
  }

  const renderItem = (item: IProjectDetailsData, index: number) => {
    return <ProjectDetailsItem key={item.id} item={item} index={index} shuffleBack={shuffleBack} />
  }

  return (
    <Screen preset="fixed" contentContainerStyle={$container}>
      <Animated.View entering={FadeIn.duration(500).delay(500)} style={$backButton}>
        <Icon icon="back" size={35} color={colors.palette.neutral100}
          onPress={() => navigation.goBack()} />
      </Animated.View>
      <Animated.Text sharedTransitionTag={`title${item.id}`} sharedTransitionStyle={transitionText}
        style={$appName}>
        {item.appName}
      </Animated.Text>

      <View style={$list}>
        {rosarioData.map(renderItem)}
      </View>
      
      <Animated.Image
        sharedTransitionTag={`image${item.id}`}
        sharedTransitionStyle={transition} 
        source={{ uri: item?.imageSource || '' }}
        resizeMode="cover"
        style={$image}
      />
    </Screen>
  )
}

export default ProjectDetailsScreen

const $container: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  flex: 1,
  justifyContent: 'center',
  backgroundColor: colors.palette.blue300 // for shared element transition purpose
}

const $list: ViewStyle = {
  zIndex: 1,
  flex: 1,
  alignItems: 'center',
}

const $image: ImageStyle = {
  position: 'absolute',
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  resizeMode: 'cover',
  zIndex: 0,
}
