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
import BannerSection from 'containers/Portfolio/BannerProjects';
import Navbar from 'containers/Portfolio/Navbar_Hamburger';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/portfolio/Footer';
import {
    CharGlobalStyle,
    CharityWrapper,
    CharContentWrapper,
  } from 'containers/portfolio/charity.style';
import BranchSection from 'containers/Portfolio/BranchSection';
import WorkSection from 'containers/Portfolio/WorkSection';
import { NextSeo } from 'next-seo'; 






const Projects = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <NextSeo
            title="Nerd Stack | Projects"
            description="Past projects that Nerd Stack has worked on."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/projects',
                title: 'Nerd Stack | Projects',
                description: 'Past projects that Nerd Stack has worked on.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/website-on-computer.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Computer on desk with plant to the side',
                },
                {
                    url: 'https://thenerdstack.com/images/website-on-computer.jpg',
                    width: 900,
                    height: 800,
                    alt: 'Computer on desk with plant to the side',
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
        {/* <CharGlobalStyle /> */}

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />

          <CharityWrapper>
            <CharContentWrapper>
                <WorkSection />
                <BranchSection />
            </CharContentWrapper>
          </CharityWrapper>
          
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Projects;
