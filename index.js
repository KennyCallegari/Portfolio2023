// This is the first file that ReactNative will run when it starts up.
// If you use Expo (`yarn expo:start`), the entry point is ./App.js instead.
// Both do essentially the same thing.

import App from "./app/app.tsx"
import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"

function PortfolioExpo2023() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

AppRegistry.registerComponent("PortfolioExpo2023", () => PortfolioExpo2023)
export default App
