import { observer } from "mobx-react-lite"
import React, { FC, useRef, useState } from "react"
import { View, ViewStyle, ViewToken } from "react-native"
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"
import { spacing } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import data, { IOnBoardingData } from "./OnBoardingData"
import { OnBoardingItem } from "./OnBoardingItem"
import { OnBoardingPagination } from "./OnBoardingPagination"
import { OnBoardingButton } from "./OnBoardingButton"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"

interface OnBoardingScreenProps extends AppStackScreenProps<"OnBoarding"> {}

export const OnBoardingScreen: FC<OnBoardingScreenProps> = observer(function OnBoardingScreen() {
  const flatListRef = useAnimatedRef<any>()
  const x = useSharedValue(0)
  const flatListIndex = useSharedValue(0)
  // used to re-render all texts after changing app's language
  const [locale, setLocale] = useState('');

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  const onViewableItemsChanged = ({ viewableItems }: {viewableItems: ViewToken[]}) => {
    if (viewableItems[0].index === null) return
    
    flatListIndex.value = viewableItems[0].index
  };
  const viewabilityConfig={ minimumViewTime: 300, viewAreaCoveragePercentThreshold: 10 }
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => { x.value = event.contentOffset.x }
  })

  const renderItem = ({ item, index }: {item: IOnBoardingData, index: number}) => (
    <OnBoardingItem item={item} index={index} x={x} setLocale={setLocale} />
  )

  return (
    <View style={$container}>
      <Animated.FlatList ref={flatListRef} data={data} renderItem={renderItem} keyExtractor={item => `${item.id}`} 
        scrollEventThrottle={16} horizontal bounces={false} showsHorizontalScrollIndicator={false} pagingEnabled
        onScroll={onScroll} viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current} extraData={locale}
      />
      <View style={[$footer, $bottomContainerInsets]}>
        <OnBoardingPagination data={data} x={x} />
        <OnBoardingButton flatListRef={flatListRef} dataLength={data.length} flatListIndex={flatListIndex} x={x} />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
}

const $footer: ViewStyle = {
  position: "absolute",
  bottom: 20,
  left: 0,
  right: 0,
  marginHorizontal: spacing.xl,

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}