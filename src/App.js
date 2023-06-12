import './App.css';

import {useTranslation, Trans} from 'react-i18next';
import {useEffect, useState} from 'react';
import {Header} from './Header';
import {Footer} from "./Footer";
import axios from 'axios';


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
    const appelApi = async () => {
        try {
            const response = await axios.get(
                `http://api.nasa.gov/neo/rest/v1/feed?start_date=${hier}&end_date=${aujourdhui}&detailed=false&api_key=DEMO_KEY`
            );
            const responseData = response.data;
            console.log(responseData);

            const asteroidData = Array.from(responseData.near_earth_objects[aujourdhui]).map(item => ({
                name: item.name,
                is_potentially_hazardous_asteroid: item.is_potentially_hazardous_asteroid,
                estimated_diameter: item.estimated_diameter.meters.estimated_diameter_max,
            }));
            setData(asteroidData);
            console.log(asteroidData);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="App">
            <Header/>
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
                <button type="submit" onClick={appelApi} style={{fontSize: '20px', padding: '10px 20px', marginBottom:'30px'}}>
                    <Trans i18nKey="description.part8">
                        Afficher les asteroides
                    </Trans>
                </button>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>
                            <Trans i18nKey="description.part5">
                            Nom
                            </Trans>
                        </th>
                        <th>
                            <Trans i18nKey="description.part6">
                                Potentiellement dangereuse
                            </Trans>
                        </th>
                        <th>
                            <Trans i18nKey="description.part7">
                                Diamètre maximal estimé
                            </Trans>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.is_potentially_hazardous_asteroid.toString()}</td>
                            <td>{item.estimated_diameter}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>

    );
}

export default App;
