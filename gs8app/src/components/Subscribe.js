import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';

import Styles from '../css/styles';

class Subscribe extends React.Component {
    btn_subscribe = () => {
        let email = '';
        email = document.getElementById('email').value;
        console.log('subscribe: ' + email);
    };

    render() {
        return (
            <div style={Styles.parentDivStyle}>
                <Card style={Styles.cardStyle}>
                    <div>
                        <p style={Styles.h1Style}>Subscribe</p>
                        <form noValidate autoComplete="off">
                            <TextField
                                id="email"
                                label="E-mail"
                                variant="outlined"
                            />
                            <br />
                            <div style={Styles.divButtonStyle}>
                                <Button
                                    variant="contained"
                                    onClick={this.btn_subscribe}
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <CardActions>
                            <a
                                href="https://www.facebook.com/GeorgetownSuper8/"
                                target="_blank"
                            >
                                <IconButton>
                                    <FacebookIcon style={Styles.socMed} />
                                </IconButton>
                            </a>
                        </CardActions>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Subscribe;
