import React from 'react';
import Button from '@material-ui/core/Button';

const Donate = () => (
    <div>
        <h1>Make a tax deductible donation now</h1>
        <p>
            The Georgetown Super 8 Film Festival is fiscally sponsored by<br />
            Mini Mart City Park, a place for the arts, education, environmental<br />
            action, and community collaboration currently under construction<br />
            in the Duwamish Valley.
        </p>
        <p>
            Click the button below to be linked to the Mini Mart City Park<br />
            Donation page and scroll to the GS8 Donate button at the<br />
            bottom.
        </p>
        <Button
            size="large"
            color="primary"
            variant="contained"
            href="https://www.minimartcitypark.com/donate/"
        >
            Donate Now!
        </Button>
    </div>
);

export default Donate;