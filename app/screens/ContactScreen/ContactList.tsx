import React, { forwardRef } from "react"
import { FlatListProps, ViewStyle } from "react-native"
import Animated from "react-native-reanimated"

import { spacing } from "app/theme"

import { IData, ITEM_HEIGHT, SCREEN_HEIGHT, data } from "./ContactData"
import { ContactListItem } from "./ContactListItem"


interface IContactListProps {
  color: string,
  showText: boolean,
  style: FlatListProps<IData[]>['style']
}

export const ContactList = forwardRef<Animated.ScrollView, IContactListProps>(
  function ContactList(props, ref) {
    // showText is also used to distinguish between the selectedItem FlatList and the outsideItems FlatList
    const { color, showText, style } = props

    const $contentContainerStyle: ViewStyle = {
      paddingTop: showText ? 0 : SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
      paddingBottom: showText ? 0 : 2 * SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
      paddingHorizontal: spacing.md,
    }

    const renderItem = (item: IData) => (
      <ContactListItem key={`${item.name}-${item.icon}`} {...item} color={color} showText={showText} />
    )

    return (
      <Animated.ScrollView
        style={style}
        ref={ref}
        scrollEnabled={!showText}
        snapToInterval={ITEM_HEIGHT}
        scrollEventThrottle={16}
        decelerationRate='fast'
        contentContainerStyle={$contentContainerStyle}
        bounces={false}
      >
        {data.map(renderItem)}
      </Animated.ScrollView>
    )
  })

