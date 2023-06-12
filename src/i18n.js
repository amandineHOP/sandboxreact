import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part1: 'Welcome in my first appli with React for the Chantier IA, by Amandine, ChatGPT and Copilot!\n',
                        part2: 'Clicking on the button, you will see in the console all the asteroids which are near the Earth today.',
                        part4: 'Discover the NASA website',
                        part5: 'Name',
                        part6: 'Potentially hazardous',
                        part7: 'Estimated maximal diameter',
                        part8: 'Display asteroids'
                    }
                }
            },
            fr: {
                translation: {
                    description: {
                        part1: 'Bienvenue dans ma premiere appli React pour le Chantier IA, signée Amandine, ChatGPT et Copilot!',
                        part2: 'En cliquant sur le bouton ci-dessous, vous verrez dans la console de cette fenetre l\'ensemble des\n' +
                            '                             asteroides qui sont proches de la Terre aujourd\'hui.',
                        part4: 'Découvrir le site de la NASA',
                        part5: 'Nom',
                        part6: 'Potentiellement dangereuse',
                        part7: 'Diamètre maximal estimé',
                        part8: 'Afficher les asteroides'
                    }
                }
            }
        }
    });

export default i18n;
