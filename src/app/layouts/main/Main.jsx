import React, { useState } from 'react';

/*
Libraries
*/
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/*
Components
*/
import { Header } from '../../components/general';

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



    return (
        <>
            <Router>
                <Header lang={ language } /> 
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch>
                        <Redirect from="/home" to="/"/>
                        <Route exact path="/" render={() => <HomePage lang={language}/>}/>
                        <Route exact path="/album/:slug" render={() => <DetailPage lang={language}/>}/>
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
