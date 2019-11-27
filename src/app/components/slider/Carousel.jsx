import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
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

const variants = {
    enter: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };


const Carousel = (props) => {
    const albums = props.albums;
    const match = props.match;
    const [[page, direction], setPage] = useState([0, 0]);
    const key = wrap(0, albums.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
	};

	const thumbnailImage = albums[key] && albums[key].images[0];

	const style = {
		backgroundImage: `url('${thumbnailImage}')`
  };



    return (
        <>
        <section className="sliders">
            <AnimatePresence initial={ false } custom={ direction }>
                <motion.div
                    className="slider__wrapper"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 200 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                  <motion.div initial="initial" animate="enter" exit="exit">
                    <motion.article className="slider" key={albums[key] && albums[key].id} variants={thumbnailVariants} style={style}>
                    <motion.div className="slider__content" variants={textVariants}>
                      <Link to={`${match.url}/album/${albums[key] && albums[key].slug}`}>
                        <h1>{ albums[key] && albums[key].title }</h1>
                        <Link className="button-text" to={`${match.url}/album/${albums[key] && albums[key].slug}`}>Visionner le album<span className="button-underline"></span></Link>
                      </Link>
                    </motion.div>
                    <div className="slider__cover"></div>
                    </motion.article>
                  </motion.div>    
                </motion.div>
        </AnimatePresence>


        </section>

        </>
    );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


export default Carousel;