import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { Text } from './Text';
import { TxKeyPath } from 'app/i18n';

interface ICTABoxProps {
  borderColor: string
  backgroundColor: string
  tx: TxKeyPath
  textColor: string
}

/*
  A Call To Action box to hover a component with a text describing the action possible to do
  It's 2 components superimposed because I couldn't find a way to create a border aroung the triangle at the bottom
*/

export const CTABox = (props: ICTABoxProps) => {
  const {
    borderColor,
    backgroundColor,
    tx,
    textColor
  } = props

  const $outerContainer: ViewStyle =  {
    zIndex: 0,
    position: 'absolute',
    backgroundColor: borderColor,
    height: 44,
    left: -2,
    top: -2,
    borderRadius: 10,
    alignItems: 'center',
  }
  const $outerTriangle: ViewStyle =  {
    zIndex: 0,
    position: "absolute",
    borderBottomColor: borderColor,
    top: 42,

    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "180deg" }],
  }

  const $innerContainer: ViewStyle =  {
    zIndex: 1,
    position: 'relative',
    height: 40,
    borderRadius: 8,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  }
  const $innerTriangle: ViewStyle =  {
    zIndex: 1,
    position: "absolute",
    top: 40,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: backgroundColor,
    transform: [{ rotate: "180deg" }],
  }

  const $innerText: TextStyle = {
    textAlign: 'center',
    color: textColor,
    paddingHorizontal: 8,
  }

  const $outerText: TextStyle = {
    textAlign: 'center',
    lineHeight: 0,
    color: textColor,
    paddingHorizontal: 10,
  }


  const OuterCTABox = () => {
    return (
      <View style={$outerContainer}>
        <Text weight="bold" style={$outerText} tx={tx} />
        <View style={$outerTriangle} />
      </View>
    );
  };

  const InnerCTABox = () => {
    return (
      <View style={$innerContainer}>
        <Text weight="bold" style={$innerText} tx={tx} />
        <View style={$innerTriangle} />
      </View>
    );
  };


  return (
    <View>
      <InnerCTABox />
      <OuterCTABox />
    </View>
  );
};
