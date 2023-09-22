import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "app/theme"
import { ProjectStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import { FULL_SIZE, IProjectsData, ITEM_WIDTH, PARTIALLY_SHOWED_ITEM_SIZE, useData } from "./ProjectsData"
import { ProjectsPreview } from "./ProjectsPreview"
import Animated, { useAnimatedRef, useScrollViewOffset } from "react-native-reanimated"

interface ProjectsScreenProps extends ProjectStackScreenProps<"Projects"> {}

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen({ navigation }) {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const scrollX = useScrollViewOffset(scrollViewRef);
  const [visibleIndex, setVisibleIndex] = useState(0)
  const data = useData()

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
    <Screen preset="fixed" style={$container}>
      <SafeAreaView>
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
      </SafeAreaView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: colors.palette.angry500
}

const $listContainer: ViewStyle = {
  paddingHorizontal: PARTIALLY_SHOWED_ITEM_SIZE
}
