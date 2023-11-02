import React, { FC, Suspense } from "react"

import { IPhone } from "./IPhone";

interface ILabScreenCanvasProps {
  iphoneRef: any
}

export const LabScreenCanvas: FC<ILabScreenCanvasProps> = function LabScreenCanvas({ iphoneRef }) {
  return (
    <group>
      <ambientLight />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[0, -1, 0]} />
      <directionalLight position={[1, 0, 0]} />
      <directionalLight position={[-1, 0, 0]} />
      <directionalLight position={[0, 0, 1]} />
      <directionalLight position={[0, 0, -1]} />

      <Suspense fallback={null}>
        <IPhone ref={iphoneRef} position={[0, 0, 0]} scale={0.03} rotation={[0, 0, 0]} />
      </Suspense>
    </group>
  )
}
