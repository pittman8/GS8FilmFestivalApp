import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

class Events extends React.Component {
    useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    render() {
        //const classes = this.useStyles();

    return (
        <div>
            <h1>Look for GS8 2020 Events In January!</h1>
            {/*<img src="../img/GS8projector.jpg" alt="GS8 Film projector" />*/}
        </div>
        );
    }
};

export default Events;