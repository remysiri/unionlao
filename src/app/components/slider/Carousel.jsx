import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition }
    }
};

const textVariants = {
  initial: { x: "-100%", opacity: 0 },
  enter: { x: "0%", opacity: 1, transition },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};


const Carousel = (props) => {
    const albums = props.albums;
    const match = props.match;

	const thumbnailImage = albums[0] && albums[0].images[0];

	const style = {
		backgroundImage: `url('${thumbnailImage}')`
  };



    return (
        <>
        <section className="sliders">
          <article className="slider" key={albums[0] && albums[0].id} style={style}>
            <div className="slider__content">
              <Link to={`${match.url}/album/${albums[0] && albums[0].slug}`}>
                <h1>{ albums[0] && albums[0].title }</h1>
                <Link className="button-text" to={`${match.url}/album/${albums[0] && albums[0].slug}`}>Visionner le album<span className="button-underline"></span></Link>
              </Link>
            </div>
          </article>
        </section>

        </>
    );
}


export default Carousel;