import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const MediaPage = (props) => {
    const [data, setData] = useState({});
    let id = useParams();
    let slug = id.slug;
    const match = props.match;

    async function fetchData() {
        const res = await fetch(`https://cms.unionlao.be/${match.params.locale}/api/albums.json`);
        res
            .json()
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
        <section className="container__media">
        { Object.keys(data).map((key) => {
            return <div className="row media-row" key={data[key].id}>
                <div className="media-image"></div>
                <div className="media-content">
                    <h2>{data[key].title}</h2>
                    <p>{data[key].description}</p>
                    <a href="#">Visionner le album</a>
                </div>
            </div>
        })}
        </section>
        </>
    )
}

export default MediaPage;
