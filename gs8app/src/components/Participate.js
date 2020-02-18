import React from 'react';
import Button from '@material-ui/core/Button';

const Participate = () => (
    <div>
        <h1>Participate in GS8 Film Fes</h1>
        <p>We are Glad you are here!</p>
        <br />
        <br />
        <Button
            size="large"
            variant="contained"
            href="/Register"
        >
            Registration - Start Here
        </Button>
        <br />
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Deadlines"
        >
            Deadlines & Events
        </Button>

        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Shop"
        >
            Film Purchase
        </Button>
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Filmmakers"
        >
            Filmmaker Info
        </Button>
        <br />
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Contact"
        >
            Contact
        </Button>
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Rules"
        >
            Rules
        </Button>
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Donate"
        >
            Donate
        </Button>
        <br />
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="/Cameras"
        >
            Camera Manuals
        </Button>
    </div>
);

export default Participate;