import React, { forwardRef } from "react"
import { IData, ITEM_HEIGHT, SCREEN_HEIGHT, data } from "./ContactData"
import { FlatListProps, ViewStyle } from "react-native"
import Animated from "react-native-reanimated"
import { ContactListItem } from "./ContactListItem"


interface IContactListProps {
  color: string,
  showText: boolean,
  style: FlatListProps<IData[]>['style']
  onScroll?: () => void
  onItemIndexChange?: (_: number) => void
}

export const ContactList = forwardRef<any, IContactListProps>(
  function ContactList(props, ref) {
    const { color, showText, style, onScroll, onItemIndexChange } = props


    const $contentContainerStyle: ViewStyle = {
      paddingTop: showText ? 0 : SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
      paddingBottom: showText ? 0 : 2 * SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
      paddingHorizontal: 20,
    }

    const renderItem = ({ item }) => (<ContactListItem {...item} color={color} showText={showText} />)

    const onMomentumScrollEnd = event => {
      const newIndex = Math.round(event.nativeEvent.contentOffset.y / ITEM_HEIGHT)
      if(onItemIndexChange) onItemIndexChange(newIndex)
    }

    return (
      <Animated.FlatList<IData>
        style={style}
        ref={ref}
        scrollEnabled={!showText}
        onScroll={onScroll}
        snapToInterval={ITEM_HEIGHT}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        decelerationRate='fast'
        data={data}
        keyExtractor={item => `${item.name}-${item.icon}`}
        contentContainerStyle={$contentContainerStyle}
        bounces={false}
        renderItem={renderItem}
      />
    )
  })

