import React, {Fragment} from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';
import PropTypes from 'prop-types';


import { aboutData } from 'common/data/Portfolio/data.js'; 

const AboutUs = ({sectionSubTitle}) => {
  const { thumb_url, title, text, text2, text3 } = aboutData;
  const setTitle = (title) => {
    return { __html: title };
  };

  return (
    <SectionWrapper id="aboutUs">
      <Container className="aboutUsContainer">
        <ImageWrapper>
          <Fade left>
            <Image src={thumb_url} alt="Javascript code on computer screen" />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
          <Text content="ABOUT US" {...sectionSubTitle} />
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Text content={text} />
            <Text content={text2} />
            <Text content={text3} />
            {/* <Link href="#1">
              <a className="learn__more-btn">
                <span className="btn_text">VISITE SITE</span>
                <span className="next_arrow"></span>
              </a>
            </Link> */}
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

AboutUs.propTypes = {
  sectionSubTitle: PropTypes.object,
}

AboutUs.defaultProps = {
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'left',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
}

export default AboutUs;
