import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';




const Carousel = (props) => {
    const albums = props.albums;



    console.log(albums);

    return (
        <>
        <section className="sliders">
                <article className="slider">
                    <div className="slider__content">
                        <h1>Construction du "Watt Lao Bouddhaviharn"</h1>
                        <p>17/11/2019</p>
                    </div>
                    <div className="slider__cover"></div>
                </article>
        </section>

        </>
    );
}

export default Carousel;