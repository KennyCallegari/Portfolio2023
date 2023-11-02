import { observer } from "mobx-react-lite"
import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import { ViewStyle } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useAnimatedReaction, useSharedValue, withDecay } from "react-native-reanimated";
import { Canvas } from '@react-three/fiber/native';

import { MainTabScreenProps } from "app/navigators"
import { Screen } from "app/components"
import { colors } from "app/theme"

import { LabScreenCanvas } from "./LabScreenCanvas";
import { LabLoader } from "./LabLoader";
import { LabOnBoarding } from "./LabOnBoarding";

interface LabScreenProps extends MainTabScreenProps<"Contact"> {}

export const LabScreen: FC<LabScreenProps> = observer(function LabScreen() {
  const [isReady, setIsReady] = useState(false)
  const [hasBeenTouched, setHasBeenTouched] = useState(false)

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const offset = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(0.03)
  const scaleOffset = useSharedValue(0.03)

  const iphoneRef = useRef<any>();

  const onPinchGesture = Gesture.Pinch()
  // keep track of offset because scale reset to 1 on every new pinch
    .onBegin(() => {
      scaleOffset.value = scale.value;
    })
    // we scale based on the pinch, clamped between 0.01 and 0.045
    .onChange((event) => {
      const change = (event.scale - 1) * 0.03
      const newValue = scaleOffset.value + change

      scale.value = newValue < 0.01 ? 0.01 : newValue > 0.045 ? 0.045 : newValue
    })

  const onPanGesture = Gesture.Pan()
    // keep track of offset because translationX translationY reset on every new pan gesture
    .onBegin(() => {
      offset.value = { x: translateX.value, y: translateY.value };
    })
    .onChange(({ translationX, translationY }) => {
      translateX.value = translationX + offset.value.x
      translateY.value = translationY + offset.value.y
    })
    // when realised -> have some velocity for inertia
    .onFinalize(({ velocityX, velocityY }) => {
      translateX.value = withDecay({ velocity: velocityX * 2 })
      translateY.value = withDecay({ velocity: velocityY * 2 })
    });

  const onGestureEvent = Gesture.Simultaneous(onPinchGesture, onPanGesture)

  // translation on y axis must rotate 3D model on x axis (and vice-versa)
  const rotateX = useCallback((translationYValue: number) =>  {
    if (iphoneRef?.current) iphoneRef.current.rotation.x = translationYValue / 100
  }, []);

  const rotateY = useCallback((translationXValue: number) =>  {
    if (iphoneRef?.current) iphoneRef.current.rotation.y = translationXValue / 100
  }, []);

  const scale3D = useCallback((scaleValue: number) =>  {
    if (iphoneRef?.current) {
      iphoneRef.current.scale.x = scaleValue
      iphoneRef.current.scale.y = scaleValue
      iphoneRef.current.scale.z = scaleValue
    }
  }, []);
    
  useAnimatedReaction(
    () => translateY.value,
    (currentValue) =>  {
      runOnJS(rotateX)(currentValue);
    },
    [rotateX],
  );

  useAnimatedReaction(
    () => translateX.value,
    (currentValue) =>  {
      runOnJS(rotateY)(currentValue);
    },
    [rotateY],
  );

  useAnimatedReaction(
    () => scale.value,
    (currentValue) =>  {
      runOnJS(scale3D)(currentValue);
    },
    [scale3D],
  );

  useEffect(() => { setTimeout(() => setIsReady(true), 2000) }, [])

  return (
    <Screen preset="fixed" contentContainerStyle={$container}>
      {!isReady && <LabLoader />}
      {isReady && !hasBeenTouched && <LabOnBoarding setHasBeenTouched={setHasBeenTouched} />}
      <GestureDetector gesture={onGestureEvent}>
        <Canvas>
          <LabScreenCanvas iphoneRef={iphoneRef} />   
        </Canvas>
      </GestureDetector>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
}
