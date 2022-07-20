import i18n from "i18next";
import { initReactI18next, i18nextOptions } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
        "banner": {
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
        },
        "hobby": {
            "title": "My hobbies",
            "videogames": {
                "title": "Video Games",
                "introduction":"As I said earlier, I play video games frequently and they are part of my daily life. I used to play a lot on osu! and more recently the \"Modern\" Tetris. There are a lot of similarity in terms of method to get better on the game and also get a better mind when you play, because on these games, if you loose, espcially on Tetris, you can't blame someone but yourself. Indeed, whether it is you aren't able to beat your opponent or you're the who screwed your game.",
                "osu!":"osu! is a game where the goal is to click on rhythm on circle. I started to play in 2014, i met a lot of people throughout my osu!journey and made several mini-project with the osu!API provided by the osu!developer team. I also organized twice a tournament called \"osu! Random Tournament\" where the goal was explained in the project parts!",
                "tetris":"What is more refreshing than just putting blocks to destroy line? Being able to keep up the pace against a strong opponent. That's right, the modern tetris is a player vs player game. Although i've been playing it only since 2021, I learned a lot about keeping a good mind while playing and not loose to frustration and rage.",
            },
            "japan": {
                "title": "Japan",
                "introduction":"I discovered first Japan through the manga and anime stuff but quickly I wanted to know more about the culture, how it really looks like, and I'm amazed by the variety of leaves color for example, it can be red, pink with the sakura. I love the landscape, and i would like to visit Japan someday!",
            },
            "photography": {
                "title": "Photography",
                "introduction": "Not long ago, I discovered this hobby, when i was taking a picture of a landscape in my village. I told myself \"hey this could be a real hobby\". Although I'm not equipped with a real camera, I'm using my smartphone ones and it still takes beautiful picture. Although I'm not doing this hobby regularly, it still feels good to take good picture when I'm not at home.",

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
        },
        "hobby": {
            "title": "Mes passions",
            "videogames": {
                "title": "Les jeux vidéos",
                "introduction":"Comme dit précédemment, Je joue souvent aux jeux vidéos, et ils sont une partie courante dans ma vie quotidienne. J'ai beaucoup joué à osu! et plus récemment au  \"Modern\" Tetris. Les deux jeux ont des similarités que ce soit en terme de méthode pour devenir meilleur mais aussi prendre du recul quand on joue, puisque sur ces jeux, si tu perds, encore plus sur Tetris, on ne peut s'en prendre qu'à soi-même. En effet, soit l'adversaire est juste trop fort ou, la partie est perdue à cause de nos erreurs.",
                "osu":"Osu!  est un jeu où le but est de cliquer sur des cercles en suivant le rythme d'une musique. J'ai commencé à y jouer en 2014, j'ai pu rencontré beaucoup de personne durant mon \"voyage\" sur osu!. J'ai pu également faire des mini-projets en utilisant l'API de osu! fournie par l'équipe de développement d'osu!. J'ai pu aussi organisé deux itérations d'un tournoi appelé \"osu! Random Tournament\", dont le but a été expliqué dans la partie projets.",
                "tetris":"Qu'est-ce qui est plus satisfaisant que des détruire des lignes en posant des blocs ? Être capable de maintenir la cadence contre un adversaire fort. Vous l'aurez compris, le Tetris moderne est un jeu joueur contre joueur. Bien que  je n'y joue que depuis 2021, J'ai pu en apprendre à propos de comment garder la tête froide et de ne pas se laisser emporter la frustration et la rage.",
            },
            "japan": {
                "title": "Le Japon",
                "introduction":"J'ai d'abord découvert le Japon à travers les mangas et les animés cependant, j'ai rapidement voulu en savoir plus à propos de la culture, à quoi le pays ressemble vraiment, et je suis émerveillé, par exemple de la variété des couleurs des feuilles d'arbres, cela peut-être rouge/roux ou bien rose avec les biens connus sakura. j'aime beaucoup les pays, et j'aimerais visiter le Japon un jour !",
            },
            "photography": {
                "title": "La photographie",
                "introduction": "Il n'y a pas si longtemps, Je me suis découvert ce hobby alors que je prenais une photo d'un paysage dans mon village. Je me suis alors dit que ça pourrait être sympa d'en faire un hobby. Bien que je n'ai pas de vrai appareil photo, celui de mon téléphone me suffit amplement pour prendre de magnifiques clichés. Même si je ne pratique pas ce hobby régulièrement, ça ne m'empêche pas de me sentir satisfait après avoir pris une bonne photo.",

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