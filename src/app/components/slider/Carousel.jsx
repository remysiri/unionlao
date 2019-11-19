import React from 'react';
import Moment from 'react-moment';
import { motion, AnimatePresence } from 'framer-motion';





const Carousel = (props) => {
    const albums = props.albums;



    console.log(albums);

    return (
        <>
        <section className="sliders">
            { Object.keys(albums).map(key => (
                <article className="slider" key={ albums[key].id }>
                <div className="slider__content">
                    <h1>{ albums[key].title }</h1>
                    <p><Moment format="DD/MM/YYYY">{ albums[key].postDate.date }</Moment></p>
                </div>
                <div className="slider__cover"></div>
            </article>
            ))}
        </section>

        </>
    );
}

export default Carousel;