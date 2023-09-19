
import { colors } from "app/theme";
import { Dimensions, ImageSourcePropType } from "react-native";

export interface IProjectsData {
  key: string,
  appName: string,
  date: string,
  imageSource?: ImageSourcePropType,
  color: string,
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


const data: IProjectsData[] = [
  {
    key: "1",
    appName: "Rosario",
    date: "Avril 2022 - Aujourd'hui",
    color: colors.palette.lavender600,
    imageSource: require('./assets/rosario-background.png'),
  },
  {
    key: "2",
    appName: "Meditatio",
    date: "Février 2023 - Avril 2023",
    color: colors.palette.lavender600,
    imageSource: require('./assets/meditatio-background.png'),
  },
  {
    key: "3",
    appName: "Mister Good Coffee",
    date: "Septembre 2021 - Mai 2022",
    color: colors.palette.lavender600,
    imageSource: require('./assets/mister-good-coffee-background.png'),
  },
  {
    key: "4",
    appName: "Compani",
    date: "Septembre 2020 - Avril 2022",
    color: colors.palette.lavender600,
    imageSource: require('./assets/compani-background.png'),
  },
  {
    key: "5",
    appName: "Compani Outils",
    date: "Septembre 2020 - Avril 2022",
    color: colors.palette.lavender600,
    imageSource: require('./assets/compani-outils-background.png'),
  },
  {
    key: "6",
    appName: "Ector",
    date: "Septembre 2019 - Août 2020",
    color: colors.palette.lavender600,
    imageSource: require('./assets/ector-background.png'),
  }
]

export default data