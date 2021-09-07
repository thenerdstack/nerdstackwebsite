import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';
import Link from 'next/link';
import Particles from '../Particle'
import SvgComponent from './Computer.js'





const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  outlineBtnStyle,
  container,
  btnGroup
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Link href='/about'>
        <Button title="LEARN MORE" {...btnStyle} />
      </Link>
      <Link href='/contact'>
        <Button
          title="CONTACT US"
          variant="textButton"
          icon={<i className="flaticon-next" />}
          {...outlineBtnStyle}
        />
      </Link>
    </Fragment>
  );
  useEffect(() => {
    const wrapper = document.querySelector('.mac-wrapper');
  
    setInterval(() => {
      console.log('restart')
      wrapper.classList.remove('start');
      setTimeout(() => {
          wrapper.classList.add('start');
      }, 50)
    }, 30000);
  }, [])  
  return (
    <BannerWrapper>
      {/* <Particles /> */}
      <Container className="cont">
        <Box className="row computer" {...row}>
          <Box className="col bannerText" {...col} className="quote mac-wrapper start ">
            <FeatureBlock
              title={
                <Heading
                  content="We are design and development nerds here to help you"
                  {...title}
                />
              }
              description={
                <Text
                  content="Nerd Stack is a digital agency that specializes in web development, design, consulting and SEO optimization."
                  {...description}
                />
              }
              button={
                <ButtonGroup
                  {...btnGroup}
                />
              }
            />
          </Box>
          <Box className="col computer" {...col}>
            {/* <div className="mac-wrapper start "> */}
                {/* <SvgComponent/> */}
            {/* </div> */}
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
  container: PropTypes.object,
  btnGroup: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    scrollSnapAlign: 'start',
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
    pt: '150px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '50%', '50%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#fff',
    lineHeight: '2.1',
    mb: '0',
    
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
  container: {
    height: '100vh',
    // display: 'flex',
  },
  btnGroup: {
    textAlign: 'left',
  }
};

export default BannerSection;
