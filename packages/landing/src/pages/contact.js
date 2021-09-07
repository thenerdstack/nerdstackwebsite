import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/Portfolio/portfolio.style';

import BannerSection from 'containers/Portfolio/BannerContact';
import Navbar from 'containers/Portfolio/Navbar_Hamburger';
import ProcessSection from 'containers/Portfolio/Process';
import CallToAction from 'containers/Portfolio/CallToAction';
import Footer from 'containers/Portfolio/Footer';
import {
    CharGlobalStyle,
  } from 'containers/portfolio/charity.style';

import { NextSeo } from 'next-seo'; 






const Contact = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <NextSeo
            title="Nerd Stack | Contact"
            description="Contact Nerd Stack for all of you software development needs."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/contact',
                title: 'Nerd Stack | Contact',
                description: 'Contact Nerd Stack for all of you software development needs.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/creative-background-11.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Blue Dot Waves',
                },
                {
                    url: 'https://thenerdstack.com/images/creative-background-11.jpg',
                    width: 900,
                    height: 800,
                    alt: 'Blue Dot Waves',
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
        <CharGlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />

        
          <ProcessSection />
          <CallToAction/>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Contact;
