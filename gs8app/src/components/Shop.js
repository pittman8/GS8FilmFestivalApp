import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../css/filmPopup.css';

const Shop = () => (
    <div>
        <Router>
            <h1>Purchase Your Film</h1>
            <h3>This page will no longer be accessible when registration ends January 31st at midnight.</h3>

            <img src={require('../img/film1.PNG')} alt='Film Purchase 1' />
            <form>
                <label htmlFor="film1quant">Quantity </label>
                <input type="number" id="film1quant" name="film1quant"/>
                <input type="submit" value=" Add to Cart" /><br />
            </form>
            <br />
            <p><b>Cost includes one roll of black and white super 8 film, processing, digital transfer, and shipping.  Purchases made by credit card will show "Laura Wright," GS8's education organizer, as the payee on your statement.</b>

                <br/>

                <u>Black & White Kodak Tri-X- This is a reversal/ positive film that can be projected through a super 8 projector.</u>

                <br/>

                <p>KODAK TRI-X Black & White Reversal Film 7266 is a high-speed, panchromatic black-and-white film offering fine grain and sharpness suitable for general interior photography with artificial light. And because our films don’t require processing in a bleach containing heavy metals, they’re easier on the environment.</p>

                <b>KODAK TRI-X | B&W Reversal Film 7266 | Super 8 | 50 ft Cartridge | 1889575</b>

                    <li>Gray acetate safety base with an additional anti-halation undercoat</li>
                    <li>Black-and-white reversal film</li>
                    <li>Suitable for general interior photography with artificial light but can also be used in daylight</li>
                    <li>Excellent tonal gradation and sharpness</li>
                    <li>Handle unprocessed film in total darkness</li>
                    <li>Store unexposed film at 13°C (55°F) or lower</li>
                    <li>No exposure adjustments are required for exposure times from 1/1,000 of a second to 1 second</li>
                <br/>
                See an example video <a href="https://www.youtube.com/watch?v=nzvNIu8Q8jc"><b><i>here</i></b></a>
            </p>
            <br/>
        <br/>
            <img src={require('../img/film2.PNG')} alt='Film Purchase 2' />

            <form>
                <label htmlFor="film2quant" >Quantity </label>
                <input type="number" id="film2quant" name="film2quant" />
                <input type="submit" value=" Add to Cart" />
            </form>

            <p>
            <b>The cost covers the film, processing, a digital transfer, and shipping. Purchases made by credit card will show "Laura Wright," GS8's organizer, as the payee on your statement.</b>

                <br/>

            <u>Kodak 100D- This is a positive film that can be projected with a super 8 projector.  The colors are lush with the trademark warm tones of Kodak. This film was discontinued last year and Kodak just brought it back.  THANK YOU KODAK!!!</u>

                <p>KODAK TRI-X Black & White Reversal Film 7266 is a high-speed, panchromatic black-and-white film offering fine grain and sharpness suitable for general interior photography with artificial light. And because our films don’t require processing in a bleach containing heavy metals, they’re easier on the environment.</p>
                <br/>
                <b>KODAK TRI-X | B&W Reversal Film 7266 | Super 8 | 50 ft Cartridge | 1889575</b>

                    <li>Gray acetate safety base with an additional anti-halation undercoat</li>
                    <li>Black-and-white reversal film</li>
                    <li>Suitable for general interior photography with artificial light but can also be used in daylight</li>
                    <li>Excellent tonal gradation and sharpness</li>
                    <li>Handle unprocessed film in total darkness</li>
                    <li>Store unexposed film at 13°C (55°F) or lower</li>
                    <li>No exposure adjustments are required for exposure times from 1/1,000 of a second to 1 second</li>

                <br/>
                See an example video <a href="https://vimeo.com/296154486"><b><i>here</i></b></a>
            </p>

            <br />
                <h2>Make a Tax-Deductible Donation</h2>
        <h3>Please Donate to Help Off-Set the cost of this project.</h3>
        <p>Mini Mart City Park is our fiscal sponsor.  Hit the button below to go to their webpage and scroll to the bottom  to the GS8 Donate Button</p>
        <h3>Thank you!</h3>
            <Button
                size="large"
                color="primary"
                variant="contained"
                href="https://www.minimartcitypark.com/donate/"
            >
                Donate Now!
            </Button>
        <h3><b>An Important Note about the Cost</b></h3>
        <p>Previous GS8 participants may remember the $36 price to participate in 2010. Please understand that it is much more expensive to process super 8 film now, than it was 9 years ago.  There are no longer any local processing facilities and the cost of film has gone up. Unlike last year, we are now purchasing super 8 film from Kodak and having it processed at Cinelab in New England . We also have to pay for shipping 4 ways and a hard drive to store the digital versions of the films. The film fee of $100 only covers the cost of this process, not the purchase of cameras and their upkeep, instruction, office supplies, web services, or any other expenses.  If you are able, please make a tax deductible donation of $50, or more, (but anything is appreciated) to cover the rest of the expenses the project incurs, helping you make your film, and to ensure that everyone, regardless of their financial situation, is able to participate.

            ​</p>
            <h3><b>Thanks!</b></h3>
        </Router>
    </div>
);

export default Shop;
