import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const buttonStyle = {};



const parentDivStyle = {
    textAlign: 'center',
    display: 'inline-block',
    width: '48em',
};

const cardStyle = {
    textAlign: 'center',
    padding: '15px',
    margine: '15px',
};

const titleStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2.2em'
};

const regDivStyle = {
    textAlign: 'center',
    margin: '10px 0px',
    padding: '5px',
};

const buttonDivStyle = {
    textAlign: 'center',
    display: 'inline-block',
    center: 'top',
    padding: '5px',
    margine: '15px',
    margin: '10px 0px',
    width: '225px',
};

const pStyle = {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '1.2em'
};

const rowDivStyle = {
    align: 'left',
};


const Participate = () => (
    <div style={parentDivStyle}>
        <Card style={cardStyle}>
            <p style={titleStyle}>Participate in GS8 Film Festival</p>
            <p style={pStyle}>We are Glad you are here!</p>
            <div style={regDivStyle}>
                <Button
                    size="large"
                    variant="contained"
                    href="/Register"
                >
                    Registration<br/>Start Here
                </Button>
            </div>




            <div style={rowDivStyle}>
                <div style={buttonDivStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="/Deadlines"
                        fullWidth='true'
                    >
                        Deadlines & Events
                    </Button>
                </div>

                <div style={buttonDivStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="/Shop"
                        fullWidth='true'
                    >
                        Film Purchase
                    </Button>
                </div>
                <div style={buttonDivStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="/Filmmaker-info"
                        fullWidth='true'
                    >
                        Filmmaker Info
                    </Button>
                </div>
            </div>
            <div>
                <div style={buttonDivStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="/Contact"
                        fullWidth='true'
                    >
                        Contact
                    </Button>
                </div>
                <div style={buttonDivStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="/Rules"
                        fullWidth='true'
                    >
                        Rules
                    </Button>
                </div>
                <div style={buttonDivStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="/Donate"
                        fullWidth='true'
                    >
                        Donate
                    </Button>
                </div>
            </div>

        </Card>
    </div>
);

export default Participate;