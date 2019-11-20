import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    let id = useParams();
    return (
        <p>detailpage</p>
    )
}

export default DetailPage;
