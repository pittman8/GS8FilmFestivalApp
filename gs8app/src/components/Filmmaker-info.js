import React from 'react';
import { Card, Button } from '@material-ui/core';
import Slideshow from './Slideshow';
import styupdales from '../css/styles';

const columnLeftStyle = {
    float: 'left',
    padding: '25px',
    width: '45%'
};

const columnRightStyle = {
    float: 'right',
    padding: '25px',
    width: '45%'
};

const divStyle = {
    textAlign: 'center',
    display: 'inline-block',
    width: '85%'
};

const headerStyle = {
    textAlign: 'center',
    display: 'inline-block',
    width: '90%'
};

const titleStyle = {
    fontWeight: 'bold',
    textAlign: 'center'
};

const FilmmakerInfo = () => (
    <div>
        <Card style={headerStyle}>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="#intro"
            >
                Introduction
            </Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="#filmtips"
            >
                Filming Tips
            </Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="#cameras"
            >
                Cameras
            </Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="#links"
            >
                Links
            </Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="/rules"
            >
                Rules
            </Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="#filmideas"
            >
                Film Ideas
            </Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="#sound"
            >
                Sound
            </Button>
        </Card>

        <Card style={divStyle}>
            <h3>
                <b>
                    <u>
                        Thank You for Participating in the Georgetown Super 8
                        Film Festival 2020
                    </u>
                </b>
            </h3>
            <br />

            <p>
                Your time and willingness to be imaginative and share that
                creativity with the community is unique. You didn’t have to
                spend money, rack your brain for an exciting idea, or create
                something that was purely for the fun of it, but you did, or
                will be soon, and that motivation makes you unique. This event
                is about community, and it is your work, no matter what you
                choose to do, that will help to inspire the Duwamish Valley to
                continue being a little different and be recognized as the
                vibrant community we are all a part of.
                <br />
                <br />
                This is the second year of the reboot of Georgetown Super 8 Film
                Festival, which previously ran from 2006-2011. There are both
                similarities and differences from the past project. To help new
                and return filmmakers navigate these changes, this website has
                been created to guide you along the way.
                <br />
                <br />
                The most important thing to remember is not to let your
                filmmaking goals stress you out. Just plan ahead and pace
                yourself. With over 200 GS8 films made in the past, Georgetown
                and South Park have a lot of super 8 experts, so relax, have a
                beer/ coffee/ pizza slice/ vegan, veggie, or meat steak and ask
                the bartender, barista, or patron next to you how it is done. If
                they don’t know, and our resources don’t answer your questions,
                shoot me an email, and I will be happy to get you on your way.
                <br /> <br />
                Thank you for particpating!
                <br />
                <br />
                Sincerely, <br />
                Laura Wright <br />
                GS8 Education and Archives Director <br />
                gs8filmfest@gmail.com
            </p>
        </Card>

        <Card id="intro">
            <h3> Introduction </h3>
            <h4>
                <u>What is Super 8?</u>
            </h4>
            <p>
                Super 8 is a small format film that was popular for making home
                movies 35 years ago. Many artists and beginning filmmakers used
                this medium because it was cheaper and easier to use than 16mm
                film and could provide a way to create a very low-budget
                independent film. Filmmakers such as Spike Lee, JJ Abrams, and
                Steven Spielberg got their first taste of filmmaking using super
                8, and its gritty look brought a renewed interest to the medium
                among artist and MTV videos responding to the rise of video use
                in the ’80s.
                <br />
                <br />
                Super 8 is a film-based, light-sensitive medium, that must be
                processed after shooting before the filmmaker can see the
                results. This is a considerably different filmmaking experience
                than digital film, and requires attention to lighting, focusing,
                and framing without instant knowledge of what the camera is
                capturing. To truly appreciate this unique film format, it is
                best to forget any Disney like expectations, embrace the beauty
                of film, and love the imperfections that happen when recording
                in this unique format.
            </p>
        </Card>

        <Card id="filmtips">
            <h3>Filming Tips</h3>
            <h4>All film due March 22nd</h4>
        </Card>

        <Card style={divStyle}>
            <h3>How to make a Super 8 Film</h3>
            <Slideshow />
        </Card>

        <Card id="cameras">
            <h3>Cameras</h3>
            <div>
                <iframe
                    title="Cameras"
                    display="block"
                    width="100%"
                    src="https://www.youtube.com/embed/BqLx6dyzVO0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </Card>

        <Card id="links">
            <h3>Links</h3>
        </Card>

        <Card id="filmideas">
            <h3>Film Ideas</h3>
        </Card>

        <Card id="sound">
            <h3>Sound</h3>
            <p>
                The sound cannot be synced with your film which means that
                having your sound fit perfectly with what is being shown is not
                possible, therefore shoot/ record accordingly.
            </p>
            <h4>Due April 8th</h4>
        </Card>
    </div>
);

export default FilmmakerInfo;
