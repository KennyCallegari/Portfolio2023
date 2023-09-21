import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "app/theme"
import { ProjectStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import data, { FOOTER_WIDTH, FULL_SIZE, IProjectsData } from "./ProjectsData"
import { ProjectsPreview } from "./ProjectsPreview"
import Animated, { useAnimatedRef, useScrollViewOffset } from "react-native-reanimated"

interface ProjectsScreenProps extends ProjectStackScreenProps<"Projects"> {}

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen({ navigation }) {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const scrollX = useScrollViewOffset(scrollViewRef);
  
  const goToDetailsScreen = (item: IProjectsData) => navigation.navigate("ProjectsDetails", { item })

  const renderItem = (item: IProjectsData, index: number) =>  {
    return (
      <ProjectsPreview
        key={item.key}
        item={item}
        index={index}
        scrollX={scrollX}
        goToDetailsScreen={goToDetailsScreen}
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
  paddingRight: FOOTER_WIDTH
}
