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
            
        </>
    )
}

export default HomePage;
