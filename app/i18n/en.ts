const en = {
  // ------ COMMON ------
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    testShort: 'Hello !',
    testLong: 'This is a bit of a long text for testing.',
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
  // ------ TOAST ------
  toast: {
    copiedTitle: 'Copied !',
    copiedDescription: 'Paste it wherever you want.',
    networkErrorTitle: 'Oh no !',
    networkErrorDescription: 'It seems your wifi is off.',
  },
  // ------ ONBOARDING ------
  onBoardingScreen: {
    firstScreen: "Welcome to my portfolio !",
    secondScreen: "I'm Kenny Callegari, a mobile app developer",
    thirdScreen: "You can choose the app's language here",
    fourthScreen: "Ok, you're all setup",
    button: "Let's go !",
    translationCTA: "PRESS HERE"
  },
  // ------ MAIN NAVIGATOR ------
  // ------ CONTACT SCREEN ------
  contactScreen: {
    errorTitle: 'Oh no !',
    errorDescription: 'I was unable to open the requested service. Contact me at +33 7 67 18 19 66.',
    errorWhatsapp: 'Are you sure you have WhatsApp installed ? Otherwise, contact me at +33 7 67 18 19 66.',
  },
}

export default en
export type Translations = typeof en
