import React, { FC } from "react"
import { ViewStyle, View } from "react-native"
import { DuolingoButton, Text } from "app/components"
import { colors, spacing } from "app/theme"
import { ITEM_HEIGHT, SCREEN_HEIGHT } from "./ContactData"


interface IContactButtonProps {
  onPress: () => void,
}

export const ContactButton: FC<IContactButtonProps> = function ContactButton(props: IContactButtonProps) {
  return (
    <View style={$container}>
      <DuolingoButton onPress={props.onPress} shadowColor={colors.palette.lavender400} shadowDepth={8}
        borderRadius={20}>
        <View style={$button}>
          <Text text="Connect !" size="xl" color="lavender700" />
        </View>
      </DuolingoButton>
    </View>
  )
}

const $container: ViewStyle = {
  position: "absolute",
  bottom: SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
  paddingLeft: spacing.md,
}

const $button: ViewStyle = {
  borderRadius: 20,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  backgroundColor: colors.palette.lavender200,
  alignItems: 'center',
  justifyContent: 'center',
}
