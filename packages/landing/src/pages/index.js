import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/Portfolio/portfolio.style';
import { HomePageStyle } from 'containers/Portfolio/homepage.style';
import BannerSection from 'containers/Portfolio/BannerSection';
import BannerScroll from 'containers/Portfolio/BannerScrollSection/BannerScroll.js';
import Navbar from 'containers/Portfolio/Navbar_Hamburger';
import PortfolioShowcase from 'containers/Portfolio/PortfolioShowcase';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/Portfolio/Footer';
import { TopSectionWrapper } from 'containers/Portfolio/topSection.style';
import FeatureSection from 'containers/Portfolio/FeatureSection';
import AboutUsSection from 'containers/Portfolio/AboutUsSection';
import { NextSeo } from 'next-seo'; 

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';




const Main = () => {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.overlay', {
        duration: 2,
        scale: 90,
        autoAlpha: 0,
        ease: 'power2.in',
        scrollTrigger: {
            trigger: '#container',
            start: 'top top',
            end: '+=2500',
            anticipatePin: true,
            pin: true,
            scrub: true,
    }
    });

    gsap.to('.homepageBanner', {
        duration: 5,
        // scale: 90,
        autoAlpha: 1,
        ease: 'expo.inOut',
        stagger: {
            amount: 1
        },
        scrollTrigger: {
            trigger: '#container2',
            start: 'top top',
            end: '+=3500',
            anticipatePin: true,
            pin: true,
            scrub: true,
        }
    });

    ///COMPUTER ANIMATION
    let computer = gsap.timeline();
    ScrollTrigger.create({
        animation: computer,
        trigger: ".computer",
        start: "top top",
        end: "35% 100%",
        scrub: 3,
    });

    computer.fromTo(".computer", { y: 900 }, { y: 0 }, 0.1)

    /* Copyright (c) 2020 by Craig Roblewsky (https://codepen.io/PointC/pen/KRWgOK) for code used below */
    const ratio = 0.5625;

    function newSize() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        if (w > h * (16 / 9)) {
            gsap.set("#pin-overlay", { attr: { width: w, height: w * ratio } });
        } else {
            gsap.set("#pin-overlay", { attr: { width: h / ratio, height: h } });
        }

    }

    newSize();
    window.addEventListener("resize", newSize);

    //reset scrollbar position after refresh
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}, [])

  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <NextSeo
            title="Nerd Stack | Software Development Agency"
            description="Nerd Stack is a full service digital agency specializing in web development, mobile application development, digital consulting, web design & UI/UX."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/',
                title: 'Nerd Stack | Software Development Agency',
                description: 'Nerd Stack is a full service digital agency specializing in web development, mobile application development, digital consulting, web design & UI/UX.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/creative-background-13.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Circuit board',
                },
                {
                    url: 'https://thenerdstack.com/images/creative-background-13.jpg',
                    width: 900,
                    height: 800,
                    alt: 'Circuit board',
                },
                // { url: 'https://www.example.ie/og-image-03.jpg' },
                // { url: 'https://www.example.ie/og-image-04.jpg' },
                ],
                site_name: 'Nerd Stack',
            }}
            twitter={{
                handle: '@TheNerdStack',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />

        <ResetCSS />
        <GlobalStyle />
        <HomePageStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <TopSectionWrapper>
            <BannerScroll />
            <AboutUsSection />
            <FeatureSection />
          </TopSectionWrapper>  

          <PortfolioShowcase />

          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
