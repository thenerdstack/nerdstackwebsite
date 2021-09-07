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
import BannerSection from 'containers/Portfolio/BannerBlog';
import Navbar from 'containers/Portfolio/Navbar_Hamburger';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/Portfolio/Footer'
import Team from 'containers/Portfolio/Team';
import { NextSeo } from 'next-seo'; 






const Blog = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <NextSeo
            title="Nerd Stack | Blog"
            description="Nerd Stack blog."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/blog',
                title: 'Nerd Stack | Blog',
                description: 'Nerd Stack blog.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/geo-shapes.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Geo shapes',
                },
                {
                    url: 'https://thenerdstack.com/images/geo-shapes.jpg',
                    width: 900,
                    height: 800,
                    alt: 'Geo shapes',
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
            <Team />

          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Blog;
