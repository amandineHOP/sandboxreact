import './App.css';

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' }
};
function App() {

    const { i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
          <div>
              {Object.keys(lngs).map((lng) => (
                  <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                      {lngs[lng].nativeName}
                  </button>
              ))}
          </div>
        <p>
                <Trans i18nKey="description.part1">
             Ma premiere appli React pour le Chantier IA signée Amandine, ChatGPT et Copilot! :-)
                </Trans>
        </p>
        <a
          className="App-link"
          href="https://www.groupeonepoint.com/fr"
          target="_blank"
          rel="noopener noreferrer"
        >
         Découvrir Onepoint
        </a>
      </header>
    </div>
  );
}

export default App;
