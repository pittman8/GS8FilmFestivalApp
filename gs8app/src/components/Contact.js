import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

const contactCardStyle = {
    maxWidth: '75%%'
};

const blockStyle = {
    display: 'block'
};

const textfieldStyle = {
    padding: '5%'
};

const Contact = () => (
    <Card style={contactCardStyle}>
        <h3>Contact Us</h3>

        <form>
            <div style={blockStyle}>
                <TextField
                    style={textfieldStyle}
                    required
                    id="fname"
                    label="Required"
                    placeholder="First Name"
                />

                <TextField
                    style={textfieldStyle}
                    required
                    id="lname"
                    label="Required"
                    placeholder="Last Name"
                />
            </div>
            <div style={blockStyle}>
                <TextField
                    style={textfieldStyle}
                    required
                    id="email"
                    label="Required"
                    placeholder="Email"
                />

                <TextField
                    style={textfieldStyle}
                    required
                    id="phone"
                    label="Required"
                    placeholder="Phone Number"
                />
            </div>
            <TextField
                style={blockStyle}
                inputStyle={{ width: '100%' }}
                placeholder="Type your message here"
                multiline
                width="50%"
                rows={3}
                rowsMax={6}
            />
            <input type="submit" value="Submit" />
        </form>
    </Card>
);

//            <TextField id="outlined-basic" label="First name" variant="outlined" />

export default Contact;
