import { colors, spacing } from 'app/theme';
import React from 'react';
import { View, ViewStyle, Dimensions } from 'react-native';
import RNModal, { ModalProps } from 'react-native-modal';

interface IModalProps extends Partial<ModalProps> {
  children: JSX.Element,
  style?: ViewStyle,
  contentContainerStyle?: ViewStyle,
  isLoading?: boolean,
  onBackdropPress?: () => void,
}

export function Modal({
  children,
  style,
  contentContainerStyle,
  isLoading,
  onBackdropPress,
  ...props
}: IModalProps) {
  const _onBackdropPress = isLoading ? undefined : onBackdropPress;
  const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen")

  return (
    <RNModal
      onBackdropPress={_onBackdropPress} 
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={[$noMargin, style]} 
      deviceWidth={SCREEN_WIDTH} 
      deviceHeight={SCREEN_HEIGHT} 
      {...props}
    >
      <View style={[$container, contentContainerStyle]}>
        {children}
      </View>
    </RNModal>
  );
};


const $container = {
  backgroundColor: colors.palette.neutral100,
  borderRadius: 16,
  elevation: 8,
  padding: spacing.xl,
  shadowColor: colors.palette.neutral900,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 2,
}

const $noMargin = {
  margin: 0,
}

export default Modal;
