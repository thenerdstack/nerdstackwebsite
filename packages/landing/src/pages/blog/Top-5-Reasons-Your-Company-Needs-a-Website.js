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
import BlogDetails from './Details-Top-5-Reasons-Your-Company-Needs-a-Website.js'

import BannerSection from 'containers/Portfolio/BannerBlogDetails';
import Navbar from 'containers/Portfolio/Navbar';
import Footer from 'containers/Portfolio/Footer';

import {
    CharGlobalStyle,
    CharityWrapper,
    CharContentWrapper,
  } from 'containers/portfolio/charity.style';
import { NextSeo } from 'next-seo'; 






const BlogD = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <NextSeo
            title="Nerd Stack | Top 5 Reasons Your Company Needs a Website"
            description="Starting a new company is very exciting, but it also comes with some stress and takes a lot of work."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/blog/Top-5-Reasons-Your-Company-Needs-a-Website',
                title: 'blog | Top 5 Reasons Your Company Needs a Website',
                description: 'Starting a new company is very exciting, but it also comes with some stress and takes a lot of work.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/blog-details/website-on-devices.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Desktop with laptop and tablet creating a website',
                },
                {
                    url: 'https://thenerdstack.com/images/blog-details/website-on-devices.jpg',
                    width: 900,
                    height: 800,
                    alt: 'Desktop with laptop and tablet creating a website',
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
          <BlogDetails />

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default BlogD;
