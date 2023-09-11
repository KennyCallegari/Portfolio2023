import React, { FC, useState } from "react"
import { ViewStyle,  ImageStyle, TouchableWithoutFeedback, View, Image } from "react-native"
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import 
Animated,
{ 
  Easing,
  Extrapolate,
  interpolate, 
  useAnimatedStyle, 
  useSharedValue, 
  withDelay, 
  withSpring, 
  withTiming 
} from "react-native-reanimated"
import { colors } from "app/theme"


interface IChangeLanguageButtonProps {
  onPressLanguage: (_: string) => void,
}

export const ChangeLanguageButton: FC<IChangeLanguageButtonProps> = function ChangeLanguageButton(
  props: IChangeLanguageButtonProps
) {
  const firstValue = useSharedValue(0)
  const secondValue = useSharedValue(0)
  const isOpen = useSharedValue(false)
  // used to re-render icon
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    }

    if (isOpen.value) {
      firstValue.value = withTiming(0, config)
      secondValue.value = withDelay(50, withTiming(0, config))
    } else {
      firstValue.value = withDelay(200, withSpring(40))
      secondValue.value = withDelay(100, withSpring(40))
    }

    isOpen.value = !isOpen.value
    setIsOpened(prevValue => !prevValue)
  }

  const $firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [0, 40],
      [0, 1],
      Extrapolate.CLAMP,
    )

    return {
      bottom: firstValue.value + 20,
      right: firstValue.value - 20,
      transform: [{ scale }],
    }
  })

  const $secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [0, 40],
      [0, 1],
      Extrapolate.CLAMP,
    )

    return {
      bottom: secondValue.value + 20,
      left: secondValue.value - 20,
      transform: [{ scale }],
    }
  })

  const onPressLanguage = (locale: string) => {
    toggleMenu()
    props.onPressLanguage(locale)
  }
  
  return (
    <View style={$container}>
      <TouchableWithoutFeedback onPress={() => onPressLanguage('en')}>
        <Animated.View style={[$button, $secondIcon]}>
          <Image source={require("../../../assets/images/usa.png")} style={$flag} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => onPressLanguage('fr')}>
        <Animated.View style={[$button, $firstIcon]}>
          <Image source={require("../../../assets/images/france.png")} style={$flag} />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <View style={$button}>
          {isOpened
            ? <AntDesign name="close" size={46} color="white" />
            : <MaterialCommunityIcons name="translate" size={46} color="white" />}
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const $container: ViewStyle = {
  marginTop: 60,
  alignItems: 'center',
  position: 'relative',
}

const $button: ViewStyle = {
  position: 'absolute',
  backgroundColor: colors.palette.blue700,
  bottom: 0,

  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  width: 60,
  height: 60,
}

const $flag: ImageStyle = {
  width: 70,
  height: 70,
}


