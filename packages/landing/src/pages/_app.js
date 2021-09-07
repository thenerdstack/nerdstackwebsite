import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'swiper/swiper-bundle.css';
import 'common/assets/css/icon-example-page.css';
import Preloader from 'common/components/Preloader';

import App from 'next/app';
import React from 'react';

// import React, { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
      return {
          pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
  }



//   // Preloader
//   state = {
//       loading: true
//   };

  
//   componentDidMount() {
//       this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
//   }
//   componentWillUnmount() {
//       if (this.timerHandle) {
//           clearTimeout(this.timerHandle);
//           this.timerHandle = 0;
//       }
//   }
  
  render () {
      const { Component, pageProps } = this.props
      return (
          <React.Fragment>
              <Component {...pageProps} />
              
              {/* Preloader */}
              {/* <Preloader loading={this.state.loading} /> */}

              {/* Go Top Button */}
              {/* <GoTop scrollStepInPx="50" delayInMs="10.50" /> */}
          </React.Fragment>
      );
  }
}