import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { NativeScrollEvent, NativeSyntheticEvent, TextStyle, ViewStyle } from "react-native"
import Animated, { useAnimatedRef, useScrollViewOffset } from "react-native-reanimated"

import { colors } from "app/theme"
import { ProjectStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"

import { FULL_SIZE, IProjectsData, ITEM_WIDTH, PARTIALLY_SHOWED_ITEM_SIZE, useData } from "./ProjectsData"
import { ProjectsPreview } from "./ProjectsPreview"

interface ProjectsScreenProps extends ProjectStackScreenProps<"Projects"> {}

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen({ navigation }) {
  const data = useData()

  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const scrollX = useScrollViewOffset(scrollViewRef);
  const [visibleIndex, setVisibleIndex] = useState(0)

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const _scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round((_scrollX) / ITEM_WIDTH);

    setVisibleIndex(index)
  };
  
  const goToDetailsScreen = (item: IProjectsData) => navigation.navigate("ProjectsDetails", { item })

  const renderItem = (item: IProjectsData, index: number) =>  {
    return (
      <ProjectsPreview
        key={item.id}
        item={item}
        index={index}
        scrollX={scrollX}
        goToDetailsScreen={goToDetailsScreen}
        disabled={visibleIndex !== index}
      />
    )
  }

  return (
    <Screen
      preset="fixed"
      backgroundColor={colors.palette.blue300}
      safeAreaEdges={["bottom", "top"]}
      contentContainerStyle={$screen}
    >
      <Text style={$title} text="Mes projets" size="xxl" weight="semiBold" color="blue800" />
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        contentContainerStyle={$listContainer}
        scrollEventThrottle={16}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {data.map(renderItem)}
      </Animated.ScrollView>
    </Screen>
  )
})

const $screen: ViewStyle = {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
}

const $title: TextStyle = {
  position: 'absolute',
  top: 20,
  left: 20,
}

const $listContainer: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: PARTIALLY_SHOWED_ITEM_SIZE
}
