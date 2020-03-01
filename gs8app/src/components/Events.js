import React from 'react';
import Styles from '../css/styles';
import Card from '@material-ui/core/Card';

class Events extends React.Component {
    render() {
        return (
            <div style={Styles.parentDivStyle}>
                <Card style={Styles.cardStyle}>
                    <p style={Styles.h1Style}>Look for GS8 2020 Events In January!</p>

                    <Card style={Styles.cardStyle}>
                        <img src={require('../img/GS8projector.jpg')} alt='Film Purchase 1' />
                    </Card>
                </Card>
            </div>
        );
    }
};

export default Events;