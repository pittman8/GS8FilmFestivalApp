import React from 'react';
import Card from '@material-ui/core/Card';
import styles from '../css/styles';


const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
};

const Rules = () => (
    <div style={styles.parentDivStyle}>
        <Card style={styles.cardStyle}>
            <p style={styles.titleStyle}>GS8 Rules and Guidelines</p>
            <div style={styles.rowDivStyle}>
                <p style={styles.pStyle}>
                    The Georgetown Super 8 Film Festival is a community-based amateur film project.  Please read the following rules and guidelines carefully.  By participating in the project, you agree to respect and follow the rules outlined below.
                </p>
                <p style={styles.pStyle}>
                    <b>1.</b> The goal of GS8 is to allow the people who live and work in the Duwamish Valley to have a shared creative experience which documents and defines this unique region or Seattle. People who live and work in the community will have priority for participation.  (If you are a former resident who was priced out of this region, please consider yourself an honorary resident.)

                </p>
                <p style={styles.pStyle}>
                    <b>2.</b> Have Fun! This project is about being weird, creative, and celebrating our unique community, so have fun!  This is not a professional film festival.

                </p>
                <p style={styles.pStyle}>
                    <b>3.</b> Be kind to everyone, but especially the people running this project.  GS8 reserves the right to terminate the participation of anyone being aggressive, disrespectful, or ignoring the rules.

                </p>
                <p style={styles.pStyle}>
                    <b>4.</b> All deadlines must be met.

                </p>
                <p style={styles.pStyle}>
                    <b>5.</b> By participating, you agree to let GS8 share your film on their YouTube Site, the GS8 website, at the film festival, and for any publicity or fundraising purposes.  You, however, retain the rights to your creative work, will have access to the digital file, and will receive your actual film back after the screening.

                </p>
                <p style={styles.pStyle}>
                    <b>6.</b> Each filmmaker may only show one roll of unedited super 8 film.

                </p>
                <p style={styles.pStyle}>
                    <b>7.</b> Any images and sound submitted must be copyright free or follow YouTube's Copyright Policies.

                </p>
                <p style={styles.pStyle}>
                    <b>8.</b> If the film festival film length is over 2 hours (30 films), there will be a selection process for which films are screened at the final

                    event.  All films, however, will be uploaded to the online archive for public viewing.
                </p>
                <p style={styles.pStyle}>
                    <b>9.</b> Your film content must pass YouTube’s Community Guidelines:
                    <br /><br />
                    <a href="https://creatoracademy.youtube.com/page/lesson/copyright-guidelines">https://creatoracademy.youtube.com/page/lesson/copyright-guidelines</a>

                    <br /><br />
                    <a href="https://www.youtube.com/yt/about/policies/#community-guidelines">https://www.youtube.com/yt/about/policies/#community-guidelines</a>
                    <br />
                </p>
                <p style={styles.pStyle}>
                    <b>10.</b> GS8 reserves the right to omit any film from the festival that is hateful or inappropriate, even if it passes Youtube’s filter.
                </p>
                <p style={styles.pStyle}>
                    <b>11.</b> By using a GS8 camera, you understand that we are not responsible for filming troubles due to our cameras, or destroyed film due to our projectors, or this process.
                </p>
                <p style={styles.pStyle}>
                    <b>12.</b> By signing up you are committing to participate in the project.  We know that life happens, however, a lot of time, fundraising, and effort goes into making this project happen, so please take your registration as a commitment to making a film.  If you are unable to participate, you forfeit your payment and film to the project.  If you requested a scholarship roll of film and were unable to participate, you will be ineligible for future subsidized rolls of film.
                </p>
                <p style={styles.pStyle}>
                    <b>13.</b> All films must be shot within the Duwamish Valley as defined by the image below.  This area is both sides of the Duwamish river from the West Seattle Bridge to the Tukwila border and from west of I5 to East of 509.
                </p>

                <img
                    src={require('../img/gs8_rules_map.jpg')}
                    alt='Map of the borders of Georgetown'
                    style={imgStyle}
                />

            </div>
        </Card>
    </div>
);

export default Rules;