import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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