import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle } from "react-native"
import { CTABox } from "app/components"
import Animated,
{ Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated"
import { colors } from "app/theme"
import I18n from "i18n-js"
import { ChangeLanguageButton } from "./ChangeLanguageButton"



interface IOnBoardingTranslationModuleProps {
  setLocale: (_: string) => void,
}

export const OnBoardingTranslationModule: FC<IOnBoardingTranslationModuleProps> = function OnBoardingTranslationModule(
  props: IOnBoardingTranslationModuleProps
) {
  const y = useSharedValue(-70)
  const opacity = useSharedValue(1)
  const [fadeCTA, setFadeCTA] = useState(false);
  const [isCTAVisible, setIsCTAVisible] = useState(true);

  useEffect(() => {
    const config = {
      easing: Easing.inOut(Easing.ease),
      duration: 1500,
    }
    
    y.value = withRepeat(withTiming(-82, config), -1, true)
  }, [])

  useEffect(() => {
    if(fadeCTA) {
      opacity.value = withTiming(0, { duration: 500 })
      setTimeout(() => setIsCTAVisible(false), 500)
    }
  }, [fadeCTA])

  const $bouncing = useAnimatedStyle(() => ({ transform: [{ translateY: y.value }], opacity: opacity.value }))

  const changeLocale = (locale: string) => {
    I18n.locale = locale
    props.setLocale(locale)
  }

  return (
    <View style={$container}>
      {isCTAVisible && <Animated.View style={[$ctaContainer,  $bouncing]}>
        <CTABox borderColor={colors.palette.blue800} backgroundColor={colors.palette.blue300} text="CLIQUEZ ICI"
          textColor={colors.palette.blue800} />
      </Animated.View>}
      <ChangeLanguageButton onPressLanguage={changeLocale} onFirstPress={() => setFadeCTA(true)} />
    </View>
  )
}

const $container: ViewStyle = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: 100
}

const $ctaContainer: ViewStyle = {
  alignItems: 'center',
  zIndex: 1 
}
