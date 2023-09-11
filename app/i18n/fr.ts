const en = {
  common: {
    ok: "OK!",
    cancel: "Annuler",
    back: "Retour",
  },
  onBoardingScreen: {
    firstScreen: "Bienvenue dans mon portfolio !",
    secondScreen: "Je suis Kenny Callegari et je suis développeur mobile",
    thirdScreen: "Choisissez la langue de l'application",
    fourthScreen: "Ok, tout est prêt",
    button: "C'est parti !"
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
}

export default en
export type Translations = typeof en
