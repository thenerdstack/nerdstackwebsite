
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerScrollStyle = styled.section`

html,
body {
  margin: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
#container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.bg {
  // background: url("https://i.imgur.com/3OICvSf.jpg") center center;
  background-size: cover;
}
.panel {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-height: 600;
  font-size: 1.5em;
  textAlign: center;
  color: white;
  box-sizing: border-box;
  overflow: hidden;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  overflow: hidden
}

.panel.description {
  position: relative;
}

.panel.align-top {
  align-items: flex-start;
}

.panel h1 {
  font-size: 3em;
  color: white;
  font-weight: 300;
  margin: 0 auto;
  padding: 0;
}

.quote {
  background-color: transparent;
  z-index: 2;
}

.quote .quote_text p{
  font-family: "Sanchez", serif;
  font-size: 5vw;
  line-height: 1.3;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}
.black {
  background-color: #000;
  position: relative;
}

`;

export default BannerScrollStyle;
