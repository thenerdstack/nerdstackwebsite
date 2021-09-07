import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NerdStackSVG from './NerdStack.js'
import BannerSection from '../BannerSection';
import BannerScrollStyle from './BannerScroll.style'

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import BannerBG from 'common/assets/image/portfolio/fiber-optics.png';


const BannerScroll = ({
    bg, 
    panel, 
    quote, 
    container,  
    bgBackground,
}) => {
  return (
    <BannerScrollStyle>
        <div className='bgBackground' id="bg" style={{...bgBackground}}>
            <div id="container" className="bg" style={{...bg, ...container}}>
                <section className="panel overlay" style={{...panel}}>
                    <NerdStackSVG/>
                </section>
            </div>
            <div id="container2" className="bg banner" style={{...bg, ...container}}>
                <section className="homepageBanner" style={{...panel, ...quote}}>
                    <BannerSection className="bannerEnd" />
                </section>
            </div>
        </div>
    </BannerScrollStyle>
  );
};


BannerScroll.propTypes = {
    bg: PropTypes.object,
    panel: PropTypes.object,
    quote: PropTypes.object,
    container:PropTypes.object,
    bgBackground:PropTypes.object,
  };
  
  BannerScroll.defaultProps = {
    bg: {
        backgroundSize: 'cover',
    },
    panel: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        fontSize: '1.5em',
        textAlign: 'center',
        color: 'white',
        boxSizing: 'border-box',
        overflow: 'hidden',
    },
    quote: {
        backgroundColor: 'transparent',
        zIndex: '2',
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
    },
    bgBackground: {
        backgroundColor: 'rgb(19 27 189)',
    },
  };
  


export default BannerScroll;
