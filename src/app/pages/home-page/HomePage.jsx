import React, { useState, useEffect } from 'react';

import Carousel from '../../components/slider';
import { Footer } from '../../components/general';

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
            <Carousel albums={ albums } match={ match }/>
            <Footer />
        </>
    )
}

export default HomePage;
