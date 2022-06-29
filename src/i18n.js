import i18n from "i18next";
import { initReactI18next, i18nextOptions } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
        "welcome": {
            "welcome": "Welcome to the Jérémy Morel's portfolio!",
            "firstLine": "Here you will be able to discover my world which is today a large part of myself."
        },
        "aboutMe": {
            "title": "About Me",
            "description": "22 years old french developer, i'm passionate about IT stuff since I'm young mainly thanks to video game which sharp my mind about IT ending up myself being a developer today.",
            "descriptionHobby": "On a side note, I'm passionate as I said about video games, but also about Japan and its neverending culture and also about music",
            "test": "test"
        },
        "projects": {
            "title": "Projects",
            "ownTitle": "Personal Projects",
            "othersTitle": "Other Projects",
            "ownDescription": "Here are my personal project i worked on",
            "othersDescription": "You may find here every project I worked on which are not my personal project but other's one",
            "link": "Link",
            "holoArt": {
                "title": "Holo Art",
                "description": "It gets artwork based on every hashtag of each Hololive's VTuber from Twitter and display it on a website. Current work in progress project.",
                "githubLink": "No link here, the project will not be open-source"
            },
            "ort": {
                "title": "osu! Random Tournament",
                "description": "The osu! Random Tournament was a tournament organized on the rhythm game called osu! where the idea was to make players compete against other players with a randomly chosen team at the beginning of the tournament."
            },
            "ortWebsite": {
                "title": "osu! Random Tournament Website",
                "description": "The website was here to handle the tournament registering, and to have an overview on the registered players and team lists.",
                "githubLink": "https://github.com/JeremyMorel-dev/osu-random-tournament"
            },
            "ortBot": {
                "title": "osu!Joker Roll",
                "description": "The idea was to entertain a match with random joker using an IRC Client allowing us to create a multiplayer match on the osu! server.",
                "githubLink": "https://github.com/JeremyMorel-dev/osuJokerRoll"
            },
            "pippiTrack": {
                "title": "Pippi Track",
                "description": "A Discord Bot that allows you to track osu! things with useful commands.",
                "githubLink": "https://github.com/KeziahMoselle/pippitrack"
            }
        }
    }
  },
  fr: {
    translation: {
        "banner": {
            "welcome": "Bienvenue sur le portfolio de Jérémy Morel !",
            "firstLine": "Vous pourrrez, ici découvrir mon univers, qui est aujourd'hui une grande partie de moi."
        },
        "aboutMe": {
            "title": "À propos de moi",
            "description": "Développeur de 22 ans, j'ai depuis tout jeune été passionné par le numérique, notamment via les jeux vidéo qui ont éveillé ma curiosité concernant leur développement, ce qui a tracé mon parcours jusqu'à aujourd'hui pour devenir développeur",
            "descriptionHobby": "À côté de ça, je suis passionné donc, de jeux vidéo comme dit précédemment, mais également du Japon et de sa riche culture ainsi que la musique en générale."
        },
        "projects": {
            "title": "Projets",
            "ownTitle": "Projets personnels",
            "othersTitle": "Autres projets",
            "ownDescription": "Vous pouvez trouver ici les différents projets sur lesquels j'ai travaillé",
            "othersDescription": "Vous pourrez trouver ici les projets sur lesquels j'ai pu travaillé, et qui ne sont pas les miens à la base.",
            "link": "Lien",
            "holoArt": {
                "title": "Holo Art",
                "description": "Récupère des artworks basé sur chaque hashtag de tous les VTuber d'Hololive sur Twitter et les affiche sur un site web. Projet en cours de développement.",
                "githubLink": "Pas de lien GitHub pour ce projet, le dépôt ne sera pas publique."
            },
            "ort": {
                "title": "osu! Random Tournament",
                "description": "L'osu! Random Tournament était un tournoi organisé sur le jeu de rythme osu! où l'idée était faire s'affronter les joueurs par équipe avec une équipe aléatoire définit au début du tournoi."
            },
            "ortWebsite": {
                "title": "osu! Random Tournament Website",
                "description": "Le site web était là pour gérer les inscriptions au tournoi, ainsi que pour avoir une vue globale sur les listes de joueurs inscrits et des équipes",
                "githubLink": "https://github.com/JeremyMorel-dev/osu-random-tournament"
            },
            "ortBot": {
                "title": "osu!Joker Roll",
                "description": "L'idée était de pouvoir rajouter du divertissement à un match avec l'utilisation de joker aléatoire en utilisant un client IRC nous permettant de créer un match multijoueur sur le serveur de osu!.",
                "githubLink": "https://github.com/JeremyMorel-dev/osuJokerRoll"
            },
            "pippiTrack": {
                "title": "Pippi Track",
                "description": "Un Bot Discord qui permet de suivre des choses relatives à osu! avec d'autres commandes utiles.",
                "githubLink": "https://github.com/KeziahMoselle/pippitrack"
            }
        }
    }
  }
};

const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
  }

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: options,
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });
  export default i18n;