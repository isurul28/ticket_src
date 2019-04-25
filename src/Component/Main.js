import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Book from './Book';
import Home from './Home';
import Prices from './Prices';
import TrainDetails from './TrainDetails'
import Buy from './Buy';



const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/book' component={Book}/>
            <Route exact path ='/buy' component={Buy}/>
            <Route exact path ='/prices' component={Prices}/>
            <Route exact path = '/prices/:id' component={TrainDetails}/>
        </Switch>
    </main>
)

export default Main;