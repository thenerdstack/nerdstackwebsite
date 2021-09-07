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
import BlogDetails from './Details-What-is-Blockchain-Technology'
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
            title="Nerd Stack | Why Online Branding is Important for Your Business"
            description="Your website is likely the way that new customers are going to find your company. They will find you online through search engines, social media, or a direct visit to your website after learning about you from a friend/client."
            // canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.thenerdstack.com/blog/What-is-Blockchain-Technology',
                title: 'What is Blockchain technology and how is it used?',
                description: 'Your website is likely the way that new customers are going to find your company. They will find you online through search engines, social media, or a direct visit to your website after learning about you from a friend/client.',
                images: [
                {
                    url: 'https://thenerdstack.com/images/blog-details/blockchain.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Orange that is blue',
                },
                {
                    url: 'https://thenerdstack.com/images/blog-details/blockchain.jpg',
                    width: 900,
                    height: 800,
                    alt: 'Blue Orange',
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
