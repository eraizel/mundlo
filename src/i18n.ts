import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      placeholder: "País ou Território",
      guess: "Adivinhe",
      share: "Compartilhe",
      showOnGoogleMaps: "👀 veja no Google maps",
      welldone: "Parabéns!",
      unknownCountry: "País desconhecido!",
      copy: "Copiado para áre de trabalho",
      showCountry: "🗺️ Mostrar Mapa!",
      cancelRotation: "🌀 Cancelar Rotação",
      settings: {
        title: "Configuração",
        distanceUnit: "Unidades de distância",
        theme: "Tema",
        difficultyModifiers: "Modificador de Dificuldade",
        startingNextDay: "Início do dia!",
        noImageMode: "Esconder a imagem do País",
        rotationMode: "Rotacionar a imagem do País",
      },
      stats: {
        title: "Statísticas",
        played: "Jogados",
        win: "Vit'rias %",
        currentStreak: "Número de Vitórias",
        maxStreak: "Maior número de vitórias consecutivas",
        averageBestDistance: "Melhor média de distâncias",
        guessDistribution: "Distribuição das tentativas:",
      },
      install: {
        title: "Mundlo",
        descritpionTitle: "Instalar app:",
        description: "Adicionar o Mundlo aos apps",
        instructionTitle: "Instruções:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancelar",
        instructionActionInstall: "Instalar",
        instructionFirefoxAction1: "- abrir opções do navegador ",
        instructionFirefoxAction2: "- adicinar a tela principal",
        instructionFirefoxNewAction1: "- abrir opções do navegador ",
        instructionFirefoxNewAction2: '- selecione "Instalar"',
        instructionIdeviceAction1: "- no Safari, abra menu Compartilhar",
        instructionIdeviceAction2: '- selecione "Adicionar a tela principal"',
        instructionOperaAction1: "- precione o botão menu ",
        instructionOperaAction2: "- adicionar à tela principal",
        instructionNotSupported: "Navegador não suportado.",
      },
      buyMeACoffee: "Me compre um ☕!",
    },
  },
  fr: {
    translation: {
      placeholder: "Pays, territoires...",
      guess: "Deviner",
      share: "Partager",
      showOnGoogleMaps: "👀 sur Google Maps",
      welldone: "Bien joué !",
      unknownCountry: "Pays inconnu !",
      copy: "Résultat copié !",
      showCountry: "🗺️ Afficher la carte !",
      cancelRotation: "🌀 Annule la rotation",
      settings: {
        title: "Paramètres",
        distanceUnit: "Unité de distance",
        theme: "Thème",
        difficultyModifiers: "Modificateurs de difficulté",
        startingNextDay: "A partir du lendemain !",
        noImageMode: "Cache l'image du pays pour plus de challenge.",
        rotationMode: "Tourne l'image du pays de manière aléatoire.",
      },
      stats: {
        title: "Statistiques",
        played: "Parties",
        win: "Victoires %",
        currentStreak: "Série Actuelle",
        maxStreak: "Série Max",
        averageBestDistance: "Moyenne Meilleures Distances",
        guessDistribution: "Répartitions des victoires:",
      },
      install: {
        title: "Worldle",
        descritpionTitle: "Installer l'app:",
        description:
          "Ajouter Worldle sur l'écran d'accueil pour le retrouver plus facilement !",
        instructionTitle: "Instructions :",
        instructionActionOk: "OK",
        instructionActionCancel: "Annuler",
        instructionActionInstall: "Installer",
        instructionFirefoxAction1: "- ouvrir les options du navigateur ",
        instructionFirefoxAction2: "- ajouter à votre écran d'accueil",
        instructionFirefoxNewAction1: "- ouvrir les options du navigateur ",
        instructionFirefoxNewAction2: '- sélectionner "Installer"',
        instructionIdeviceAction1: "- sur Safari, ouvrir le menu de partage ",
        instructionIdeviceAction2: "- sélectionner \"Sur l'écran d'accueil\"",
        instructionOperaAction1: "- appuyer sur le bouton menu ",
        instructionOperaAction2: "- ajouter à l'écran d'accueil",
        instructionNotSupported: "Impossible sur ce navigateur.",
      },
      buyMeACoffee: "Offrez moi un ☕ !",
    },
  },
  es: {
    translation: {
      placeholder: "País, Territorios...",
      guess: "Adivinar",
      share: "Compartir",
      showOnGoogleMaps: "👀 en Google Maps",
      welldone: "Bien hecho !",
      unknownCountry: "País desconocido !",
      copy: "Resultado copiado !",
      showCountry: "🗺️ mostrar mapa !",
      cancelRotation: "🌀 Anular la rotacíon",
      settings: {
        title: "Parámetros",
        distanceUnit: "Unidad de distancia",
        theme: "Tema",
        difficultyModifiers: "Modificador de dificultad",
        startingNextDay: "A partir de mañana!",
        noImageMode: "Oculte la imagen del país para un mayor desafío.",
        rotationMode: "Gira la imagen del país aleatoriamente.",
      },
      stats: {
        title: "Estadísticas",
        played: "Jugadas",
        win: "Ganadas %",
        currentStreak: "Serie Actual",
        maxStreak: "Serie Max",
        averageBestDistance: "Mejor distancia media",
        guessDistribution: "Distribución de aciertos:",
      },
      buyMeACoffee: "Ofrézcame un ☕ !",
    },
  },
  eu: {
    translation: {
      placeholder: "Estatua, herrialdeak...",
      guess: "Asmatu",
      share: "Elkarbanatu",
      showOnGoogleMaps: "👀 Google Maps-en",
      welldone: "Ongi egina !",
      unknownCountry: "Estatu ezezaguna !",
      copy: "Emaitzak arbelean kopiatuta !",
      showCountry: "🗺️ Erakutsi mapan !",
      cancelRotation: "🌀 Ezeztatu errotazioa",
      settings: {
        title: "Aukerak",
        distanceUnit: "Distantzia unitateak",
        theme: "Gaia",
        difficultyModifiers: "Zailtasun aldagaiak",
        startingNextDay: "Aldaketak bihartik aurrera ikusgai!",
        noImageMode: "Ezkutatu herriaren irudia zailagoa egiteko.",
        rotationMode: "Errotatu ausaz herrialdearen irudia.",
      },
      stats: {
        title: "Estatistikak",
        played: "Jokatuta",
        win: "Irabaziak %",
        currentStreak: "Uneko seriea",
        maxStreak: "Serie Max",
        averageBestDistance: "Batazbesteko distantzia onenea",
        guessDistribution: "Asmatze banaketa:",
      },
      buyMeACoffee: "☕ bat eskaini iezaidazu !",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;
