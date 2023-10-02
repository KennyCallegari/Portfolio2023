/* eslint-disable max-len */
const en = {
  // ------ COMMON ------
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    nothing: "",
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
    button: 'Contact me !',
    title: 'Contact me with...',
    phone: 'Phone',
    mail: 'Mail',
    github: 'Github',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
  // ------ RATE MY APP SCREEN ------
  rateMyAppScreen: {
    title: "You want to rate my app ?",
    button: 'Submit',
    errorTitle: 'Oh no !',
    errorDescription: 'I couldn\'t open the store for you.'
  },
  // ------ PROJECT NAVIGATOR ------
  // ------ PROJECT SCREEN ------
  projectScreen: {
    title: "My projects",
    rosarioDate: "April 2022 - Today",
    meditatioDate: "February 2023 - April 2023",
    misterGoodCoffeeDate: "September 2021 - May 2022",
    companiDate: "September 2020 - April 2022",
    companiOutilsDate: "September 2020 - April 2022",
    ectorDate: "September 2019 - August 2020",
  },
  // ------ PROJECT DETAILS SCREEN ------
  projectDetailsScreen: {
    firstTitleCard: "The project",
    secondTitleCard: "My role",
    thirdTitleCard: "Technologies",
    fourthTitleCard: "Contacts",
    fifthCardTitle: "Links",
    rosarioProject: "Rosario is an application that enables a group of 5 people to pray the Living Rosary.",
    rosarioProjectTwo: "It includes group messaging, an audio player for praying the rosary alone, notification management and an extensive svg library.",
    rosarioMyRole: "I'm Rosario's sole front-end developer. So I'm in charge of both development and project management.",
    rosarioMyRoleTwo: "I develop the functionalities with a back-end developer, participate in the design of the roadmap and deploy the application at the end of each sprint.",
    rosarioTechnologies: "React Native • Typescript • TanStack Query • Axios • Firebase • luxon • Reanimated • Track Player",
    rosarioContact: "Romain Delenda - Product Owner\n\nromain@hozana.org",
    meditatioProject: "Meditatio is an application for guided meditations with audios.",
    meditatioProjectTwo: "It features an advanced audio player at the heart of the user experience.",
    meditatioMyRole: "I worked on improving the audio player and on improving the application's overall performance.",
    meditatioTechnologies: "React Native • Expo • Typescript • Track Player • TanStack Query • moment • Sentry • mmkv • Adjust",
    meditatioContact: "Romain Delenda - Product Owner\n\nromain@hozana.org",
    misterGoodCoffeeProject: "Mister Good Coffee is an application that helps you find good coffee shops around you.",
    misterGoodCoffeeMyRole: "I created this application in just a few hours to share my favorite coffees with my friends.",
    misterGoodCoffeeTechnologies: "Expo • Typescript • Google Maps API • Gesture Handler",
    companiProject: "Compani is a project that offers training courses for people working in the care sector, in particular in homecare structures.",
    companiMyRole: "I was a full stack front-end, back-end and mobile developer in a team of 6 developers.",
    companiMyRoleTwo: "I was also lead developer for the Compani mobile application.",
    companiTechnologies: "Vue.js • Quasar • React Native • Redux • Node.js • MongoDB • Heroku • Postman",
    companiContact: "Sophie Moustard - CTO\n\nsophie@compani.fr",
    companiOutilsProject: "Compani Outils is a mobile ERP application for caregivers.",
    companiOutilsProjectTwo: "It enables them to manage their schedules, their beneficiaries, their pay, etc.",
    companiOutilsMyRole: "I was lead developer in a team of 3 developers on the project.",
    companiOutilsTechnologies: "React Native • Expo • Barcode Scanner • Axios • Sinon • Typescript • Jest",
    companiOutilsContact: "Sophie Moustard - CTO\n\nsophie@compani.fr",
    ectorProject: "Ector is a start-up offering valet parking in airports and railway stations.",
    ectorProjectTwo: "It offers 3 services: a web-app, a mobile application for customers and a mobile application for valets.",
    ectorMyRole: "I was a junior developer in a team of 12 people (developers / product owner / designer / data analyst).",
    ectorTechnologies:  "React • Typescript • Redux • GraphQL • React-Native • PHP Symphony • Docker",
    ectorContact: "Victor Duprez - CTO\n\nvictor@ectorparking.com",
  },
}

export default en
export type Translations = typeof en
