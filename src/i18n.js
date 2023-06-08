import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
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
                        part1: 'My first appli with React for the Chantier IA , by Amandine, ChatGPT and Copilot! :-)'
                    }
                }
            },
            fr: {
                translation: {
                    description: {
                        part1: 'Ma premiere appli React pour le Chantier IA signée Amandine, ChatGPT et Copilot! :-)'
                    }
                }
            }
        }
    });

export default i18n;
