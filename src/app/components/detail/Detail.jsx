import React from 'react';
import Moment from 'react-moment';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const transition = { duration: .5, ease: [0.43, 0.13, 0.23, 0.96] };

const contentVariant = {
    enter: { y: "0%", opacity: 1, transition },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { duration: 1.5, ...transition }
    }
  };


const Detail = (props) => {
    const data = props.album;
    const match = props.match;
    return (
        <>
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.section className="detail__wrapper">
                    <article className="detail">
                        <motion.section className="detail__content" variants={contentVariant}>
                            <h1 className="detail__content-title">{ data.title }</h1>
                            <p className="detail__content-date"><Moment format="DD/MM/YYYY">{ data.postDate && data.postDate.date }</Moment></p>
                            <p className="detail__content-body">{ data.description }</p>
                        </motion.section>
                        <motion.section className="detail__images">
                            {!data.images ? undefined : data.images.map((image) => {
                                return <img src={image} alt={image} key={image} />
                            })}
                        </motion.section>
                    </article>
                </motion.section>
                <section className="backButton">
                    <Link to={`${match.url}`}>
                        <div className="circle">
                            <p className="cross">X</p>
                        </div>
                    </Link>
                </section>
            </motion.div>
        </>
    );
}

export default Detail;