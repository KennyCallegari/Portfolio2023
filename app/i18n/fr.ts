const en = {
  // ------ COMMON ------
  common: {
    ok: "OK!",
    cancel: "Annuler",
    back: "Retour",
  },
  errorScreen: {
    title: "Quelque chose ne va pas !",
    friendlySubtitle: "Il va falloir recharger l'application.",
    reset: "RELANCER L'APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "Il n'y a rien ici",
      content: "Aucune donnée trouvée. Veuillez relancer l'applciation.",
      button: "On recommence",
    },
  },
  // ------ ONBOARDING ------
  onBoardingScreen: {
    firstScreen: "Bienvenue dans mon portfolio !",
    secondScreen: "Je suis Kenny Callegari et je suis développeur mobile",
    thirdScreen: "Vous pouvez choisir la langue de l'app ici",
    fourthScreen: "Ok, tout est prêt",
    button: "C'est parti !",
    translationCTA: "APPUYER ICI"
  },
  // ------ MAIN NAVIGATOR ------
  mainNavigator: {
    projectsTab: 'Projets'
  }
}

export default en
export type Translations = typeof en
