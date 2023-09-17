import React, { FC } from "react"
import { IData, ITEM_HEIGHT } from "./ContactData"
import { TextStyle, View, ViewStyle } from "react-native"
import { Text } from "app/components"
import { ContactIcon } from "./ContactIcon"


interface IContactListItemProps {
  icon: IData["icon"]
  color: string
  name: string
  showText: boolean
}

export const ContactListItem: FC<IContactListItemProps> = 
  function ContactListItem(props: IContactListItemProps) {
    const { icon, color, name, showText } = props

    return (
      <View style={$itemWrapper}>
        <Text size="xl" style={[$itemText, { color }]} text={showText ? name : ''} />
        <ContactIcon icon={icon} color={color} />
      </View>
    )
  }

const $itemWrapper: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: ITEM_HEIGHT,
}

const $itemText: TextStyle = {
  textTransform: 'capitalize',
  textAlign: 'center',
  justifyContent: 'center',
}

