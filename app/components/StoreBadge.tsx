import I18n from 'i18n-js';
import React from 'react';
import { Linking, Pressable, Image, ViewStyle } from 'react-native';
import { SvgFromUri } from 'react-native-svg';

interface IStoreBadgeProps {
  type: "ios" | "android"
  href: string
  style?: ViewStyle
}

const HEIGHT = 40;

export const StoreBadge = (props: IStoreBadgeProps) => {
  const {
    type,
    href,
    style,
  } = props
  
  const locale = I18n.currentLocale()

  if (type === "ios") {
    const iosLocale = locale === 'fr' ? 'fr-fr' : 'en-us'

    return (
      <Pressable onPress={() => Linking.openURL(href)} style={style}>
        <SvgFromUri
          uri={
            `https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/${iosLocale}.svg`
          } 
          height={HEIGHT}
          width={120}
        />
      </Pressable>
    )
  }

  const androidLocale = locale.slice(0, 2)

  return (
    <Pressable onPress={() => Linking.openURL(href)} style={style}>
      <Image
        source={{
          uri: `https://play.google.com/intl/en-US/badges/static/images/badges/${androidLocale}_badge_web_generic.png`
        }}
        height={HEIGHT}
        width={androidLocale === 'en' ? 120 * 1.15 : 120} />
    </Pressable>
  );
};
