// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  Rubik_300Light as rubikLight,
  Rubik_400Regular as rubikRegular,
  Rubik_500Medium as rubikMedium,
  Rubik_600SemiBold as rubikSemiBold,
  Rubik_700Bold as rubikBold,
} from "@expo-google-fonts/rubik"
import {
  Macondo_400Regular as macondoRegular,
} from "@expo-google-fonts/macondo"

export const customFontsToLoad = {
  rubikLight,
  rubikRegular,
  rubikMedium,
  rubikSemiBold,
  rubikBold,
  macondoRegular,
}

const fonts = {
  rubik: {
    // Cross-platform Google font.
    light: "rubikLight",
    normal: "rubikRegular",
    medium: "rubikMedium",
    semiBold: "rubikSemiBold",
    bold: "rubikBold",
  },
  macondo: {
    // Cross-platform Google font.
    normal: "macondoRegular",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.rubik,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
