import { AnimationObject } from 'lottie-react-native';
import { colors } from "app/theme";
import { translate } from 'app/i18n';

export interface IOnBoardingData {
  id: number,
  animation: AnimationObject,
  text: string,
  textColor: string,
  backgroundColor: string,
}

export const footerColors = [
  colors.palette.secondary400,
  colors.palette.accent700,
  colors.palette.blue700,
  colors.palette.blue900
];

const data: IOnBoardingData[] = [
  {
    id: 1,
    animation: require('../../../assets/animations/wave-emoji.json'),
    text: translate('onBoardingScreen.firstScreen'),
    textColor: colors.palette.secondary400,
    backgroundColor: colors.palette.lavender600,
  },
  {
    id: 2,
    animation: require('../../../assets/animations/developper.json'),
    text: translate('onBoardingScreen.secondScreen'),
    textColor: colors.palette.accent700,
    backgroundColor: colors.palette.neutral100,
  },
  {
    id: 3,
    animation: require('../../../assets/animations/world.json'),
    text: translate('onBoardingScreen.thirdScreen'),
    textColor: colors.palette.blue700,
    backgroundColor: colors.palette.blue300,
  },
  {
    id: 4,
    animation: require('../../../assets/animations/rocketship.json'),
    text: translate('onBoardingScreen.fourthScreen'),
    textColor: colors.palette.blue900,
    backgroundColor: colors.palette.lavender200,
  }
]

export default data