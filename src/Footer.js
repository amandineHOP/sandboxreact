import {Trans} from 'react-i18next';

export const Footer = () => {

    return (
        <footer>
            <a
                className="App-link"
                href="https://www.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Trans i18nKey="description.part4">
                    Découvrir le site de la NASA
                </Trans>
            </a>
        </footer>
    );
};
