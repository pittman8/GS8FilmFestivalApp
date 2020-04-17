import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Contact from './Contact';
import Subscribe from './Subscribe';
import styles from '../css/styles';
import $ from 'jquery';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    DotGroup,
    Image,
    Slide,
    Slider,
} from 'pure-react-carousel';
import s from '../css/Example6.scss';


const imgStyle = {
    maxWidth: '100%',
    height: 'auto'
};

styles.vidList.width = '1680px';
//'1680px' Each video thumb img is 168px wide so 168x10=1680px.
// When we pull data from the DB we need to calculate this number and set the carouse styles.vidList.width: ****px

const Home = () => (
    <div style={styles.parentDivStyle}>
        <img
            src={require('../img/MyPost.jpg')}
            alt="The Georgetown Super 8 Film Festival logo"
            style={imgStyle}
        />
        <h1>Thank you for making GS8 2019 a Success!</h1>

        <h1>Video Archive 2019</h1>
        <div className="vid-container" style={styles.vidContainer}>
            <iframe id="vid_frame"
                    style={styles.vidContainerIframe}
                    title="Cute and funny cat videos"
                    src="http://www.youtube.com/embed/QtC3Bo9B0yI?rel=0&showinfo=0&autohide=1"
                    frameBorder="0"
                    width="560"
                    height="315">
            </iframe>
        </div>

        <div className = "vid-list-container" style={styles.vidListContainer}>
            <div className = "vid-list" style={styles.vidList}>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='https://www.youtube.com/embed/QtC3Bo9B0yI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/QtC3Bo9B0yI/0.jpg" alt="Cute and funny cat videos"/></div>
                    <div className="desc" style={styles.desc}>THE BEST CUTE AND FUNNY CAT VIDEOS OF 2019!</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='https://www.youtube.com/embed/AcL0MeVZIxM?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/AcL0MeVZIxM/0.jpg" alt="Funny Dog Video"/></div>
                    <div className="desc" style={styles.desc}>Try Not To Laugh At This Ultimate Funny Dog Video Compilation</div>
                </div>
                <div
                    className="vid-item"
                    style={styles.vidItem}
                    onClick={() => {
                        document.getElementById('vid_frame').src='http://youtube.com/embed/eg6kNoJmzkY?autoplay=1&rel=0&showinfo=0&autohide=1'}
                    }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/eg6kNoJmzkY/0.jpg" alt="Jessica Hernandez & the Deltas - Dead Brains"></img></div>
                    <div className="desc" style={styles.desc}>Jessica Hernandez & the Deltas - Dead Brains</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg" alt="Barbatuques"></img></div>
                    <div className="desc" style={styles.desc}>Barbatuques - CD Tum P&aacute; - Sambalel&ecirc;</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/F1f-gn_mG8M?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/F1f-gn_mG8M/0.jpg" alt="Eleanor Turner plays Baroque Flamenco"></img></div>
                    <div className="desc" style={styles.desc}>Eleanor Turner plays Baroque Flamenco</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/fB8UTheTR7s?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/fB8UTheTR7s/0.jpg" alt="Sleepy Man Banjo Boys: Bluegrass"></img></div>
                    <div className="desc" style={styles.desc}>Sleepy Man Banjo Boys: Bluegrass</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/0SNhAKyXtC8?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/0SNhAKyXtC8/0.jpg" alt="Edmar Castaneda: NPR Music Tiny Desk Concert"></img></div>
                    <div className="desc" style={styles.desc}>Edmar Castaneda: NPR Music Tiny Desk Concert</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/RTHI_uGyfTM?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/RTHI_uGyfTM/0.jpg" alt="Winter Harp performs Caravan"></img></div>
                    <div className="desc" style={styles.desc}>Winter Harp performs Caravan</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/abQRt6p8T7g?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/abQRt6p8T7g/0.jpg" alt="The Avett Brothers Tiny Desk Concert"></img></div>
                    <div className="desc" style={styles.desc}>The Avett Brothers Tiny Desk Concert</div>
                </div>

                <div className="vid-item"
                     style={styles.vidItem}
                     onClick={() => {
                         document.getElementById('vid_frame').src='http://youtube.com/embed/fpmN9JorFew?autoplay=1&rel=0&showinfo=0&autohide=1'}
                     }>
                    <div className="thumb" style={styles.thumb}><img src="http://img.youtube.com/vi/fpmN9JorFew/0.jpg" alt="Tracy Chapman - Give Me One Reason"></img></div>
                    <div className="desc" style={styles.desc}>Tracy Chapman - Give Me One Reason</div>
                </div>
            </div>
        </div>

        <div className="arrows">
            <div className="arrow-left"
                onClick={() => {
                    $(".vid-list-container").stop().animate({
                        scrollLeft: "-=672"
                    }, 750);
                }}>
                &#8678;
            </div>
            <div className="arrow-right"
                 onClick={() => {
                     $(".vid-list-container").stop().animate({
                         //scrollLeft: "+=1512"
                         scrollLeft: "+=672"
                     }, 750);
                 }}>
                &#8680;
            </div>
        </div>

        <div>
            <h1>Joseph's Video pure-react-carousel</h1>
            <div className="vid-container" style={styles.vidContainer}>
                <iframe id="vid_frame2"
                        style={styles.vidContainerIframe}
                        title="Cute and funny cat videos"
                        src="http://www.youtube.com/embed/QtC3Bo9B0yI?rel=0&showinfo=0&autohide=1"
                        frameBorder="0"
                        width="560"
                        height="315">
                </iframe>
            </div>
            <div>
                <CarouselProvider
                    visibleSlides={4.5}
                    totalSlides={10}
                    step={4}
                    naturalSlideWidth={400}
                    naturalSlideHeight={400}
                    hasMasterSpinner
                >
                    <h2 className={s.headline}>2019 Simple Carousel</h2>

                    <div className={s.container}>
                        <Slider className={s.slider}>
                            <Slide index={0}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='https://www.youtube.com/embed/QtC3Bo9B0yI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}>
                                        <Image src="http://img.youtube.com/vi/QtC3Bo9B0yI/0.jpg" alt="Cute and funny cat videos"/>
                                    </div>
                                    <div className="desc" style={styles.desc}>THE BEST CUTE AND FUNNY CAT VIDEOS OF 2019!</div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='https://www.youtube.com/embed/AcL0MeVZIxM?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/AcL0MeVZIxM/0.jpg" alt="Funny Dog Video"/></div>
                                    <div className="desc" style={styles.desc}>Try Not To Laugh At This Ultimate Funny Dog Video Compilation</div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame2').src='http://youtube.com/embed/eg6kNoJmzkY?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/eg6kNoJmzkY/0.jpg" alt="Jessica Hernandez & the Deltas - Dead Brains"></Image></div>
                                    <div className="desc" style={styles.desc}>Jessica Hernandez & the Deltas - Dead Brains</div>
                                </div>
                            </Slide>
                            <Slide index={3}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg" alt="Barbatuques"></Image></div>
                                    <div className="desc" style={styles.desc}>Barbatuques - CD Tum P&aacute; - Sambalel&ecirc;</div>
                                </div>
                            </Slide>
                            <Slide index={4}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/F1f-gn_mG8M?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/F1f-gn_mG8M/0.jpg" alt="Eleanor Turner plays Baroque Flamenco"></Image></div>
                                    <div className="desc" style={styles.desc}>Eleanor Turner plays Baroque Flamenco</div>
                                </div>
                            </Slide>
                            <Slide index={5}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/fB8UTheTR7s?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/fB8UTheTR7s/0.jpg" alt="Sleepy Man Banjo Boys: Bluegrass"></Image></div>
                                    <div className="desc" style={styles.desc}>Sleepy Man Banjo Boys: Bluegrass</div>
                                </div>
                            </Slide>

                            <Slide index={6}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/0SNhAKyXtC8?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/0SNhAKyXtC8/0.jpg" alt="Edmar Castaneda: NPR Music Tiny Desk Concert"></Image></div>
                                    <div className="desc" style={styles.desc}>Edmar Castaneda: NPR Music Tiny Desk Concert</div>
                                </div>
                            </Slide>
                            <Slide index={7}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/RTHI_uGyfTM?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/RTHI_uGyfTM/0.jpg" alt="Winter Harp performs Caravan"></Image></div>
                                    <div className="desc" style={styles.desc}>Winter Harp performs Caravan</div>
                                </div>
                            </Slide>
                            <Slide index={8}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/abQRt6p8T7g?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/abQRt6p8T7g/0.jpg" alt="The Avett Brothers Tiny Desk Concert"></Image></div>
                                    <div className="desc" style={styles.desc}>The Avett Brothers Tiny Desk Concert</div>
                                </div>
                            </Slide>
                            <Slide index={9}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame2').src='http://youtube.com/embed/fpmN9JorFew?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}><Image src="http://img.youtube.com/vi/fpmN9JorFew/0.jpg" alt="Tracy Chapman - Give Me One Reason"></Image></div>
                                    <div className="desc" style={styles.desc}>Tracy Chapman - Give Me One Reason</div>
                                </div>
                            </Slide>

                        </Slider>
                        <ButtonBack className={s.buttonBack}><h1>&lt;</h1></ButtonBack>
                        <ButtonNext className={s.buttonNext}><h1>&gt;</h1></ButtonNext>
                    </div>
                    <DotGroup className={s.dotGroup} />
                </CarouselProvider>
            </div>
        </div>

        <Card style={styles.cardStyle}>
            <h2>Little Films for the Big Picture</h2>
            <p style={styles.pStyle}>
                Georgetown Super 8 is dedicated to the creation and sharing of
                amateur super 8 films to foster inclusive dialogue, ensuring a
                Cardersity of community voices can define, document, and tell
                the story of their neighborhood.
            </p>
            <Button variant="contained" style={styles.divButtonStyle}>
                Learn More
            </Button>
        </Card>
        <Contact />
        <Card style={styles.cardStyle}>
            <p>Missing banner image</p>
            <h2 style={styles.titleStyle}>Thank you to our 2019 Donors</h2>
            <img
                src={require('../img/2018sponsors.jpg')}
                alt="2018 sponsors"
                style={imgStyle}
            />
        </Card>
        <p>Map goes here</p>
        {/* API key AIzaSyDizypkVSGXwtOacsa73GX0DcqSE6l5KAg  */}

        <Subscribe />
    </div>
);

export default Home;
