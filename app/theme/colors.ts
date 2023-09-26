// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: '#2D2D2D',
  neutral900: "#000000",

  // GREEN
  primary200: "#D1F299",
  primary300: "#B7D58A",
  primary400: "#9DB87B",
  primary500: "#87B36A",
  primary600: "#5F8E62",
  primary700: "#446954",
  primary800: "#34453F",

  // PINK
  secondary200: "#ffeaea",
  secondary300: "#ffd6d6",
  secondary400: '#F6CDDA', // lottie
  secondary500: "#F4C2D2",
  secondary600: "#E28DA8",
  secondary800: "#8A294B",

  // GOLDEN
  accent100: "#FFF0CC",
  accent200: "#FFDC89",
  accent400: "#FFCE5C",
  accent500: "#FFC745",
  accent600: '#ECB86F',
  accent700: '#E7A74B', // lottie
  accent800: '#CF9526',
  accent900: '#B17C19',

  blue200:'#effdff',
  blue300: '#dffaff',
  blue400: '#ADD8E6',
  blue500: '#99BDD9',
  blue600: '#227195',
  blue700: '#227195',
  blue800: '#008199',
  blue900: '#063843',

  lavender200: '#E6E6FA',
  lavender300: '#CEC7E0',
  lavender400: '#B1ADD8',
  lavender500: '#B8A8C4',
  lavender600: '#A48AA8',
  lavender700: '#726F9A',
  lavender800: '#615F87',
  lavender900: '#4E4C6C',

  angry100: "#F1CBD2",
  angry500: "#CA4159",
  angry800: "#7A2741",

  success500: "#03A65A",
  success800: "#005E38",

  warning500: "#EF8D32",
  warning800: "#CC561E",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  tarotBlue: "#101c37",
  tarotYellow: "#dcb354",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
}
