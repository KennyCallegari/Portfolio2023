const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  onBoardingScreen: {
    firstScreen: "Welcome to my portfolio !",
    secondScreen: "I'm Kenny Callegari, a mobile app developer",
    thirdScreen: "Change the app's language",
    fourthScreen: "Ok, you're all setup",
    button: "Let's go !"
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
