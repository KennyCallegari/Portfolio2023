/* eslint-disable max-len */

import { useStores } from "app/models";
import { colors } from "app/theme";
import { Dimensions, ImageSourcePropType } from "react-native";
import { Easing, SharedTransition, withTiming } from "react-native-reanimated";

export interface IProjectsData {
  id: number,
  appName: string,
  date: string,
  imageSource?: string,
  color: string,
}

export interface IProjectDetailsData {
  id: number,
  title?: string,
  description?: string,
  image?: ImageSourcePropType,
  iosLink?: string,
  androidLink?: string,
  appName?: string,
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

export const aspectRatio = 2;
export const CARD_WIDTH = width * .62;
export const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
export const IMAGE_WIDTH = CARD_WIDTH - 38;
const sideOfScreen = (width + CARD_WIDTH + 75 ) / 2
export const SNAP_POINTS = [-sideOfScreen, 0, sideOfScreen];

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
    },
    {
      id: 2,
      appName: "Meditatio",
      date: "Février 2023 - Avril 2023",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.meditatioBackground,
    },
    {
      id: 3,
      appName: "Mister Good Coffee",
      date: "Septembre 2021 - Mai 2022",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.misterGoodCoffeeBackground,
    },
    {
      id: 4,
      appName: "Compani",
      date: "Septembre 2020 - Avril 2022",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.companiBackground,
    },
    {
      id: 5,
      appName: "Compani Outils",
      date: "Septembre 2020 - Avril 2022",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.companiOutilsBackground,
    },
    {
      id: 6,
      appName: "Ector",
      date: "Septembre 2019 - Août 2020",
      color: colors.palette.lavender600,
      imageSource: assetsStore.projectAssets.ectorBackground,
    }
  ]
}

export const rosarioData: IProjectDetailsData[] = [
  {
    id: 12,
    iosLink: "https://apps.apple.com/fr/app/rosario-chapelet-par-hozana/id1619096568",
    androidLink: "https://play.google.com/store/apps/details?id=com.hozana.rosario&hl=fr&gl=US",
  },
  {
    id: 11,
    title: "Liens",
    image: require("../../../assets/images/tarot-Android.png")
  },
  {
    id: 10,
    description: "Romain Delenda - Chef de projet\n\nromain@hozana.org",
  },
  {
    id: 9,
    title: "Contacts",
    image: require("../../../assets/images/tarot-Apple.png")
  },
  {
    id: 8,
    description: "React Native • Typescript • TanStack Query • Axios • Firebase • luxon • Reanimated • Track Player",
  },
  {
    id: 7,
    title: "Technologies",
    image: require("../../../assets/images/tarot-magician.png")
  },
  {
    id: 6,
    description: "Je développe les fonctionnalités avec un développeur back-end, je participe à la "
    + "conception de la roadmap et je déploie l'application à chaque fin de sprint.",
  },
  {
    id: 5,
    description: "Je suis l'unique développeur front de Rosario. Je m'occupe donc aussi bien du développement que "
    + "de la gestion du projet.",
  },
  {
    id: 4,
    title: "Mon rôle",
    image: require("../../../assets/images/tarot-queen.png")
  },
  {
    id: 3,
    description: "Elle contient une messagerie de groupe, un lecteur audio pour prier le chapelet seul, une gestion des"
      + " notifications ainsi qu'une large bibliothèque de svg.",
  },
  {
    id: 2,
    description: "Rosario est une application qui permet à un groupe de 5 personnes de prier le Rosaire Vivant.",
  },
  {
    id: 1,
    title: "Le projet",
    image: require("../../../assets/images/tarot-king.png")
  },
  {
    id: 0,
    appName: "Rosario",
    image: require("../../../assets/images/rosario-app-icon.webp")
  },
]
