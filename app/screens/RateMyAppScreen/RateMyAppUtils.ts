/*
  colorProgress goes from 0 to 1, and each .25 the color correspond to a type
  so this function return colorProgress value to reach for each type
*/
export const getColorValueByType = (type: string) => {
  switch (type) {
    case"upset":
      return 0
    case "sad":
      return 0.25
    case "neutral":
      return 0.5
    case "smile":
      return 0.75
    case "excited":
      return 1
    default:
      return 1
  }
}