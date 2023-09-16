import { Dimensions } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons"

export interface IData {
  icon: keyof typeof SimpleLineIcons.glyphMap,
  name: string,
}

export const data: IData[] = [
  {
    icon: 'call-out',
    name: 'phone',
  },
  {
    icon: 'envelope',
    name: 'mail',
  },
  {
    icon: 'social-github',
    name: 'github',
  },
  {
    icon: 'social-linkedin',
    name: 'linkedin',
  },
];

export const ICON_SIZE = 42
export const ITEM_HEIGHT = ICON_SIZE * 2
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window")
