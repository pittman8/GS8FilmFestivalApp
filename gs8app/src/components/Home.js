import React from 'react';
import Button from '@material-ui/core/Button';
import Contact from './Contact';
import Subscribe from './Subscribe';

const Home = () => (
    <div>
        <img src={require('../img/MyPost.jpg')} alt='The Georgetown Super 8 Film Festival logo' />
        <h1>Thank you for making GS8 2019 a Success!</h1>
        <h2>Little Films for the Big Picture</h2>
        <p>Georgetown Super 8 is dedicated to the creation and sharing of amateur super 8 films to foster inclusive dialogue, ensuring a diversity of community voices can define, document, and tell the story of their neighborhood.</p>
        <Button variant="contained">Learn More</Button>

        <Contact />
        <p>Missing banner image</p>
        <h2>Thankyou to our 2019 Donors</h2>
        <img src={require('../img/2018sponsors.jpg')} alt='2018 sponsors' />

        <p>Map goes here</p>
            {/* API key AIzaSyDizypkVSGXwtOacsa73GX0DcqSE6l5KAg  */}
            
        <Subscribe />
    </div>
);

export default Home;