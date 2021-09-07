import React from 'react';
import Link from 'next/link';
import Container from 'common/components/UI/Container';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import PropTypes from 'prop-types';


import { ContactUsWrapper } from './contactUs.style';

const ContactAlt2 = ({
  btnStyle,
  contactWrapper,
}) => {
  return (
    <ContactUsWrapper id="contact_section" style={{...contactWrapper}}>
      <Container>
        <Box className="contactInner">
          <Box className="leftContent">
            <Heading as="h3" content="Are You Interested?" />
            <Heading
              as="h3"
              className="color2"
              content="Lets have a chat."
            />
          </Box>
          <Box className="buttonBox">
            <a href="mailto:david@thenerdstack.com" target="_blank">
              <a className="portfolio_button" style={{...btnStyle}}>Contact Us</a>
            </a>
          </Box>
        </Box>
      </Container>
    </ContactUsWrapper>
  );
};
ContactAlt2.propTypes = {
  btnStyle: PropTypes.object,
  contactWrapper: PropTypes.object,
}

ContactAlt2.defaultProps = {
  contactWrapper: {
    marginBottom: '60px',
  },

  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    colors: 'primaryWithBg',
    padding: '10px 30px',
    margin: '20px',
  },
}

export default ContactAlt2;
