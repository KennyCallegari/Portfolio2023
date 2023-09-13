const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  onBoardingScreen: {
    firstScreen: "Welcome to my portfolio !",
    secondScreen: "I'm Kenny Callegari, a mobile app developer",
    thirdScreen: "You can choose the app's language here",
    fourthScreen: "Ok, you're all setup",
    button: "Let's go !",
    translationCTA: "PRESS HERE"
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle: "Please reset the app.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
}

export default en
export type Translations = typeof en
