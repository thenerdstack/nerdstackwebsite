import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BannerBG from 'common/assets/image/portfolio/fiber-optics.png';

const BannerWrapper = styled.section`

.area{
  background: rgb(19 27 189);  
  width: 100%;
  height:100%;
  minHeight: 100vh;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
  
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



//TYPING ANIMATION

.typing {
position: relative;
}
.typing::after {
content: "|";
position: absolute;
right: 0;
width: 100%;
color: white;
background: #1d1f20;
animation: typing 4s steps(20) forwards, caret 1s infinite;
}
@keyframes typing {
to {
  width: 0;
}
}
@keyframes caret {
50% {
  color: transparent;
}
}

// @media (min-width: 990px) {
  @keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
  }

  @keyframes writeLine {
      0% {
        clip-path: polygon(0 0, 0 100%, 0 100%, 0 0);
    }
      100% {
        clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
    }
  }
  @keyframes keydown {
      0% {
        fill-opacity: 0.1;
    }
      15% {
        fill-opacity: 0.3;
    }
      30% {
        fill-opacity: 0.1;
    }
  }
  @keyframes appOpen {
      0% {
        opacity: 0;
        transform: scale(0.3);
    }
      30% {
        opacity: 1;
    }
      100% {
        opacity: 1;
        transform: scale(1);
    }
  }

  .mac-wrapper {
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    margin-bottom: 40px;
  }
  .mac-wrapper svg {
    height: auto;
  }
  .mac-wrapper svg #CodeEditorWindow {
    display: none;
  }
  .mac-wrapper.start #CodeEditorWindow {
    display: block;
    animation: 0.5s ease-out 0s 1 normal forwards appOpen, 0.5s ease-out 27s 1 reverse forwards appOpen;
    transform-origin: center center;
  }
  .mac-wrapper.start [id^="codeline"] {
    clip-path: polygon(0 0, 0 100%, 0 100%, 0 0);
    animation: writeLine 1s linear forwards;
  }
  .mac-wrapper.start #codeline1 {
    animation-delay: 1s;
  }
  .mac-wrapper.start #codeline2 {
    animation-delay: 2s;
  }
  .mac-wrapper.start #codeline3 {
    animation-delay: 3s;
  }
  .mac-wrapper.start #codeline4 {
    animation-delay: 4s;
  }
  .mac-wrapper.start #codeline5 {
    animation-delay: 5s;
  }
  .mac-wrapper.start #codeline6 {
    animation-delay: 6s;
  }
  .mac-wrapper.start #codeline7 {
    animation-delay: 7s;
  }
  .mac-wrapper.start #codeline8 {
    animation-delay: 8s;
  }
  .mac-wrapper.start #codeline9 {
    animation-delay: 9s;
  }
  .mac-wrapper.start #codeline10 {
    animation-delay: 10s;
  }
  .mac-wrapper.start #codeline11 {
    animation-delay: 11s;
  }
  .mac-wrapper.start #codeline12 {
    animation-delay: 12s;
  }
  .mac-wrapper.start #codeline13 {
    animation-delay: 13s;
  }
  .mac-wrapper.start #codeline14 {
    animation-delay: 14s;
  }
  .mac-wrapper.start #codeline15 {
    animation-delay: 15s;
  }
  .mac-wrapper.start #codeline16 {
    animation-delay: 16s;
  }
  .mac-wrapper.start #codeline17 {
    animation-delay: 17s;
  }
  .mac-wrapper.start #codeline18 {
    animation-delay: 18s;
  }
  .mac-wrapper.start #codeline19 {
    animation-delay: 19s;
  }
  .mac-wrapper.start #codeline20 {
    animation-delay: 20s;
  }
  .mac-wrapper.start #codeline21 {
    animation-delay: 21s;
  }
  .mac-wrapper.start #codeline22 {
    animation-delay: 22s;
  }
  .mac-wrapper.start #codeline23 {
    animation-delay: 23s;
  }
  .mac-wrapper.start #codeline24 {
    animation-delay: 24s;
  }
  .mac-wrapper.start #codeline25 {
    animation-delay: 25s;
  }
  .mac-wrapper.start #codeline26 {
    animation-delay: 26s;
  }
  .mac-wrapper.start #keyboard42 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1404ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard13 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1632ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard43 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1861ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard34 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1758ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard1 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1432ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard16 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1238ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard9 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1035ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard14 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1123ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard12 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1103ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard14 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1779ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard26 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1724ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard41 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1506ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard40 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1251ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard16 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1517ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard19 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1512ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard15 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1126ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard26 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1205ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard11 {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 1272ms;
    animation-iteration-count: 26;
  }
  .mac-wrapper.start #keyboard-return {
    animation-name: keydown;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-iteration-count: 26;
  }  
// }


  .cont {
    height: 100vh;
    display: flex;
    text-align: left;
  }

  #bg{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  height: 100%;
  width: 100%;
  // padding-top: 210px;
  // padding-bottom: 160px;
  background-image: url(${BannerBG});
  // background:  rgb(19 27 189);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media only screen and (min-width: 1367px) {
    min-height: 100vh;
  }
  @media (max-width: 990px) {
    padding-top: 0px;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 480px) {
    // background: none;
    padding-top: 0px;
    padding-bottom: 60px;
  }
  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    // @media (max-width: 990px) {
    //   display: none;
    // }
    @media only screen and (max-width: 480px) {
      width: 100%;
      display: none;
    }
  }
  .row {
    position: relative;
    z-index: 1;
  }
  .button__wrapper {
    margin-top: 40px;
    margin-bottom: 60px;
    .reusecore__button {
      &:first-child {
        transition: all 0.3s ease;
        &:hover {
          box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
        }
      }
    }
  }
`;

const DiscountLabel = styled.div`
  display: inline-block;
  border-radius: 4em;
  padding: 7px 25px;
  box-shadow: 0px 4px 50px 0px rgba(22, 53, 76, 0.08);
  margin-bottom: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media (max-width: 767px) {
    padding: 7px 10px;
  }
`;

export { DiscountLabel };

export default BannerWrapper;
