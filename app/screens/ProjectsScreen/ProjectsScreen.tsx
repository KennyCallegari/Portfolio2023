import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle, Animated, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "app/theme"
import { ProjectStackScreenProps } from "app/navigators"
import { Screen } from "app/components"
import data, { FOOTER_WIDTH, FULL_SIZE, IProjectsData } from "./ProjectsData"
import { ProjectsPreview } from "./ProjectsPreview"

interface ProjectsScreenProps extends ProjectStackScreenProps<"Projects"> {}

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true }
  )

  const goToDetailsScreen = (item: IProjectsData) => navigation.navigate("ProjectsDetails", { item })

  const renderItem = ({ item, index }: { item: IProjectsData, index: number }) =>  {
    return (
      <ProjectsPreview item={item} index={index} scrollX={scrollX} goToDetailsScreen={goToDetailsScreen} />
    )
  }

  return (
    <Screen preset="fixed" style={$container}>
      <SafeAreaView>
        <Animated.FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={renderItem}
          onScroll={onScroll}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={FULL_SIZE}
          decelerationRate="fast"
          ListFooterComponent={() => <View style={{ paddingRight: FOOTER_WIDTH }} />}
        />
      </SafeAreaView>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: colors.palette.angry500
}
