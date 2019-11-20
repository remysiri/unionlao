import React from 'react';

const Detail = (props) => {
    const data = props.album;
    return (
        <>
        <section>
            <article>
                <section>
                    <h1>{ data.title }</h1>
                    <p>{ data.postDate && data.postDate.date }</p>
                    <p>{ data.description }</p>
                </section>
                <section>
                    {!data.images ? undefined : data.images.map((image) => {
                        return <img src={image} alt={image} key={image} />
                    })}
                </section>
            </article>
        </section>
        </>
    );
}

export default Detail;