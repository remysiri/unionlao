import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../../components/detail';

const DetailPage = (props) => {
    const [data, setData] = useState({});
    let id = useParams();
    let slug = id.slug;
    const language = props.lang;

    async function fetchData() {
        const res = await fetch(`https://cms.unionlao.be/${language}/api/albums/${slug}.json`);
        res
            .json()
            .then(res => setData(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <Detail album={data}/>
    )
}

export default DetailPage;
