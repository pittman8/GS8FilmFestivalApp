import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Styles from '../css/styles';

class Register extends React.Component {
    render() {

        return (
            <div style={Styles.parentDivStyle}>
                <Card style={Styles.cardStyle}>                    
                    <p style={Styles.h1Style}>Registration Direction</p>
                    <p style={Styles.h2Style}>Read over all of the rules and project guidelines</p>

                    <Button
                        variant="contained"
                        href="/rules"
                    >
                        Go to Rules Page
                    </Button>

                    <p style={Styles.h2Style}>2. Register for one of the Super 8 Crash Courses listed below</p>
                    <p style={Styles.h3Style}>Filmmakers who have participated in GS8 before will only need to stay for the first half of the crash course.</p>

                    <Card style={Styles.cardStyle}>
                        <p style={Styles.h3Style}>No upcoming events at the moment</p>
                    </Card>

                    <p style={Styles.h2Style}>3. Purchase one roll of color or black & white super 8 film on the "Film Purchase" page. </p>

                    <Button
                        variant="contained"
                        href="/shop"
                    >
                        Film Purchase
                    </Button>

                    <p style={Styles.pStyle}>If you live or work within the Duwamish Valley and cannot afford the full price, send us an email with a request for a subsidized roll of film stating the following: your name and contact information, how you are connected to this geographic region, how much (if any) you can contribute toward the cost, and what class you signed up for. We have a limited number of subsidized rolls, so we will not guarantee that we can accommodate this request, but we will do our best.</p>
                    <p style={Styles.h3Style}>Please only ask for a subsidized roll if you know you can be present at one of the classes to use it. Purchasing rolls that go unused is an extreme burden for the program.</p>
                </Card>
            </div>
        );
    }
};

export default Register;