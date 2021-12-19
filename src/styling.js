import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

export default function Styling(props) {
    const { forComponent, getBgColor, getHeadingColor, getContentColor, getdivHeight, getheadingFont, getcontentFont } = props;
       const [bgcolor, setBgColor] = useState("#ffffff");
        const [headingcolor, setHeadingColor] = useState("#000000");
        const [contentcolor, setContentColor] = useState("#000000");
    const [divHeight, setDivHeight] = useState(250);
    const [headingFont, setHeadingFont] = useState(20);
    const [contentFont, setContentFont] = useState(20);


    const setHeightofDiv = (value) => {
        setDivHeight(value);
        getdivHeight(value);
    }
    const setFontOfHeading = (value) => {
        setHeadingFont(value);
        getheadingFont(value);
    }
    const setFontOfContent = (value) => {
        setContentFont(value);
        getcontentFont(value);
    }
    const setColorOfBg = (value)=>{
        setBgColor(value);
        getBgColor(value);
    }
    const setColorOfHeading = (value)=>{
        setHeadingColor(value);
        getHeadingColor(value);
    }
    const setColorOfContent = (value)=>{
        setContentColor(value);
        getContentColor(value);
    }
    return (
        <div className='custom-styling'>
            <div className='row'>
                <div className='col-md-4'>
                    <label className ="small-font" for="favcolor">BG color: </label>

                </div>
                <div className='col-md-8'>
                    <input type="color" value={bgcolor} onChange={e => setColorOfBg(e.currentTarget.value)} />
                </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <label className ="small-font" for="font size">Div height</label>

                </div>
                <div className='col-md-8'>
                    <RangeSlider
                        value={divHeight}
                        onChange={e => setHeightofDiv(e.target.value)}
                        min={1}
                        max={500}
                        step={7}
                    />
                </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <label className ="small-font" for="favcolor"> Heading color: </label>

                </div>
                <div className='col-md-8'>
                    <input type="color" value={headingcolor} onChange={e => setColorOfHeading(e.target.value)} />
                </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <label  className ="small-font" for="font size">Heading font</label>

                </div>
                <div className='col-md-8'>
                    <RangeSlider
                        value={headingFont}
                        onChange={e => setFontOfHeading(e.target.value)}
                        min={1}
                        max={100}
                        step={7}
                    />
                </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <label  className ="small-font" for="favcolor"> Content color: </label>

                </div>
                <div className='col-md-8'>
                    <input type="color" value={contentcolor} onChange={e => setColorOfContent(e.target.value)} />
                </div>

            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <label className ="small-font" for="font size">Content font-size</label>

                </div>
                <div className='col-md-8'>
                    <RangeSlider
                        value={contentFont}
                        onChange={e => setFontOfContent(e.target.value)}
                        min={1}
                        max={100}
                        step={7}
                    />
                </div>

            </div>
        </div>
    )
}