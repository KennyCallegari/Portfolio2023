import React from "react"
import { View, ViewStyle, StyleSheet, ImageStyle, TextStyle, Dimensions } from "react-native"
import { ProjectStackScreenProps } from "app/navigators"
import { Icon } from "app/components"
import { IProjectsData, ITEM_WIDTH, SPACING, transition, transitionText } from "./ProjectsData"
import { colors } from "app/theme"
import Animated, { FadeIn } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface ProjectsDetailsScreenProps extends ProjectStackScreenProps<"ProjectsDetails"> {
  item: IProjectsData
}

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen")

const ProjectsDetailsScreen = function ProjectsDetailsScreen({ navigation, route }: ProjectsDetailsScreenProps) {
  const { item } = route.params
  const { top: safeTop } = useSafeAreaInsets() 

  const $backButton: ImageStyle = {
    position: 'absolute',
    zIndex: 1,
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
  

  return (
    <View style={$container}>
      <Animated.View entering={FadeIn.duration(500).delay(500)} style={$backButton}>
        <Icon icon="back" size={35} color={colors.palette.neutral100}
          onPress={() => navigation.goBack()} />
      </Animated.View>
      <Animated.Text sharedTransitionTag={`title${item.id}`} sharedTransitionStyle={transitionText}
        style={$appName}>
        {item.appName}
      </Animated.Text>
      
      <Animated.Image
        sharedTransitionTag={`image${item.id}`}
        sharedTransitionStyle={transition} 
        source={item.imageSource}
        resizeMode="cover"
        style={$image}
      />
    </View>
  )
}

export default ProjectsDetailsScreen

const $container: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: colors.palette.angry500
}

const $image: ImageStyle = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  resizeMode: 'cover',
  zIndex: 0,
}
