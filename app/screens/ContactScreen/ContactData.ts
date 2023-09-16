import { Dimensions } from "react-native";

export interface IData {
  icon: 'call-out' | 'envelope' | 'social-github' | 'social-linkedin' | 'whatsapp',
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
  {
    icon: 'whatsapp',
    name: 'whatsapp',
  },
];

export const ICON_SIZE = 42
export const ITEM_HEIGHT = ICON_SIZE * 2
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen")
