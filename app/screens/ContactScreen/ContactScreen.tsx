import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { colors } from "app/theme"
import { AppStackScreenProps } from "app/navigators"

interface ContactScreenProps extends AppStackScreenProps<"OnBoarding"> {}

export const ContactScreen: FC<ContactScreenProps> = observer(function ContactScreen() {

  return (
    <View style={$container}>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.angry100
}
