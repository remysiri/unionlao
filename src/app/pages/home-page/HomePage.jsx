import React, { useEffect, useState } from 'react';

import Carousel from '../../components/slider';

const HomePage = () => {
    const [albums, setAlbums] = useState({});

    async function fetchData() {
        const res = await fetch('https://cms.unionlao.be/api/albums.json');
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
