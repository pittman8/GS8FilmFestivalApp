import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'typeface-roboto';

import '../css/App.css';

import Navbar from './Navbar';
import About from './About';
import Donate from './Donate';
import Participate from './Participate';
import Rules from './Rules';
import Cameras from './Cameras';
import Shop from './Shop';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar />
                <div id="contents">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/participate" component={Participate} />
                        <Route path="/rules" component={Rules} />
                        <Route path="/cameras" component={Cameras} />
                        <Route path="/shop" component={Shop} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }
  
}

export default App;

/*
return (
    <div className="App">
        <Navbar />
        <div id="contents">
            <Switch>
                <Route path="/about" component={About} />
                <Redirect to="/" />
            </Switch>
        </div>
    </div>
);
*/