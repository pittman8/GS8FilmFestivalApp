import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Subscribe extends React.Component {
    render() {
        //const classes = this.useStyles();

        return (
            <div>
                <FacebookIcon />
                <h1>Subscribe</h1>
                <form noValidate autoComplete="off">
                    <TextField id="email" label="E-mail" variant="outlined" /><br/>
                    <Button variant="contained">Subscribe</Button>
                </form>
            </div>
        );
    }
};

export default Subscribe;