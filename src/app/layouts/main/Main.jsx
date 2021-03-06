import React from 'react';

/*
Libraries
*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/*
Components
*/
import { Header } from '../../components/general';

/*
Pages
*/
import HomePage from '../../pages/home-page';
import MediaPage from '../../pages/media-page';
import DetailPage from '../../pages/detail-page';
import AboutPage from '../../pages/about-page';
import ContactPage from '../../pages/contact-page';
import NotFoundPage from '../../pages/not-found-page';

const Main = ({match, location}) => {

    return (
        <>
            <Router>
                <Header match={ match } location={ location }/> 
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch>
                        <Route exact path={`${match.url}/`} render={() => <HomePage match={ match }/>}/>
                        <Route exact path={`${match.url}/album/:slug`} render={() => <DetailPage match={ match }/>}/>
                        <Route exact path={`${match.url}/media`} render={() => <MediaPage match={ match }/>}/>
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
