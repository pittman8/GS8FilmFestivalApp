import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../css/slideshow.css';

const imageSrc = [
    '../img/slide2.webp',
    '../img/slide5.webp',
    '../img/slide6.webp',
    '../img/slide7a.webp',
    '../img/slide7b.webp',
    '../img/slide7c.webp'
];

const slide1 = (
    <iframe
        width="100%"
        height="100%"
        class="iframe"
        title="video1"
        src="https://www.youtube.com/embed/N7OCSw9w-IA"
        align="center"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
);

const slide2 = (
    <div>
        <img src={imageSrc[0]} alt="slide2" />
        <div>
            <h3>Planning Your Film</h3>
            <ul>
                <li>-Your film is 3 minutes and 26 seconds</li>
                <li>-Keep it simple</li>
                <li>-Start with a basic idea, concept, or genre</li>
                <li>-Get friends and neighbors to help you</li>
            </ul>
        </div>
    </div>
);

const slide3 = (
    <div>
        <h2>Terms & Key Points</h2>
        <p>
            <u>
                <b>Camera Function</b>
            </u>
        </p>
        <ul>
            <li> Fps= frames per second (18 normal, 24+ is slow motion)</li>

            <li>
                {' '}
                Fader= Button that you push to make your film fade to black
            </li>

            <li> Macro= focusing on close subjects (approx 3 feet and less)</li>

            <li>
                {' '}
                Single Frame= takes only one frame, for animation or time lapse
            </li>

            <li>
                {' '}
                RL or Run Lock= keeps your film running even after you stop
                holding the trigger
            </li>
        </ul>

        <p>
            <u>
                <b>Camera Notes</b>
            </u>
        </p>

        <p>
            Focusing by Distance
            <br />
            ALWAYS use distance focusing when using a super 8 camera because it
            tends to be more reliable than the calibration in the viewfinder.
            The outer ring of the lens has distance markings in feet. Just
            estimate how far your subject is and then set the focusing ring to
            that distance for shooting.
            <br />
            <br />
            Film Counter
            <br />
            All cameras have a film counter to let you know how much of your 50
            feet of film (one roll of super 8) you have used. When you open the
            camera to load or unload film, it sets this counter to zero.
            <br />
            <br />
            Shutter Speed (FPS = frames per second)
            <br />
            Many of the cameras have multiple settings for shutter speed.{' '}
            <b>
                18 fps is what you should select if you want a film running in
                normal time.
            </b>{' '}
            24 fps will give a slight slow motion effect and 36 fps will look
            like true slow motion. A faster fps (12fps) will make the film look
            slightly faster than normal).
            <br />
            <br />
            Run Lock
            <br />
            Many cameras have a run/ lock or R-L function. By setting this
            device, you can continue filming without having to keep your finger
            on the trigger.
            <br />
            <br />
            Fade
            <br />
            Some cameras have a fade button, which will allow you to have your
            scene fade to black.
            <br />
            <br />
            Single Frame
            <br />
            A few cameras have the single frame function, which allows you to
            take one frame at a time. This is useful for time lapse or slow
            motion effects.
            <br />
            <br />
            Macro
            <br />
            Some cameras have a macro function, which allows you to focus at 3
            or less feet away. Consult a manual about this function.
        </p>
    </div>
);

const slide4 = (
    <div>
        <h3>Preparing to Shoot</h3>
        <h4>A video</h4>
        <h4>
            After setting your camera to 18fps and turning on the light meter:
            <br />
            <b>L</b>oad your film
            <br />
            <b>M</b>easure the distance to your subject and set the focus ring
            <br />
            <b>A</b>djust for lighting
            <br />
            <b>O</b>perate the camera by turning it on and pressing the trigger
        </h4>
    </div>
);

const slide5 = (
    <div>
        <img src={imageSrc[1]} alt="slide5" />

        <div>
            <h3>Lighting Rules</h3>
            <p>
                • Do not light your subject from behind unless you want it to be
                a silhouette.
                <br />
                <br />​ • Do not rely on the indoor lights you have in your
                ceiling, direct lighting using movie lights or clip lamps will
                keep the scene properly lit and eliminate weird shadows.
                <br />
                <br />
                • Bright, sunny days tend to make weird shadows on your
                subjects. Bright, but overcast days are best. and tend to create
                soft, even lighting.
                <br />
                <br />• Pay attention to your lighting. A good morning sunrise
                or sunset can make for great light as can carefully placed lamps
                in your scene.
            </p>
        </div>
    </div>
);

const slide6 = (
    <div>
        <h3>Knowing When the Film is Done</h3>
        <img src={imageSrc[2]} alt="slide6" />
        <h4>You have 50 feet of film which is 3 minutes and 26 seconds</h4>
        <p>
            Most cameras have a footage counter that counts the <br />
            number of feet you have shot. If you open the film
            <br /> door, this counter resets to zero.
            <br />
            <br />
            When your film is finished it will say "EXPOSED" on the <br />
            >film or there will be unusual notches in the film end.
        </p>
    </div>
);

const slide7 = (
    <div>
        <img src={imageSrc[3]} alt="slide7a" />
        <p>
            1. Turn off your camera and put the label on your film with your
            first and last name
        </p>
        <img src={imageSrc[4]} alt="slide7b" />
        <p>2. Put your camera and film in the bag.</p>
        <img src={imageSrc[5]} alt="slide7c" />
        <p>3. Drop it off at the All City Coffee Drop Box by 4pm on Sunday. </p>
    </div>
);

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
};

const Slideshow = (
    <div className="slide-container">
        <Fade {...fadeProperties}>
            <div className="each-fade">{slide1}</div>
            <div className="each-fade">{slide2}</div>
            <div className="each-fade">{slide3}</div>
            <div className="each-fade">{slide4}</div>
            <div className="each-fade">{slide5}</div>
            <div className="each-fade">{slide6}</div>
            <div className="each-fade">{slide7}</div>
        </Fade>
    </div>
);
export default Slideshow;
