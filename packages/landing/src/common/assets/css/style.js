import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
  .diagonal::after {
    position: absolute;
    transform: skewY( -5deg);
    width: 100%;
    left: 0;
    content: "";
    background: none repeat scroll 0 0 #fff;
    min-height: 170px;
    bottom: -106px;
  }

  .scrollspy__menu {
    li {
      a {
        &:hover {
          color: #352FD9;
        }
      }
      &.is-current {
        a {
          color: #352FD9;
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #352FD9;
            position: absolute;
            top: calc(50% - 8px / 2);
            left: -20px;
          }
        }
      }
    }
  }
  
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
  
  .preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999999999;
    background: transparent;
    top: 0;
    left: 0;
    .loader {
      position: absolute;
      top: 43%;
      left: 0;
      right: 0;
      transform: translateY(-43%);
      text-align: center;
      margin: 0 auto;
      width: 50px;
      height: 50px;
      transition: $transition;
      .box {
        width: 100%;
        height: 100%;
        background: $white-color;
        animation: animate .5s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
      }
      .shadow {
        width: 100%;
        height: 5px;
        background: #000000;
        opacity: 0.1;
        position: absolute;
        top: 59px;
        left: 0;
        border-radius: 50%;
        animation: shadow .5s linear infinite;
      }
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 60%;
      height: 100%;
      z-index: -1;
      background: $main-color;
      transition: .9s;
    }
    &::after {
      left: auto;
      right: 0;
    }
    &.preloader-deactivate {
      visibility: hidden;
      &::after,
      &::before {
        width: 0;
      }
      .loader {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
  @keyframes loader {
    0% {
      left: -100px;
    }
    100% {
      left: 110%;
    }
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
  .preloader-deactivate {
    display: block;
  }

`;
