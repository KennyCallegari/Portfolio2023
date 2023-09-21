import { observer } from "mobx-react-lite"
import React, { FC, useCallback } from "react"
import { View, ViewStyle, StyleSheet, Linking } from "react-native"
import Animated,
{
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset
} from "react-native-reanimated"
import Toast from "react-native-toast-message"
import { MainTabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { ITEM_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH, data } from "./ContactData"
import { ContactButton } from "./ContactButton"
import { ContactList } from "./ContactList"
import { ERROR } from "app/services/toast"

interface ContactScreenProps extends MainTabScreenProps<"Contact"> {}

export const ContactScreen: FC<ContactScreenProps> = observer(function ContactScreen() {
  const outsideListRef = useAnimatedRef<Animated.ScrollView>();
  const selectedListRef = useAnimatedRef<Animated.ScrollView>();
  const scrollY = useScrollViewOffset(outsideListRef)
  const currentIndex = useDerivedValue(() => Math.round(scrollY.value / ITEM_HEIGHT));


  useAnimatedReaction(
    () => scrollY.value,
    (currentValue) =>  {
      if (currentValue) scrollTo(selectedListRef, 0, currentValue, false)
    },
  );

  const onPressButton = useCallback(async () => {
    const medium = data[currentIndex.value].name
    
    try {
      if (medium === 'phone') { 
        await Linking.openURL('tel:+33767181966')
        return
      }
      if (medium === 'mail') {
        await Linking.openURL('mailto:kenny.callegari@gmail.com')
        return
      }
      if (medium === 'linkedin') {
        await Linking.openURL('https://www.linkedin.com/in/kenny-callegari-4b9180281/')
        return
      }
      if (medium === 'whatsapp') {
        await Linking.openURL(`whatsapp://send?phone=+33767181966`)
        return
      }

      await Linking.openURL('https://github.com/KennyCallegari')
    } catch (e) {
      if (e?.message.includes('whatsapp')) {
        return Toast.show({
          type: ERROR,
          props: {
            title: 'contactScreen.errorTitle',
            description: 'contactScreen.errorWhatsapp'
          },
          position: 'bottom'
        });
      }

      return Toast.show({
        type: ERROR,
        props: {
          title: 'contactScreen.errorTitle',
          description: 'contactScreen.errorDescription'
        },
        position: 'bottom'
      });
    }
  }, [currentIndex.value])

  return (
    <Screen preset="fixed" contentContainerStyle={$container}>
      <View style={$titleContainer}>
        <Text size="xxl" color="lavender200" tx="contactScreen.title" />
      </View>

      {/*
        There are 2 lists connected by the scroll, to create the mask view effect
        One only shows 1 item (selectedListRef)
        The other shows every other item (outsideListRef)
      */}
      <ContactList
        ref={outsideListRef}
        color={colors.palette.lavender200}
        style={StyleSheet.absoluteFill}
        showText={false}
      />
      <ContactList
        ref={selectedListRef}
        color={colors.palette.lavender700}
        showText
        style={$darkList}
      />

      <ContactButton onPress={onPressButton} />
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.lavender700,
}

const $titleContainer: ViewStyle = {
  position: "absolute",
  top: SCREEN_HEIGHT / 5 - ITEM_HEIGHT / 2,
  width: SCREEN_WIDTH * 0.6,
  paddingHorizontal: spacing.md,
}

const $darkList: ViewStyle = {
  position: 'absolute',
  backgroundColor: colors.palette.lavender200,
  width: SCREEN_WIDTH,
  height: ITEM_HEIGHT,
  top: SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2
}
