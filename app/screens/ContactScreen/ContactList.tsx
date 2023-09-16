import React, { forwardRef } from "react"
import { IData, ITEM_HEIGHT, SCREEN_HEIGHT, data } from "./ContactData"
import { FlatListProps, ViewStyle, ViewToken } from "react-native"
import Animated from "react-native-reanimated"
import { ContactListItem } from "./ContactListItem"
import { spacing } from "app/theme"


interface IContactListProps {
  color: string,
  showText: boolean,
  style: FlatListProps<IData[]>['style']
  onScroll?: () => void
  onItemIndexChange?: (_: number) => void
}

/*
  this forwardRef typing gave me nightmares so I let it at any for now
*/
export const ContactList = forwardRef<any, IContactListProps>(
  function ContactList(props, ref) {
    const { color, showText, style, onScroll, onItemIndexChange } = props

    const $contentContainerStyle: ViewStyle = {
      paddingTop: showText ? 0 : SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
      paddingBottom: showText ? 0 : 2 * SCREEN_HEIGHT / 3 - ITEM_HEIGHT / 2,
      paddingHorizontal: spacing.md,
    }

    const renderItem = ({ item }) => (<ContactListItem {...item} color={color} showText={showText} />)

    /*
      onViewableItemsChanged and onEndReached are used to get visible item inside the clear FlatList
      for some reason onViewableItemsChanged doesn't not trigger properly for the last item so I used onEndReached also
    */
    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[]}) => {
      const newIndex = viewableItems[viewableItems.length - 1]?.index || 0

      if(onItemIndexChange) onItemIndexChange(newIndex)
    }

    const onEndReached = () => {
      if(onItemIndexChange) onItemIndexChange(data.length - 1)
    }

    return (
      <Animated.FlatList<IData>
        style={style}
        ref={ref}
        scrollEnabled={!showText}
        onScroll={onScroll}
        snapToInterval={ITEM_HEIGHT}
        onViewableItemsChanged={onViewableItemsChanged}
        onEndReached={onEndReached}
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

