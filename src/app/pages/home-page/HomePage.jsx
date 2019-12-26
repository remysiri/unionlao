import React, { useState, useEffect } from 'react';

import Carousel from '../../components/slider';

const HomePage = (props) => {
    const [albums, setAlbums] = useState({});
    const match = props.match;

    async function fetchData() {
        const res = await fetch(`https://cms.unionlao.be/${match.params.locale}/api/albums.json`);
        res
            .json()
            .then(res => setAlbums(res.data))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className="homepage">
                <section className="row">
                    <div className="section-title"><h2>Découvrez la culture et les traditions Laotiennes.</h2></div>
                    <div className="section-content"><p>L'union des Lao en Belgique (ULB) organise régulièrement des évènements afin de présenter leurs traditions et culture au publique.</p></div>
                </section>

                <section className="row">
                    <div className="section-title"><h2>Toutes les origines, ethnies et religions ainsi que les sympathisants</h2></div>
                    <div className="section-content"><p>Maintenir une relation étroite entre les adhérents et rassemblement de la communauté Lao en Belgique de toutes les origines, ethnies et religions ainsi que les sympathisants.</p></div>
                </section>

                <section className="row">
                    <div className="section-title"><h2>L'aide et l'assistance en faveur des populations Lao les plus démunies.</h2></div>
                    <div className="section-content"><p>Une partie de l'argent récoltés en évènements et divers sert comme donation au peuple les plus démunies au Laos.</p></div>
                </section>
            </section>
        </>
    )
}

export default HomePage;
