import { observer } from "mobx-react-lite"
import React, { FC, useRef, useCallback } from "react"
import { View, ViewStyle, StyleSheet, Linking } from "react-native"
import Animated, { Value, call } from "react-native-reanimated"
import Toast from "react-native-toast-message"
import { MainTabScreenProps } from "app/navigators"
import { Text } from "app/components"
import { colors, spacing } from "app/theme"
import { IData, ITEM_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH, data } from "./ContactData"
import { ContactButton } from "./ContactButton"
import { ContactList } from "./ContactList"
import { ERROR } from "app/services/toast"

interface ContactScreenProps extends MainTabScreenProps<"Contact"> {}

export const ContactScreen: FC<ContactScreenProps> = observer(function ContactScreen() {
  const index = useRef(0)
  const outsideListRef = React.useRef<Animated.FlatList<IData>>(null);
  const selectedListRef = React.useRef<any>(null);
  const scrollY = React.useRef(new Value<number>(0)).current

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  )

  const onScrollYChange = ([scrollY]: [number]) => {
    if (selectedListRef?.current) selectedListRef.current.scrollToOffset({ offset: scrollY, animated: false });
  }

  const onItemIndexChange = useCallback((newIndex: number) => { index.current = newIndex }, [])

  const onPressButton = useCallback(async () => {
    const medium = data[index.current].name
    
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
      console.log('e', e?.message)
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
  }, [index]); 

  return (
    <View style={$container}>
      <View style={$titleContainer}>
        <Text size="xxl" color="lavender200" tx="contactScreen.title" />
      </View>

      {/*
        Animated.Code is used as eventListener for react-native-reanimated
        https://github.com/software-mansion/react-native-reanimated/issues/299
      */}
      <Animated.Code>
        {() => call([scrollY], onScrollYChange)}
      </Animated.Code>
      {/*
        There are 2 lists connected by the scroll, to create the mask view effect
        One only shows 1 item (selectedListRef)
        The other shows every other item (outsideListRef)
      */}
      <ContactList
        ref={outsideListRef}
        color={colors.palette.lavender200}
        style={StyleSheet.absoluteFill}
        onScroll={onScroll}
        showText={false}
      />
      <ContactList
        ref={selectedListRef}
        onItemIndexChange={onItemIndexChange}
        color={colors.palette.lavender700}
        showText
        style={$darkList}
      />

      <ContactButton onPress={onPressButton} />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.lavender700,
}

const $titleContainer: ViewStyle = {
  position: "absolute",
  top: SCREEN_HEIGHT / 5 - ITEM_HEIGHT / 2,
  width: SCREEN_WIDTH * 0.5,
  paddingHorizontal: spacing.md,
}

const $darkList: ViewStyle = {
  position: 'absolute',
  backgroundColor: colors.palette.lavender200,
  width: SCREEN_WIDTH,
  height: ITEM_HEIGHT,
  top: SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2
}
