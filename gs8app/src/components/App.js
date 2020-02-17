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
                        <Route path="/contact" component={Contact} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/events" component={Events} />
                        <Route path="/participate" component={Participate} />
                        <Route path="/participate/cameras" component={Cameras} />
                        <Route path="/participate/deadlines" component={Deadlines} />
                        <Route path="/participate/register" component={Register} />
                        <Route path="/participate/rules" component={Rules} />
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
