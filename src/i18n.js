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
                        part3: 'For now, it\'s quite hard to decrypt but we are trying to make better as soon as possible. Be patient ;-)',
                        part4: 'Discover the NASA website'
                    }
                }
            },
            fr: {
                translation: {
                    description: {
                        part1: 'Bienvenue dans ma premiere appli React pour le Chantier IA, signée Amandine, ChatGPT et Copilot!',
                        part2: 'En cliquant sur le bouton ci-dessous, vous verrez dans la console de cette fenetre l\'ensemble des\n' +
                            '                             asteroides qui sont proches de la Terre aujourd\'hui.',
                        part3: 'Pour l \'instant c\'est pas facile à déchiffrer mais on va tenter de faire un joli tableau tout beau tout propre dans la fenetre du\n' +
                            '                             navigateur. Un peu de patience ;-)',
                        part4: 'Découvrir le site de la NASA'
                    }
                }
            }
        }
    });

export default i18n;
