/* eslint-disable max-len */
const fr = {
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
  // ------ RATE MY APP SCREEN ------
  rateMyAppScreen: {
    title: "Vous souhaitez évaluer mon app ?",
    button: 'Évaluer',
    errorTitle: 'Oh non !',
    errorDescription: 'Je n\'ai pas réussi à ouvrir le store.'
  },
  // ------ PROJECT NAVIGATOR ------
  // ------ PROJECT SCREEN ------
  projectScreen: {
    title: "Mes projets",
    rosarioDate: "Avril 2022 - Aujourd'hui",
    meditatioDate: "Février 2023 - Avril 2023",
    misterGoodCoffeeDate: "Septembre 2021 - Mai 2022",
    companiDate: "Septembre 2020 - Avril 2022",
    companiOutilsDate: "Septembre 2020 - Avril 2022",
    ectorDate: "Septembre 2019 - Août 2020",
  },
  // ------ PROJECT DETAILS SCREEN ------
  projectDetailsScreen: {
    firstTitleCard: "Le projet",
    secondTitleCard: "Mon rôle",
    thirdTitleCard: "Technologies",
    fourthTitleCard: "Contacts",
    fifthCardTitle: "Liens",
    rosarioProject: "Rosario est une application qui permet à un groupe de 5 personnes de prier le Rosaire Vivant.",
    rosarioProjectTwo: "Elle contient une messagerie de groupe, un lecteur audio pour prier le chapelet seul, une gestion des notifications ainsi qu'une large bibliothèque de svg.",
    rosarioMyRole: "Je suis l'unique développeur front de Rosario. Je m'occupe donc aussi bien du développement que de la gestion du projet.",
    rosarioMyRoleTwo: "Je développe les fonctionnalités avec un développeur back-end, je participe à la conception de la roadmap et je déploie l'application à chaque fin de sprint.",
    rosarioTechnologies: "React Native • Typescript • TanStack Query • Axios • Firebase • luxon • Reanimated • Track Player",
    rosarioContact: "Romain Delenda - Chef de projet\n\nromain@hozana.org",
    meditatioProject: "Meditatio est une application qui permet d'écouter des audios de méditations guidées.",
    meditatioProjectTwo: "Elle contient un lecteur audio avancé qui est au centre de l'expérience utilisateur.",
    meditatioMyRole: "J'ai travaillé à l'amélioration du lecteur audio, notamment pour lancer 2 pistes audios en même temps et sur l'amélioration des performances générales de l'application.",
    meditatioTechnologies: "React Native • Expo • Typescript • Track Player • TanStack Query • moment • Sentry • mmkv • Adjust",
    meditatioContact: "Romain Delenda - Chef de projet\n\nromain@hozana.org",
    misterGoodCoffeeProject: "Mister Good Coffee est une application qui permet de trouver des bons cafés autour de soi.",
    misterGoodCoffeeMyRole: "J'ai créé cette application en quelques heures pour partager mes cafés préférés à mes amis.",
    misterGoodCoffeeTechnologies: "Expo • Typescript • Google Maps API • Gesture Handler",
    companiProject: "Compani est une entreprise qui propose des formations pour les acteurs de l'aide et du soin, notamment les structures d’aide à domicile.",
    companiMyRole: "J'étais développeur full stack front-end, back-end et mobile dans une équipe de 6 développeurs.",
    companiMyRoleTwo: "J'étais aussi développeur lead pour l'application mobile Compani.",
    companiTechnologies: "Vue.js • Quasar • React Native • Redux • Node.js • MongoDB • Heroku • Postman",
    companiContact: "Sophie Moustard - CTO\n\nsophie@compani.fr",
    companiOutilsProject: "Compani Outils est une application mobile ERP pour les auxiliaires de vie.",
    companiOutilsProjectTwo: "Elle leur permet de gérer leur emploi du temps, leurs bénéficaires, leur paye, ...",
    companiOutilsMyRole: "J'étais lead développeur dans une équipe de 3 développeurs sur le projet.",
    companiOutilsTechnologies: "React Native • Expo • Barcode Scanner • Axios • Sinon • Typescript • Jest",
    companiOutilsContact: "Sophie Moustard - CTO\n\nsophie@compani.fr",
    ectorProject: "Ector est une start-up offrant un service de voituriers dans les aéroports et les gares.",
    ectorProjectTwo:  "Elle offre 3 services : une web-app, une application mobile pour les clients et une application mobile pour les voituriers.",
    ectorMyRole:  "J'étais développeur junior dans une équipe de 12 personnes (développeurs / product owner / designer / data analyst).",
    ectorTechnologies:  "React • Typescript • Redux • GraphQL • React-Native • PHP Symphony • Docker",
    ectorContact: "Victor Duprez - CTO\n\nvictor@ectorparking.com",
  },
}

export default fr
export type Translations = typeof fr
