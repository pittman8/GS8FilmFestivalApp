import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'typeface-roboto';

import '../css/App.css';

import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Donate from './Donate';
import Events from './Events';
import Participate from './Participate';
import Cameras from './Cameras';
import Deadlines from './Deadlines';
import Register from './Register';
import Rules from './Rules';
import Shop from './Shop';
import Subscribe from './Subscribe';
//fixed???

class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar />
                <div id="contents">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/events" component={Events} />
                        <Route path="/participate" component={Participate} />
                        <Route path="/cameras" component={Cameras} />
                        <Route path="/deadlines" component={Deadlines} />
                        <Route path="/register" component={Register} />
                        <Route path="/rules" component={Rules} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/subscribe" component={Subscribe} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
