import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Clients from './Clients'
import Price from './Price'
import Contact from './Contact'

const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = 'Services' component = {Services}/>
            <Route exact path = 'portfolio' component = {Portfolio}/>
            <Route exact path = 'about' component = {About}/>
            <Route exact path = 'clients' component = {Clients}/>
            <Route exact path = 'price' component = {Price}/>
            <Route exact path = 'contact' component = {Contact}/>
        </Switch>
    </main>
)

export default Main