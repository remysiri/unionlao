import React, { useState, useEffect } from 'react';

import Carousel from '../../components/slider';

const HomePage = (props) => {
    const [albums, setAlbums] = useState({});
    const language = props.lang;

    async function fetchData() {
        const res = await fetch(`https://cms.unionlao.be/${language}/api/albums.json`);
        res
            .json()
            .then(res => setAlbums(res.data))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Carousel albums={ albums }/>
    )
}

export default HomePage;
