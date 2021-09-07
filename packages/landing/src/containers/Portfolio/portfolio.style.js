import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Line from 'common/assets/image/portfolio/dotted-line.png';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway', sans-serif;
    margin-top: 0;
  }

  section {
    position: relative;
  }


  .drawer-content-wrapper{
    @media (max-width: 767px) {
      // width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 500;
            color: #343d48;
            position: relative;
            font-family: 'Raleway', sans-serif;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
            &:before{
              content: '';
              position: absolute;
              width: calc(100% - 8px);
              height: 11px;
              background: #c2c7fb;
              bottom: 2px;
              left: -4px;
              z-index: -1;
              transform: scaleX(0);
              transform-origin: right center 0;
              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
            }
          }
          &.is-current {
            a {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
        font-family: 'Raleway', sans-serif;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #3444f1;
        transform: rotate(45deg);
        display: block;
      }
    }
  }

`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .sticky-nav-active {
    .portfolio_navbar {
      display: block;
      background: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;

      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
    }
  }
  .reusecore-drawer__handler {
    .drawer_btn {
    }
  }

  .portfolio_button {
    border-radius: 0;
    border: 2px solid ${themeGet('colors.borderColor', '#1b1e25')};
    background-color: transparent;
    position: relative;
    min-height: 50px;
    text-transform: initial;
    transition: 0.2s ease-in-out;
    &:before {
      content: '';
      background-color: ${themeGet('colors.primary', '#3444f1')};
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      display: block;
      z-index: -1;
      top: 8px;
      left: 8px;
      transition: inherit;
    }
    &:hover {
      border-color: transparent;
      &:before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .portfolio_navbar {
    // display:none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    min-height: 80px;
    padding: 50px 0 30px 0;
    @media (max-width: 990px) {
      padding: 30px 0;
    }
    .logo-alt {
      display: none;
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 20px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #fff;
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          position: relative;
          font-family: 'Raleway', sans-serif;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #fff;
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
          &:after {
            content: '';
            position: absolute;
            width: calc(100% - 8px);
            height: 11px;
            background: #3444f1;
            bottom: 6px;
            left: 0;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right center 0;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      button {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .sticky-nav-active {
    .portfolio_navbar {
      .main_menu {
        li {
          a {
            color: #302b4e;
            &:after {
              background: #c2c7fb;
            }
          }
        }
      }
    }
  }

  .process_item_col {
    &:nth-child(2),
    &:nth-child(3) {
      .process_item {
        &:before {
          content: '';
          background-image: url(${Line});
          width: 165px;
          height: 35px;
          display: block;
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          left: -165px;
          top: 20px;
          @media (max-width: 990px) {
            width: 100px;
            left: -80px;
          }
          @media (max-width: 767px) {
            display: none;
          }
        }
      }
    }
    &:nth-child(3) {
      .process_item {
        &:before {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const PrevButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #3444f1;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #d1d3de;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(-45deg);
      top: -4px;
      left: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(45deg);
      width: 8px;
      bottom: -6px;
      left: 1px;
    }
  }
`;

export const NextButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #3444f1;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #d1d3de;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(45deg);
      top: -4px;
      right: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(-45deg);
      width: 8px;
      bottom: -6px;
      right: 1px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export const ThreeDSections = styled.div`
  .full { height:100vh; background:#E0E0E0 }
  .half { height:50vh; background:#E0E0E0 }
  .mini { height:25vh; background:#E0E0E0 }

  /* first banner */

  .banner3d-1 {
      width:100%;
      perspective: 700px;
      -webkit-transform-style:flat; /* why would I do that? well there is a very strange bug with safari, and it fixed it... */
      transform-style: preserve-3d;
  }

  .banner3d-1-front {
      padding:50px;
      background:#222;
      transform: translatez(50px);
      transform-style: preserve-3d;
  }

  .banner3d-1-front:before {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #BFBFBF;
      top: -50px;
      transform-origin: center bottom;
      transform: rotatex(90deg);
  }

  .banner3d-1-front:after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #BFBFBF;
      bottom: -50px;
      transform-origin: center top;
      transform: rotatex(-90deg);
  }

  /* second banner */

  .banner3d-2 {
      width:100%;
      perspective: 700px;
      -webkit-transform-style:flat;
      transform-style: preserve-3d;
    z-index:-1;
  }

  .banner3d-2-front {
      padding:50px;
      background:#222;
      transform: translatez(-50px);
      transform-style: preserve-3d;
  }

  .banner3d-2-front:before {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #BFBFBF;
      top: -50px;
      transform-origin: center bottom;
      transform: rotatex(-90deg);
  }

  .banner3d-2-front:after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #BFBFBF;
      bottom: -50px;
      transform-origin: center top;
      transform: rotatex(90deg);
  }

  /* 3rd banner */

  .banner3d-3 {
      width:50%;
      perspective: 700px;
      -webkit-transform-style:flat;
      transform-style: preserve-3d;
  }

  .banner3d-3-front {
      padding:100px 25px;
      text-align:center;
      background:#222;
      transform: translatez(50px);
      transform-style: preserve-3d;
  }

  .banner3d-3-front:before {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #404040;
      top: -50px;
      transform-origin: center bottom;
      transform: rotatex(90deg);
  }

  .banner3d-3-front:after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #404040;
      bottom: -50px;
      transform-origin: center top;
      transform: rotatex(-90deg);
  }

  .image {
    width:50%;
    background:url(https://source.unsplash.com/IyaNci0CyRk/600x600) no-repeat;
    background-size:cover;
    background-position:center;
    box-shadow: inset 25px 0px 20px 10px rgba(0,0,0,0.41)
  }


  /* fourth banner */

  .banner3d-4 {
      width:60%;
      perspective: 700px;
      -webkit-transform-style:flat;
      transform-style: preserve-3d;
    z-index:-1;
  }

  .banner3d-4-front {
      padding:25px;
      background:#222;
      transform: translatez(-50px);
      transform-style: preserve-3d;
  }

  .banner3d-4-front:before {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #BFBFBF;
      top: -50px;
      transform-origin: center bottom;
      transform: rotatex(-90deg);
  }

  .banner3d-4-front:after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      height: 50px;
      background-color: #BFBFBF;
      bottom: -50px;
      transform-origin: center top;
      transform: rotatex(90deg);
  }

  .image2 {
    width:40%;
    background:url(https://source.unsplash.com/gJJhG4gM7NA/600x600) no-repeat;
    background-size:cover;
    background-position:center center;
    border:20px solid #E0E0E0;
    box-sizing:border-box;
  }

  @media (max-width: 991px) {
    section {
      font-size:2em;
    }
    .banner {
      flex-direction:column
    }
    .banner3d-3, .banner3d-4 {
      width:100%
    }
    .image, .image2 {
      width:100%;
      height:300px;
    }
  }
`;