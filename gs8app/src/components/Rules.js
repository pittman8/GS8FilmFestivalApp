import React from 'react';

const pStyle = {
    textAlign: 'left'
};

const Rules = () => (
    <div>
        <h1>GS8 Rules and Guidelines</h1>
        <div>
            <p style={pStyle}>
                1. The goal of GS8 is to allow the people who live and work in the Duwamish Valley to have a shared creative experience which documents and defines this unique region or Seattle. People who live and work in the community will have priority for participation.  (If you are a former resident who was priced out of this region, please consider yourself an honorary resident.)

            </p>
            <p style={pStyle}>
                2. Have Fun! This project is about being weird, creative, and celebrating our unique community, so have fun!  This is not a professional film festival.

            </p>
            <p style={pStyle}>
                3. Be kind to everyone, but especially the people running this project.  GS8 reserves the right to terminate the participation of anyone being aggressive, disrespectful, or ignoring the rules.

            </p>
            <p style={pStyle}>
                4. All deadlines must be met.

            </p>
            <p style={pStyle}>
                5. By participating, you agree to let GS8 share your film on their YouTube Site, the GS8 website, at the film festival, and for any publicity or fundraising purposes.  You, however, retain the rights to your creative work, will have access to the digital file, and will receive your actual film back after the screening.

            </p>
            <p style={pStyle}>
                6. Each filmmaker may only show one roll of unedited super 8 film.

            </p>
            <p style={pStyle}>
                7. Any images and sound submitted must be copyright free or follow YouTube's Copyright Policies.

            </p>
            <p style={pStyle}>   ​
                8. If the film festival film length is over 2 hours (30 films), there will be a selection process for which films are screened at the final

                event.  All films, however, will be uploaded to the online archive for public viewing.
            </p>
            <p style={pStyle}>
                9. Your film content must pass YouTube’s Community Guidelines:

                https://creatoracademy.youtube.com/page/lesson/copyright-guidelines

                https://www.youtube.com/yt/about/policies/#community-guidelines
            </p>
            <p style={pStyle}>
                10. GS8 reserves the right to omit any film from the festival that is hateful or inappropriate, even if it passes Youtube’s filter.
            </p>
            <p style={pStyle}>
                11. By using a GS8 camera, you understand that we are not responsible for filming troubles due to our cameras, or destroyed film due to our projectors, or this process.
            </p>
            <p style={pStyle}>
                12. By signing up you are committing to participate in the project.  We know that life happens, however, a lot of time, fundraising, and effort goes into making this project happen, so please take your registration as a commitment to making a film.  If you are unable to participate, you forfeit your payment and film to the project.  If you requested a scholarship roll of film and were unable to participate, you will be ineligible for future subsidized rolls of film.
            </p>
            <p style={pStyle}>
                13. All films must be shot within the Duwamish Valley as defined by the image below.  This area is both sides of the Duwamish river from the West Seattle Bridge to the Tukwila border and from west of I5 to East of 509.
            </p>

            <img src={require('../img/gs8_rules_map.jpg')} alt='Map of the borders of Georgetown' />

        </div>

    </div>
);

export default Rules;