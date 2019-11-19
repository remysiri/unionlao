import React from 'react';
import Moment from 'react-moment';
import { motion, AnimatePresence } from 'framer-motion';


const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const sliderVariants = {
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

    return (
        <>
        <motion.section className="sliders" initial="initial" animate="enter" exit="exit" variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
            { Object.keys(albums).map(key => (
                <article className="slider" key={ albums[key].id }>
                <motion.div className="slider__content" variants={ sliderVariants }>
                    <h1>{ albums[key].title }</h1>
                    <p><Moment format="DD/MM/YYYY">{ albums[key].postDate.date }</Moment></p>
                </motion.div>
                <div className="slider__cover"></div>
                </article>
            ))}
        </motion.section>

        </>
    );
}

export default Carousel;