const en = {
  // ------ COMMON ------
  common: {
    ok: "OK!",
    cancel: "Annuler",
    back: "Retour",
    nothing: "",
    testShort: 'Bonjour !',
    testLong: 'Ceci est un texte un peu long pour les tests.',
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
  // ------ TOAST ------
  toast: {
    copiedTitle: 'Copié !',
    copiedDescription: 'Coller le où vous le voulez.',
    networkErrorTitle: 'Oh non !',
    networkErrorDescription: 'Il semblerait que vous n\'ayez pas de wifi.',
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
  // ------ CONTACT SCREEN ------
  contactScreen: {
    errorTitle: 'Oh non !',
    errorDescription: 'Je n\'ai pas pu ouvrir le service demandé. Contactez-moi au +33 7 67 18 19 66.',
    errorWhatsapp: 'Etes-vous sûr d\'avoir installé Whatsapp ? Sinon, contactez-moi au +33 7 67 18 19 66.',
    button: 'C\'est parti !',
    title: 'Contactez moi via...',
    phone: 'Téléphone',
    mail: 'E-mail',
    github: 'Github',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
}

export default en
export type Translations = typeof en
