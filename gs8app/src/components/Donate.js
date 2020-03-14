import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import styles from '../css/styles';

const Donate = () => (
    <div style={styles.parentDivStyle}>
        <Card style={styles.cardStyle}>
            <div>
                <p style={styles.titleStyle}>
                    Make a tax deductible donation now
                </p>
                <p style={styles.pStyle}>
                    The Georgetown Super 8 Film Festival is fiscally sponsored
                    by Mini Mart City Park, a place for the arts, education,
                    environmental action, and community collaboration currently
                    under construction in the Duwamish Valley.
                    <br />
                    <br />
                    Click the button below to be linked to the Mini Mart City
                    Park Donation page and scroll to the GS8 Donate button at
                    the bottom.
                </p>
                <div>
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
