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
import BannerSection from 'containers/Portfolio/Banner';
import Navbar from 'containers/Portfolio/Navbar_Hamburger';
import ContactSection from 'containers/Portfolio/ContactAlt';
import Footer from 'containers/portfolio/Footer';
import AboutUs from 'containers/Portfolio/AboutUs';
import Project from 'containers/Portfolio/Project';
import {
  IntGlobalStyle,
  InteriorWrapper,
  IntContentWrapper,
} from 'containers/Portfolio/interior.style';
import { NextSeo } from 'next-seo'; 




const About = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
      <NextSeo
          title="Nerd Stack | About"
          description="We design and develop digital products and online experiences that help our clients grow, innovate, and transform."
          canonical="https://www.canonical.ie/"
          openGraph={{
              url: 'https://www.thenerdstack.com/',
              title: 'Nerd Stack | About Us',
              description: 'We design and develop digital products and online experiences that help our clients grow, innovate, and transform.',
              images: [
              {
                  url: 'https://thenerdstack.com/images/creative-workstation.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Notebook and computer at the desk',
              },
              {
                  url: 'https://thenerdstack.com/images/creative-workstation.jpg',
                  width: 900,
                  height: 800,
                  alt: 'Notebook and computer at the desk',
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
        <intGlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <InteriorWrapper>
            <IntContentWrapper>
              <AboutUs />
              <Project />
            </IntContentWrapper>
          </InteriorWrapper>
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default About;
