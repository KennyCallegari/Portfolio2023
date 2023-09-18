/* eslint-disable max-len */
import { Dimensions, Platform } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

export const types = ['upset', 'sad', 'neutral', 'smile', 'excited']

export const INITIAL_PATH = "M38.02 58.05L99.77 40.83L102.99 52.35L41.23 69.57L38.02 58.05Z"
export const PATHS = {
  "upset": "M141.5 132.55C140.92 75.87 120.92 48.22 81.5 49.63C42.09 51.03 22.09 78.67 21.5 132.55L141.5 132.55Z",
  "sad": "M122.32 87.65C121.94 68.08 108.83 58.53 83 59.02C57.17 59.5 44.06 69.04 43.68 87.65L122.32 87.65Z",
  "neutral": "M38.02 58.05L99.77 40.83L102.99 52.35L41.23 69.57L38.02 58.05Z",
  "smile": "M122.32 64.68C121.94 84.25 108.83 93.79 83 93.31C57.17 92.82 44.06 83.28 43.68 64.68L122.32 64.68Z",
  "excited": "M142.99 49.74C142.4 106.42 122.4 134.06 82.99 132.66C43.57 131.26 23.57 103.62 22.99 49.74L142.99 49.74Z",
  "left-eye": "M30.43 16.78C30.43 24.39 24.29 30.57 16.72 30.57C9.15 30.57 3 24.39 3 16.78C3 9.18 9.15 3 16.72 3C24.29 3 30.43 9.18 30.43 16.78Z",
  "right-eye": "M162.99 16.79C162.99 24.4 156.84 30.57 149.27 30.57C141.7 30.57 135.56 24.4 135.56 16.79C135.56 9.18 141.7 3.01 149.27 3.01C156.84 3.01 162.99 9.18 162.99 16.79Z"
}

export const APP_STORE_LINK = `itms-apps://apps.apple.com/app/id${1619096568}?action=write-review`;
export const PLAY_STORE_LINK = `market://details?id=com.hozana.rosario`;
export const STORE_LINK = Platform.select({
  ios: APP_STORE_LINK,
  android: PLAY_STORE_LINK,
});