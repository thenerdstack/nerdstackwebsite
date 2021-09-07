import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Card from 'common/components/Card';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import AboutUsSectionWrapper from './aboutUsSection.style';
import Link from 'next/link';


import servicesData from 'common/data/Portfolio/data.js';  

import GroupImage1 from 'common/assets/image/portfolio/group/next.config.png';
import GroupImage2 from 'common/assets/image/portfolio/group/web-design.jpg';
import GroupImage3 from 'common/assets/image/portfolio/group/phone-computer-on-desk.jpg';

const AboutUsSection = ({
  row,
  col,
  title,
  description,
  textArea,
  featureTitle,
  btnStyle,
}) => {
  return (
    <AboutUsSectionWrapper className="banner3d-1" id="AboutUsSection">
      <Box className="row banner3d-1-front" {...row}>
        <Box className="col" {...col}>
          <Card className="group-gallery">
            <Box className="col1">
              <Fade top delay={30}>
                <Image src={GroupImage1} alt="Feature Image" />
              </Fade>
              <Fade left delay={60}>
                <Image src={GroupImage3} alt="Feature Image" />
              </Fade>
            </Box>
            <Box className="col2">
              <Fade bottom delay={90}>
                <Image src={GroupImage2} alt="Feature Image" />
              </Fade>
            </Box>
          </Card>
        </Box>
        <Box className="col" {...col}>
          <Box {...textArea}>
              <Text content="WHY CHOOSE US" />
              <Heading
                content="About Nerd Stack"
                
              />
            <FeatureBlock
              title={
                <Heading
                  content="Nerds Who Like to Develop and Design"
                  as={'h3'}
                  {...title}
                />
              }
              description={
                <Text
                  content="Nerd Stack is a web design and development company based in Denver, Colorado. We specialize in everything from website design to SEO optimization, consulting services to Web App Development. We know what it takes to build an effective online presence for your business or organization.
                  We put our heart into every project we take on - whether that's designing your new site or helping you optimize the one you already have. Whether you're looking for an end-to-end solution or just need help with a small piece of your development plan, Nerd Stack has the expertise and creativity needed for success.
                  "
                  {...description}
                />
              }
            />
          </Box>
          <Box {...textArea}>
            {/* {servicesData.aboutus.map((feature, index) => (
              <FeatureBlock
                key={`feature_point-${index}`}
                icon={<i className={feature.icon} />}
                iconPosition="left"
                title={<Heading content={feature.title} {...featureTitle} />}
              />
            ))} */}
            <Link href="/contact">
              <Button 
                title="LETS TALK" 
                className="portfolio_button"
                {...btnStyle} 
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  );
};

AboutUsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textArea: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // About us section col default style
  col: {
    width: [1, '100%', '50%'],
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    padding: '0 30px',
  },
  // About us section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // About us section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },

  // feature title default style
  featureTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default AboutUsSection;
