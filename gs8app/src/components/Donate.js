import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const parentDivStyle = {
    textAlign: 'center',
    display: 'inline-block',
};

const cardStyle = {
    width: '36em',
    textAlign: 'center',
    padding: '25px',
    margine: '25px',
};

const h1Style = {
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: '2.2em'
};

const pStyle = {
    display: 'inline-block',
    textAlign: 'justify',
    fontSize: '1.2em'
};

const divButtonStyle = {
    textAlign: 'center',
    padding: '25px',
    margine: '25px',
};

const Donate = () => (
    <div style={parentDivStyle}>
        <Card style={cardStyle}>
            <div >
                <p style={h1Style}>Make a tax deductible donation now</p>
                <p style={pStyle}>
                    The Georgetown Super 8 Film Festival is fiscally sponsored by
                    Mini Mart City Park, a place for the arts, education, environmental
                    action, and community collaboration currently under construction
                    in the Duwamish Valley.
                    <br />
                    <br />
                    Click the button below to be linked to the Mini Mart City Park
                    Donation page and scroll to the GS8 Donate button at the
                    bottom.
                </p>
                <div style={divButtonStyle}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        href="https://www.minimartcitypark.com/donate/"
                    >
                        Donate Now!
                    </Button>
                </div>
            </div>
        </Card>
    </div>
);

export default Donate;