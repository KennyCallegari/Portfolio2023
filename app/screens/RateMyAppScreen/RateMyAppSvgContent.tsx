/* eslint-disable max-len */
import React, { FC } from "react"
import { Pressable, View, ViewStyle, Linking } from "react-native"
import { G, Path, Svg } from "react-native-svg"
import { AntDesign } from "@expo/vector-icons"
import { DuolingoButton, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { INITIAL_PATH, PATHS, SCREEN_WIDTH, STORE_LINK, types } from "./RateMyAppData"
import Toast from "react-native-toast-message"
import { ERROR } from "app/services/toast"

interface RateMyAppSvgContentProps {
  onPressStar: (type: string, index: number) => void,
  starIndex: number,
  pathRef: React.MutableRefObject<Path>,
}

export const RateMyAppSvgContent: FC<RateMyAppSvgContentProps> = function RateMyAppSvgContent(
  props: RateMyAppSvgContentProps
) {
  const { onPressStar, starIndex, pathRef } = props;

  const renderStar = (type: string, index: number) => {
    return (
      <Pressable key={type} onPress={() => onPressStar(type, index)} hitSlop={12}>
        <AntDesign name={starIndex >= index ? "star" : "staro"} size={32} color={colors.palette.neutral100} />
      </Pressable>
    )
  }

  const openReviewInStore = async () => {
    try {
      await Linking.openURL(STORE_LINK)
    } catch (e) {
      Toast.show({
        type: ERROR,
        props: {
          title: 'rateMyAppScreen.errorTitle',
          description: 'rateMyAppScreen.errorDescription'
        },
        position: 'bottom'
      })
    }
  }

  return (
    <>
      <View style={$svgContainer}>
        <Svg viewBox="0 0 166 136">
          <G>
            <Path d={PATHS["left-eye"]} fill={colors.palette.neutral800} />
            <Path ref={pathRef} fill={colors.palette.neutral800} d={INITIAL_PATH} />
            <Path d={PATHS["right-eye"]} fill={colors.palette.neutral800} />
          </G>
        </Svg>
      </View>
      <View style={$footer}>
        <View style={$starsContainer}>
          {types.map(renderStar)}
        </View>
        <DuolingoButton onPress={openReviewInStore} shadowColor={colors.palette.neutral600}
          borderRadius={30} style={$buttonContainer}>
          <View style={$button}>
            <Text tx="rateMyAppScreen.button" size="xl" weight="semiBold" color="neutral600" />
          </View>
        </DuolingoButton>
      </View>
    </>
  )
}

const $svgContainer: ViewStyle = {
  flex: 1,
  marginTop: spacing.xl,
  justifyContent: 'flex-end',
}

const $footer: ViewStyle = {
  alignItems: 'center',
  marginBottom: spacing.xl,
}

const $starsContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: 60,
  borderRadius: 30,
  width: SCREEN_WIDTH * .9
}

const $buttonContainer: ViewStyle = {
  width: SCREEN_WIDTH * .8,
  marginTop: spacing.xl
}

const $button: ViewStyle = {
  borderRadius: 30,
  paddingVertical: spacing.sm,
  backgroundColor: colors.palette.neutral100,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}
