import React from 'react';
import Card from '@material-ui/core/Card';
import styles from '../css/styles';


const columnLeftStyle = {
    float: "left",
    padding: '25px',
    width: "45%"
};

const columnRightStyle = {
    float: "right",
    padding: '25px',
    width: "45%"
};


const divStyle = {
    textAlign: 'center',
    display: 'inline-block',
    width: '75%'
};


const titleStyle = {
    fontWeight: 'bold',
    textAlign: 'center'
  };


const About = () => (
    <div style={divStyle}>
            <h1 style={titleStyle}>ABOUT US</h1>
            <Card style={styles.rowDivStyle}>
        
            <h3 style={styles.titleStyle}>
            Georgetown Super 8 Mission
        </h3>
        
            <p style={styles.pStyle}>
            Georgetown Super 8 is dedicated to the creation and sharing of amateur super 8 films to foster inclusive dialogue, ensuring a diversity of community voices can define, document, and tell the story of their neighborhood.
            </p>
            </Card>

<div style={columnLeftStyle}>
            <Card style={styles.rowDivStyle}>
        <h3 style={titleStyle}>Program Description</h3>



            <p style={styles.pStyle}>The GS8 cycle begins in January when filmmaker registration forms and posters are distributed throughout the Duwamish Valley, calling for people who are interested in learning how to make and share super 8 films.  Anyone can apply, regardless of filmmaking knowledge, and all completed films with appropriate content are included on the website.  The registrants pay a fee that covers the cost of their film, processing, and a modest amount toward program costs, however, they may opt for subsidized or scholarship rolls on the basis of need.  Registered filmmakers attend a crash course in super 8 filmmaking; sign up to check out a GS8 camera; and are provided assistance throughout the filmmaking process.  Completed films are uploaded to the GS8 website, and the community votes for their favorites to be screened at the film festival.  At this film-screening event, attendees are asked for a suggested donation, however, no one is turned away for a lack of funds.  The intention of GS8 is to create a shared experience, inclusive of all community members, in an effort to build a vibrant, tolerant, and compassionate Duwamish Valley community.
            </p>
            </Card>

</div><div style={columnRightStyle}>
            <Card style={styles.rowDivStyle}>
        <h3 style={titleStyle}>The Georgetown Super 8 Archive</h3>



           <p  style={styles.pStyle}> Previous GS8 films are now archival footage of landmarks and people that no longer exist in the rapidly changing Duwamish Valley.  A new focus of this project will be to create an archive of past and future films in an accessible website, mapping each film in the primary location in which it was filmed.
           </p>

</Card>

            <Card style={styles.rowDivStyle}>
        <h3 style={titleStyle}>History</h3>


            <p style={styles.pStyle}>
            The Georgetown Super 8 Film Festival began in 2006 when local artists asked their neighbors if they would be interested in learning to make super 8 films with the intention of sharing their results with the community. The enthusiasm was overwhelming and, in that first year, 33 films were made and screened at the Georgetown Ballroom to an audience of 200.  Each year the number of films completed and audience attendance increased as well as the generous support from the community at large.  From 2006 to 2019, GS8 assisted in the completion of 298 films with over 800 people in participation.
           
           </p>
           </Card>
    </div>
</div>
);

export default About;