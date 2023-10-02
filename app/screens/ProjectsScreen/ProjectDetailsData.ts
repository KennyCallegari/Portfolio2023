/* eslint-disable max-len */
import { TxKeyPath } from "app/i18n";
import { Dimensions, ImageSourcePropType } from "react-native";

export interface IProjectDetailsData {
  id: number,
  title?: TxKeyPath,
  description?: TxKeyPath,
  image?: ImageSourcePropType,
  iosLink?: string,
  androidLink?: string,
  appName?: string,
}

export const { width, height } = Dimensions.get('screen')

export const aspectRatio = 2;
export const CARD_WIDTH = width * .62;
export const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
export const IMAGE_WIDTH = CARD_WIDTH - 38;
const sideOfScreen = (width + CARD_WIDTH + 75 ) / 2
export const SNAP_POINTS = [-sideOfScreen, 0, sideOfScreen];
