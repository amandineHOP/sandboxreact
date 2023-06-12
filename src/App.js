import './App.css';

import {useTranslation, Trans} from 'react-i18next';
import {useEffect, useState} from 'react';
import {Header} from './Header';
import axios from 'axios';
import {Footer} from "./Footer";

function App() {

    const {i18n} = useTranslation();

    const [aujourdhui, setAujourdhui] = useState('');
    const [hier, setHier] = useState('');
    const [data, setData] = useState([]);

    //definition de la date d'aujourd'hui et d'hier
    useEffect(() => {
        const currentDate = new Date(); // Obtient la date d'aujourd'hui
        const previousDate = new Date();
        previousDate.setDate(currentDate.getDate() - 1); // Obtient la date d'hier

        //formatage de la date pour l'api de la Nasa
        setAujourdhui(currentDate.toISOString().split('T')[0]);
        setHier(previousDate.toISOString().split('T')[0]);

    }, []);

    //appel de l'api de la Nasa avec les dates d'aujourd'hui et d'hier en paramètre
    const appelAPI = () => {
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${encodeURIComponent(hier)}&end_date=${encodeURIComponent(aujourdhui)}&api_key=DEMO_KEY`;

        axios
            .get(url)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <div className="App">
            <Header className="App-header"/>
                <p style={{fontSize: '30px', color: 'blue'}}>{aujourdhui}</p>
                <p>
                    <Trans i18nKey="description.part2">
                        En cliquant sur le bouton ci-dessous, vous verrez dans la console de cette fenetre l'ensemble
                        des asteroides qui sont proches de la Terre aujourd'hui. Pour l 'instant c'est pas facile à
                        déchiffrer mais on va tenter de faire un joli tableau tout beau tout propre dans la fenetre du
                        navigateur. Un peu de patience ;-)
                    </Trans>
                </p>
                <div>
                    <button type="submit" onClick={appelAPI} style={{fontSize: '20px', padding: '10px 20px'}}>
                        Asteroids
                    </button>
                </div>
                 <p>
                    <Trans i18nKey="description.part3">
                        Pour l 'instant c'est pas facile à déchiffrer mais on va tenter de faire un joli tableau tout
                        beau tout propre dans la fenetre du
                        navigateur. Un peu de patience ;-)
                    </Trans>
                </p>
            <Footer/>
        </div>
    );
}

export default App;
