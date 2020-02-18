import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Shop = () => (
    <div>
        <Router>
            <h1>Purchase Your Film</h1>
            <h3>This page will no longer be accessible when registration ends January 31st at midnight.</h3>
        <p>*insert film photos and cost here*</p>

        <h2>Make a Tax-Deductible Donation</h2>
        <h3>Please Donate to Help Off-Set the cost of this project.</h3>
        <p>Mini Mart City Park is our fiscal sponsor.  Hit the button below to go to their webpage and scroll to the bottom  to the GS8 Donate Button</p>
        <h3>Thank you!</h3>
            <Button variant="outlined" color="primary">Donate Now!
            </Button>
        <h3><b>An Important Note about the Cost</b></h3>
        <p>Previous GS8 participants may remember the $36 price to participate in 2010. Please understand that it is much more expensive to process super 8 film now, than it was 9 years ago.  There are no longer any local processing facilities and the cost of film has gone up. Unlike last year, we are now purchasing super 8 film from Kodak and having it processed at Cinelab in New England . We also have to pay for shipping 4 ways and a hard drive to store the digital versions of the films. The film fee of $100 only covers the cost of this process, not the purchase of cameras and their upkeep, instruction, office supplies, web services, or any other expenses.  If you are able, please make a tax deductible donation of $50, or more, (but anything is appreciated) to cover the rest of the expenses the project incurs, helping you make your film, and to ensure that everyone, regardless of their financial situation, is able to participate.

            ​</p>
            <h3><b>Thanks!</b></h3>
        </Router>
    </div>
);

export default Shop;

