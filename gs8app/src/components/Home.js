import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Contact from './Contact';
import Subscribe from './Subscribe';
import styles from '../css/styles';

const imgStyle = {
    maxWidth: '100%',
    height: 'auto'
};

const Home = () => (
    <div style={styles.parentDivStyle}>
        <img
            src={require('../img/MyPost.jpg')}
            alt="The Georgetown Super 8 Film Festival logo"
            style={imgStyle}
        />
        <h1>Thank you for making GS8 2019 a Success!</h1>
        <Card style={styles.cardStyle}>
            <h2>Little Films for the Big Picture</h2>
            <p style={styles.pStyle}>
                Georgetown Super 8 is dedicated to the creation and sharing of
                amateur super 8 films to foster inclusive dialogue, ensuring a
                Cardersity of community voices can define, document, and tell
                the story of their neighborhood.
            </p>
            <Button variant="contained" style={styles.divButtonStyle}>
                Learn More
            </Button>
        </Card>
        <Contact />
        <Card style={styles.cardStyle}>
            <p>Missing banner image</p>
            <h2 style={styles.titleStyle}>Thankyou to our 2019 Donors</h2>
            <img
                src={require('../img/2018sponsors.jpg')}
                alt="2018 sponsors"
                style={imgStyle}
            />
        </Card>
        <p>Map goes here</p>
        {/* API key AIzaSyDizypkVSGXwtOacsa73GX0DcqSE6l5KAg  */}

        <Subscribe />
    </div>
);

export default Home;
