import { TxKeyPath } from "app/i18n";
import { Dimensions } from "react-native";

export interface IData {
  icon: 'call-out' | 'envelope' | 'social-github' | 'social-linkedin' | 'whatsapp',
  name: string,
  tx: TxKeyPath,
}

export const data: IData[] = [
  {
    icon: 'call-out',
    name: 'phone',
    tx: 'contactScreen.phone',
  },
  {
    icon: 'envelope',
    name: 'mail',
    tx: 'contactScreen.mail',
  },
  {
    icon: 'social-github',
    name: 'github',
    tx: 'contactScreen.github',
  },
  {
    icon: 'social-linkedin',
    name: 'linkedin',
    tx: 'contactScreen.linkedin',
  },
  {
    icon: 'whatsapp',
    name: 'whatsapp',
    tx: 'contactScreen.whatsapp',
  },
];

export const ICON_SIZE = 42
export const ITEM_HEIGHT = ICON_SIZE * 2
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen")
