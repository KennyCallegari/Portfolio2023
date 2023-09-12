import React, { FC, useState } from "react"
import { ViewStyle,  ImageStyle, View, Image } from "react-native"
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Animated,
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
import { AnimatedTouchable, DuolingoButton } from "app/components"


interface IChangeLanguageButtonProps {
  onPressLanguage: (_: string) => void,
}

export const ChangeLanguageButton: FC<IChangeLanguageButtonProps> = function ChangeLanguageButton(
  props: IChangeLanguageButtonProps
) {
  const firstValue = useSharedValue(0)
  const secondValue = useSharedValue(0)
  const thirdValue = useSharedValue(0)
  const isOpen = useSharedValue(false)
  // used to re-render icon
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    }
    
    if (isOpen.value) {
      // firstValue goes to 0 -> so the icon goes back to initial position with the animated style 
      firstValue.value = withTiming(0, config)
      // secondValue goes to 0 with a little delay -> go back to initial position
      secondValue.value = withDelay(50, withTiming(0, config))
      // thirdValue reset to zero -> spinning to angle 0
      thirdValue.value = withTiming(0, config)
    } else {
      // firstValue goes to 52 with a spring animation -> go outside the main button
      firstValue.value = withDelay(200, withSpring(52))
      // secondValue goes to 52 with a spring animation -> go outside the main button
      secondValue.value = withDelay(100, withSpring(52))
      // thirdValue goes to 360 -> so the icon can spin with the animated style
      thirdValue.value = withTiming(360, config)
    }

    isOpen.value = !isOpen.value
    setTimeout(() => setIsOpened(prevValue => !prevValue), 300)
  }

  const $firstIcon = useAnimatedStyle(() => {
    // scale takes a value from 0 to 52 -> convert it to a value from 0 to 1 and scales the icon accordingly
    const scale = interpolate(
      firstValue.value,
      [0, 52],
      [0, 1],
      Extrapolate.CLAMP,
    )

    // bottom and right controls icon position (so from +20 to +72 and from -20 to +32)
    return {
      bottom: firstValue.value + 20,
      right: firstValue.value - 20,
      transform: [{ scale }],
    }
  })

  const $secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [0, 52],
      [0, 1],
      Extrapolate.CLAMP,
    )

    return {
      bottom: secondValue.value + 20,
      left: secondValue.value - 20,
      transform: [{ scale }],
    }
  })

  const $buttonIcon = useAnimatedStyle(() => ({ transform: [{ rotateZ: `${thirdValue.value}deg` }] }))

  const onPressLanguage = (locale: string) => {
    toggleMenu()
    props.onPressLanguage(locale)
  }
  
  return (
    <View style={$container}>
      <AnimatedTouchable onPress={() => onPressLanguage('en')} style={[$button, $secondIcon]}>
        <Image source={require("../../../assets/images/usa.png")} style={$flag} />
      </AnimatedTouchable>

      <AnimatedTouchable onPress={() => onPressLanguage('fr')} style={[$button, $firstIcon]}>
        <Image source={require("../../../assets/images/france.png")} style={$flag} />
      </AnimatedTouchable>

      <DuolingoButton style={$duolingoButton} onPress={toggleMenu}>
        {isOpened
          ? (
            <Animated.View style={$buttonIcon}>
              <AntDesign name="close" size={46} color="white" />
            </Animated.View>
          )
          : (
            <Animated.View style={$buttonIcon}>
              <MaterialCommunityIcons name="translate" size={46} color="white" />
            </Animated.View>
          )
        }
      </DuolingoButton>
    </View>
  )
}

const $container: ViewStyle = {
  marginTop: 60,
  alignItems: 'center',
  position: 'relative',
}

const $duolingoButton: ViewStyle = {
  position: 'absolute',
  bottom: 0,
}

const $button: ViewStyle = {
  position: 'absolute',
  bottom: 0,

  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  width: 72,
  height: 72,
}

const $flag: ImageStyle = {
  width: 70,
  height: 70,
}


