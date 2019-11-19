import React, { useEffect, useState } from 'react';

import Carousel from '../../components/slider';

const HomePage = (props) => {
    const albums = props.albums;
    return (
        <Carousel albums={ albums }/>
    )
}

export default HomePage;
