import React from "react"
import { TextStyle, View, ViewStyle, StyleSheet, Image } from "react-native"

import { colors, spacing } from "app/theme"

import {
  IMAGE_WIDTH,
  IProjectDetailsData,
  aspectRatio,
} from "./ProjectsData"
import { StoreBadge, Text } from "app/components"


interface IProjectDetailsCardProps {
  item: IProjectDetailsData,
}

const ProjectDetailsCard = (
  props: IProjectDetailsCardProps
) => {
  const { item } = props;


  // --------- CASE - LINKS CARD -----------
  if (item.iosLink) {
    return (
      <View style={$outercontainer}>
        <View style={$fullBackgroundContainer}>
          <View style={$fullInnerContainer}>
            <StoreBadge type="ios" href={item.iosLink} style={$badges} />
            <StoreBadge type="android" href={item.androidLink} style={$badges} />
          </View>
        </View>
      </View>
    )
  }

  // --------- CASE - APP ICON -----------
  if (item.appName) {
    return (
      <View style={$outercontainer}>
        <View style={$backgroundContainer}>
          <View style={$innerContainer}>
            <View style={$iconContainer}>
              <Image
                source={item.image}
                style={{
                  width: IMAGE_WIDTH / 2,
                  height: IMAGE_WIDTH / 2,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <Text text={item.appName} style={$title} />
      </View>
    )
  }

  // --------- CASE - TITLE CARD -----------
  if (item.title) {
    return (
      <View style={$outercontainer}>
        <View style={$backgroundContainer}>
          <Image
            source={item.image}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_WIDTH * aspectRatio,
            }}
            resizeMode="contain"
          />
        </View>
        <Text text={item.title} style={$title} />
      </View>
    )
  }

  // --------- CASE - DESCRIPTION CARD -----------

  return (
    <View style={$outercontainer}>
      <View style={$fullBackgroundContainer}>
        <View style={$fullInnerContainer}>
          <Text text={item.description} style={$description} />
        </View>
      </View>
    </View>
  )
}

export default React.memo(ProjectDetailsCard)

const $outercontainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e4d0ae66",
  borderRadius: 26,
}

const $backgroundContainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.palette.tarotBlue,
  marginHorizontal: 16,
  marginTop: 16,
  marginBottom: 64,
  borderRadius: 26,
  overflow: 'hidden'
}

const $fullBackgroundContainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  backgroundColor: colors.palette.tarotBlue,
  marginHorizontal: 16,
  marginTop: 16,
  marginBottom: 16,
  borderRadius: 26,
  overflow: 'hidden'
}

const $innerContainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.palette.tarotBlue,
  margin: 16,
  borderRadius: 24,
  borderWidth: 2,
  borderColor: colors.palette.tarotYellow,
}


const $fullInnerContainer: ViewStyle = {
  ...StyleSheet.absoluteFillObject,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.palette.tarotBlue,
  margin: 16,
  padding: 16,
  borderRadius: 24,
  borderWidth: 2,
  borderColor: colors.palette.tarotYellow,
}

const $iconContainer: ViewStyle = {
  borderRadius: 24,
  overflow: 'hidden',
}

const $title: TextStyle = {
  fontSize: 28,
  lineHeight: 28,
  textTransform: 'uppercase',
  fontFamily: 'macondoRegular',
  position: 'absolute',
  bottom: 16,
  left: 0,
  right: 0,
  textAlign: 'center',
  color: colors.palette.tarotBlue,
}

const $description: TextStyle = {
  fontSize: 18,
  lineHeight: 24,
  fontFamily: 'macondoRegular',
  color: colors.palette.tarotYellow,
}

const $badges: TextStyle = {
  marginVertical: spacing.xs,
}
