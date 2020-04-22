import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Contact from './Contact';
import Subscribe from './Subscribe';
import styles from '../css/styles';


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
import CSVReader from 'react-csv-reader';
import s from '../css/carousel.scss';


const imgStyle = {
    maxWidth: '100%',
    height: 'auto'
};

const Home = () => (
    <div style={styles.parentDivStyle}>
        <img
            src={require('../img/MyPost.jpg')}
            alt="The Georgetown Super 8 Film Festival logo"
            style={imgStyle}
        />
        <h1>Thank you for making GS8 2019 a Success!</h1>


        <div>
            <h1>Film Gallery</h1>
            <h2 className={s.headline}>2020 Films</h2>
            <div className="vid-container" style={styles.vidContainer}>
                <iframe id="vid_frame"
                        style={styles.vidContainerIframe}
                        title="Figure Man Written by Anthony Thambynayagam"
                        src="http://www.youtube.com/embed/pjMlCHCufrA?rel=0&showinfo=0&autohide=1"
                        frameBorder="0"
                        width="100%"
                        height="315">
                </iframe>
            </div>
            <br/>
            <div>
                <CarouselProvider
                    visibleSlides={4.12}
                    totalSlides={10}
                    step={4}
                    naturalSlideWidth={425}
                    naturalSlideHeight={500}
                    hasMasterSpinner
                >
                    <div  style={{position: 'relative', width: '700px', margin: 'auto'}}>

                        <Slider className={s.slider}>
                            <Slide index={0}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='https://www.youtube.com/embed/pjMlCHCufrA?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/pjMlCHCufrA/0.jpg"
                                            alt="Figure Man Written by Anthony Thambynayagam"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Figure Man Written by Anthony Thambynayagam
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={1}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='https://www.youtube.com/embed/mCbqDuNgMp4?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/mCbqDuNgMp4/0.jpg"
                                            alt="The Best Day of My Life by Jason Austin"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        The Best Day of My Life by Jason Austin
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={2}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='http://youtube.com/embed/DVJU9-3QHzE?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/DVJU9-3QHzE/0.jpg"
                                            alt="Untitled by Nolan Gonzalez"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Untitled by Nolan Gonzalez
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={3}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='http://youtube.com/embed/OgovstrZ5OU?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/OgovstrZ5OU/0.jpg"
                                            alt="Ernest Argyros 2"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Ernest Argyros 2
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={4}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame').src='http://youtube.com/embed/gt9pDsYuubI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/gt9pDsYuubI/0.jpg"
                                            alt="Public Grief by Ali Rowenna"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>Our Usual Table by La Dele Sines and Alan Phillips
                                        Public Grief by Ali Rowenna
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={5}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='http://youtube.com/embed/hXyDYJLn_sE?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/hXyDYJLn_sE/0.jpg"
                                            alt="Surprise in the Freezer by Corrie Greening"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Surprise in the Freezer by Corrie Greening
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={6}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='http://youtube.com/embed/UURuEgH2yqw?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/UURuEgH2yqw/0.jpg"
                                            alt="Block Party by Clint Berquist Music by DUBCAR"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Block Party by Clint Berquist Music by DUBCAR
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={7}>
                                <div
                                    className="vid-item"
                                    style={styles.vidItem}
                                    onClick={() => {
                                        document.getElementById('vid_frame').src='http://youtube.com/embed/JTDctcyssJM?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                    }
                                >
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/JTDctcyssJM/0.jpg"
                                            alt="Our Usual Table by La Dele Sines and Alan Phillips"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Our Usual Table by La Dele Sines and Alan Phillips
                                    </div>
                                </div>
                            </Slide>

                            <Slide index={8}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame').src='http://youtube.com/embed/jSgNTYQtolI?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/jSgNTYQtolI/0.jpg"
                                            alt="Leap Year MMXX by Angelina Tolentino"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        Leap Year MMXX by Angelina Tolentino
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={9}>
                                <div className="vid-item"
                                     style={styles.vidItem}
                                     onClick={() => {
                                         document.getElementById('vid_frame').src='http://youtube.com/embed/3ODq0UvATTc?autoplay=1&rel=0&showinfo=0&autohide=1'}
                                     }>
                                    <div className="thumb" style={styles.thumb}>
                                        <Image
                                            src="http://img.youtube.com/vi/3ODq0UvATTc/0.jpg"
                                            alt="The Big Con by Augie Pagan"
                                        />
                                    </div>
                                    <div className="desc" style={styles.desc}>
                                        The Big Con by Augie Pagan
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <h2>&lt;</h2>
                        <ButtonBack
                            className="buttonBack"
                            style={styles.buttonBack}
                        >
                            <img src={require('../img/btn-back.jpg')}/>
                        </ButtonBack>
                        <ButtonNext className="buttonNext" style={styles.buttonNext}><h2>&gt;</h2></ButtonNext>
                    </div>
                    <DotGroup className="dotGroup" style={styles.dotGroup}/>

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
