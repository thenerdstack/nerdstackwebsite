import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/Portfolio/portfolio.style';
import BannerSection from 'containers/Portfolio/BannerServices';
import Navbar from 'containers/Portfolio/Navbar_Hamburger';
import ContactSection from 'containers/Portfolio/ContactAlt2';
import Footer from 'containers/Portfolio/Footer';
import Feature from 'containers/Portfolio/Feature';
import { NextSeo } from 'next-seo'; 






const Services = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <NextSeo
            title="Nerd Stack | Services"
            description="Nerd Stack offers a variety of services to better help suit your needs."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/services',
                title: 'Nerd Stack | Services',
                description: 'Nerd Stack offers a variety of services to better help suit your needs.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/javascript-code.jpeg',
                    width: 800,
                    height: 600,
                    alt: 'Javascript code on computer screen',
                },
                {
                    url: 'https://thenerdstack.com/images/javascript-code.jpeg',
                    width: 900,
                    height: 800,
                    alt: 'Javascript code on computer screen',
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
        {/* <IntGlobalStyle /> */}

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <BannerSection />
          
          <Feature />

          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Services;
