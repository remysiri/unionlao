import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const data = props.album;
    return (
        <>
        <section className="detail__wrapper">
            <article className="detail">
                <section className="detail__content">
                    <h1 className="detail__content-title">{ data.title }</h1>
                    <p className="detail__content-date"><Moment format="DD/MM/YYYY">{ data.postDate && data.postDate.date }</Moment></p>
                    <p className="detail__content-body">{ data.description }</p>
                </section>
                <section className="detail__images">
                    {!data.images ? undefined : data.images.map((image) => {
                        return <img src={image} alt={image} key={image} />
                    })}
                </section>
            </article>
        </section>
        <section className="backButton">
            <Link to="/">
                <div className="circle">
                    <p className="cross">X</p>
                </div>
            </Link>
        </section>
        </>
    );
}

export default Detail;