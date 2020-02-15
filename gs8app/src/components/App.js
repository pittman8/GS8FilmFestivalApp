import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'typeface-roboto';

import '../css/App.css';

import Navbar from './Navbar';
import About from './About';

class App extends Component {

    render() {
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
    }
  
}

export default App;
