import React from 'react';

import Button from '@material-ui/core/Button';

const rowDivStyle = {
    textAlign: 'left'
};

const colDivStyle = {
    textAlign: 'left'
};

const Cameras = () => (
    <div>
        <h1>Camera Manuals</h1>
        <div>
            <div style={rowDivStyle}>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Canon Auto
                        Zoom 814
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Sankyo
                        XL 300
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Yashica LD8
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Minolta XL Sound 84
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        GAF XL415
                    </Button>
                </div>
            </div>

            <div style={rowDivStyle}>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Nizo S40
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        GAF SS805
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        GAF 505XLM
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Kodak M4
                    </Button>
                </div>
                <div style={colDivStyle}>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        Canon 310XL
                    </Button>
                </div>
            </div>

            <div style={rowDivStyle}>
                <div>
                    <img src={require('../img/icon_PDF.jpg')} alt='Icon of PDF file' />
                    <Button
                        size="large"
                        color="primary"
                        href="/Donate"
                    >
                        GAF802 Manual
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

export default Cameras;