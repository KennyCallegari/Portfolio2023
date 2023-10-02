/* eslint-disable max-len */

import { useStores } from "app/models";
import { colors } from "app/theme";
import { Dimensions } from "react-native";
import { Easing, SharedTransition, withTiming } from "react-native-reanimated";
import { meditatioData, misterGoodCoffeeData, rosarioData, companiOutilsData, ectorData, companiData } from "./datas";
import { IProjectDetailsData } from "./ProjectDetailsData";

export interface IProjectsData {
  id: number,
  appName: string,
  date: string,
  imageSource?: string,
  color: string,
  datas: IProjectDetailsData[]
}

export const { width, height } = Dimensions.get('screen')
export const SIZE = 64
export const ICON_SIZE = SIZE * .6
export const SPACING = 12
export const RADIUS = 18
const s = width * .68
export const ITEM_WIDTH = s
export const ITEM_HEIGHT = s * 1.5
export const FULL_SIZE = s + SPACING * 2
export const FOOTER_WIDTH = width - FULL_SIZE

// item size when only partially showed on screen. used for paddign for first and last item
export const PARTIALLY_SHOWED_ITEM_SIZE = (width - FULL_SIZE) / 2;

const config = {
  duration: 400,
  easing: Easing.quad
}

export const transition = SharedTransition.custom(values => {
  'worklet';
  return {
    width: withTiming(values.targetWidth, config),
    height: withTiming(values.targetHeight, config),
    originX: withTiming(values.targetOriginX, config),
    originY: withTiming(values.targetOriginY, config),
  };
});

export const transitionText = SharedTransition.custom(values => {
  'worklet';
  return {
    originX: withTiming(values.targetOriginX, config),
    originY: withTiming(values.targetOriginY, config),
  };
});

export const useData = ():IProjectsData[] => {
  const { assetsStore } = useStores()

  return [
    {
      id: 1,
      appName: "Rosario",
      date: "Avril 2022 - Aujourd'hui",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.rosarioBackground,
      datas: rosarioData,
    },
    {
      id: 2,
      appName: "Meditatio",
      date: "Février 2023 - Avril 2023",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.meditatioBackground,
      datas: meditatioData,
    },
    {
      id: 3,
      appName: "Mister Good Coffee",
      date: "Septembre 2021 - Mai 2022",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.misterGoodCoffeeBackground,
      datas: misterGoodCoffeeData,
    },
    {
      id: 4,
      appName: "Compani",
      date: "Septembre 2020 - Avril 2022",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.companiBackground,
      datas: companiData,
    },
    {
      id: 5,
      appName: "Compani Outils",
      date: "Septembre 2020 - Avril 2022",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.companiOutilsBackground,
      datas: companiOutilsData,
    },
    {
      id: 6,
      appName: "Ector",
      date: "Septembre 2019 - Août 2020",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.ectorBackground,
      datas: ectorData,
    }
  ]
}
