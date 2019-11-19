import React, { useState, useEffect } from 'react';

/*
Libraries
*/
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/*
Components
*/
import Header from '../../components/general';

/*
Pages
*/
import HomePage from '../../pages/home-page';
import DetailPage from '../../pages/detail-page';
import AboutPage from '../../pages/about-page';
import ContactPage from '../../pages/contact-page';
import NotFoundPage from '../../pages/not-found-page';

const Main = () => {
    const [language, setLanguage] = useState('fr');
    const [albums, setAlbums] = useState({});

    async function fetchData() {
        const res = await fetch(`https://cms.unionlao.be/${language}/api/albums.json`);
        res
            .json()
            .then(res => setAlbums(res.data))
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <Header lang={ language } />
            <Router>
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Redirect from="/home" to="/"/>
                        <Route exact path="/" render={() => <HomePage albums={albums}/>}/>
                        <Route path="/gallery/:slug" component={ DetailPage }/>
                        <Route path="/about" component={ AboutPage }/>
                        <Route path="/contact" component={ ContactPage }/>
                        <Route path="*" component={ NotFoundPage }/>
                    </Switch>
                </AnimatePresence>
            </Router>
        </>
    )
}

export default Main;
