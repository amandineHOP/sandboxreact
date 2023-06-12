import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

const lngs = {
    en: {nativeName: 'English'},
    fr: {nativeName: 'Francais'}
};
export const Header = () => {

    const {i18n} = useTranslation();
    return (
        <header>
            <h1>
                <Trans i18nKey="description.part1">
                    Ma première appli React pour le Chantier IA signée Amandine, ChatGPT et Copilot!
                </Trans>
            </h1>
            <div>
                <img src={"https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"}
                      alt="Nasa"/>
            </div>

            {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{
                    fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                    fontSize: '20px',
                    padding: '10px 20px',
                    marginTop: '20px'
                }}
                        type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
            ))}
        </header>
    );
};
