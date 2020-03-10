import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";

const Contact = () => (
  <Card>
    <h3>Contact Us</h3>

    <form>
      <TextField
        required
        id="fname"
        label="Required"
        placeholder="First Name"
      />

      <TextField required id="lname" label="Required" placeholder="Last Name" />

      <TextField required id="email" label="Required" placeholder="Email" />

      <TextField
        required
        id="phone"
        label="Required"
        placeholder="Phone Number"
      />

      <TextField
        placeholder="Type your message here"
        multiline
        rows={3}
        rowsMax={6}
      />
      <input type="submit" value="Submit" />
    </form>
  </Card>
);

//            <TextField id="outlined-basic" label="First name" variant="outlined" />

export default Contact;
