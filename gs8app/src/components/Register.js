import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Register extends React.Component {
    render() {
        //const classes = this.useStyles();

        return (
            <div>
                <h1>Registration Direction</h1>
                <h2>Read over all of the rules and project guidelines</h2>
                <Button variant="contained">Go to Rules Page</Button>

                <h2>2. Register for one of the Super 8 Crash Courses listed below</h2>
                <h3>Filmmakers who have participated in GS8 before will only need to stay for the first half of the crash course. </h3>
                <h3>No upcoming events at the moment</h3>

                <h2>3. Purchase one roll of color or black & white super 8 film on the "Film Purchase" page. </h2>
                <Button variant="contained">Film Purchase</Button>

                <p>If you live or work within the Duwamish Valley and cannot afford the full price, send us an email with a request for a subsidized roll of film stating the following: your name and contact information, how you are connected to this geographic region, how much (if any) you can contribute toward the cost, and what class you signed up for. We have a limited number of subsidized rolls, so we will not guarantee that we can accommodate this request, but we will do our best.</p>
                <h3>Please only ask for a subsidized roll if you know you can be present at one of the classes to use it. Purchasing rolls that go unused is an extreme burden for the program.</h3>
            </div>
        );
    }
};

export default Register;