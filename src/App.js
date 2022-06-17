import React from 'react'
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PageNotFound from './pages/404/PageNotFound'
import Destinations from './pages/Destinations/Destinations'
import Tours from './pages/Tours/Tours'
import Home from './pages/Home/Home'
import Experiences from './pages/Experiences/Experiences';
import Itinerary from './components/Itinerary/Itinerary';
import './style/GlobalStyle.scss'
import Plan from './pages/Plan/Plan';

const App = () => {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.key}>
                    <Route exact path='/'><Home /></Route>
                    <Route path='/plan'><Plan /></Route>
                    <Route path='/destinos'><Destinations /></Route>
                    <Route path='/:agency/:slug'><Itinerary /></Route>
                    <Route path='/tours'><Tours /></Route>
                    <Route path='/experiences'><Experiences /></Route>
                    <Route path='*'><PageNotFound /></Route>
                </Switch>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default App