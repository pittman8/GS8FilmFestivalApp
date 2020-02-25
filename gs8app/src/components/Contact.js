import React from 'react';
import {Card} from '@material-ui/core';
/*import TextField from '@material-ui/core/TextField';*/

const Contact = () => (
    <Card>
        <h3>Contact Us</h3>

        <form>
            <label for="fname">First name:</label>
            <label for="lname">Last name:</label><br />
            <input type="text" id="fname" name="fname" />
            <input type="text" id="lname" name="lname"  /><br /><br />
            <label for="email">Email:</label>
            <label for="phone">Phone:</label><br />
            <input type="text" id="email" name="email" />
            <input type="text" id="phone" name="phone"  /><br /><br />
            <label for="message">Type your message here</label><br /><br/>
            <textarea name="message"></textarea><br />>
            <input type="submit" value="Submit" />





        </form>
    </Card>
);

//            <TextField id="outlined-basic" label="First name" variant="outlined" />

export default Contact;