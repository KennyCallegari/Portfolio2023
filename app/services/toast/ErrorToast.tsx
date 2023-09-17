import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TxKeyPath } from 'app/i18n';
import { colors, spacing } from 'app/theme';
import ToastIconContainer from 'assets/svg/ToastIconContainer';
import { Text } from 'app/components';
import LiquidShape from '../../../assets/svg/toast-fail-liquid-shape.svg'
import { FontAwesome5 } from '@expo/vector-icons';

export interface IErrorToastProps {
  title: TxKeyPath,
  description: TxKeyPath,
}

const ErrorToast = ({ title, description }: IErrorToastProps) => {
  const { bottom } = useSafeAreaInsets()

  const $container: ViewStyle = {
    zIndex: 100,
    width: '80%',
    borderRadius: 24,
    backgroundColor: colors.palette.angry500,
    flexDirection: 'row',
    marginBottom: bottom,
    paddingRight: spacing.lg,

    shadowColor: colors.palette.neutral900,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  }


  return (
    <View style={$container}>
      <View style={$iconContainer}>
        <ToastIconContainer width={60} height={60} fill={colors.palette.angry800}>
          <FontAwesome5 name="times" size={28} color={colors.palette.neutral100} />
        </ToastIconContainer>
      </View>
      <View style={$liquidContainer}>
        <View style={$liquid}>
          <LiquidShape width={64} height={80} fill={colors.palette.angry800} />
        </View>
      </View>
      <View style={$texts}>
        <Text size="xl" color='neutral100' tx={title} />
        {description && <Text color='neutral100' tx={description} />}
      </View>
    </View>
  );
};

const $liquidContainer: ViewStyle = {
  borderRadius: 24,
  height: '100%',
  width: 100,
  overflow: 'hidden'
}

const $liquid: ViewStyle = {
  bottom: -10,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
}

const $iconContainer: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 48,
}

const $texts: ViewStyle = {
  flex: 1,
  marginVertical: spacing.md,
}

export default ErrorToast;
