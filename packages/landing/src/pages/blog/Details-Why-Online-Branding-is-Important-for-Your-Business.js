import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './blog.style';
import PropTypes from 'prop-types';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/Portfolio/portfolio.style';






const DetailsBlog = ({sectionSubTitle, h1}) => {


  return (
    <SectionWrapper>
      <GlobalStyle/>
      <ContentWrapper>
    <Container>
      <TextWrapper>
        <Fade right>
        <Text content="Why Online Branding is Important for Your Business" {...sectionSubTitle} />
          {/* <Heading  /> */}
          <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details-desc">

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <span>Posted on:</span> 
                                                June 9, 2021
                                            </li>
                                            <li>
                                                <span>Posted by:</span> 
                                                <Link href="#">
                                                    <a>David Campbell</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <br/>
                                    <br/>
                                    <h1 style={{...h1}}>Why Online Branding is Important for Your Business</h1>
                                    <p>Your website is likely the way that new customers are going to find your company.  They will  find you online through search engines, social media, or a direct visit to your website after learning about you from a friend/client.</p>
                           
                                    <p>When looking at a broad definition of branding, it can be a bit overwhelming to focus on what is most important for your brand.  In short, your brand is the way your customer perceives you. You must consider your entire customer experience…everything from your logo, your website, your social media experiences, the way you answer the phone, and the way your customers experience your staff,  that’s the customer experience of your business. Beyond the website design, look and feel, corporate color palette and logo, your visitor “experiences” your website the same way they would if they visited your office, except without the personal interaction.</p>

                                    <h3>Website branding</h3>
                                    <p>
                                        Every business, regardless of size, should include a website in their overall online strategy for a business. A website legitimizes the business or product. If your company doesn’t have a website and your competition does, the chances of you earning the customer’s trust and ultimately their business goes down. 
                                    </p>
                                    <h3>Branding promotes recognition</h3>
                                    <p>
                                        People tend to do business with companies they recognize. If your branding is consistent and easy to identify, people will feel more secure purchasing your products or services.
                                    </p>
                                    <h3>Your brand tells people about your business DNA</h3>
                                    <p>
                                        Your brand identity should be clearly defined, communicated consistently, and incorporated into all elements of the customer experience, from the visual elements such as the logo to the way that your phones are answered. It sets expectations for customers so that they know what your brand is all about and how they will benefit from your product/service.                                     </p>
                                    <h3>Social media</h3>
                                    <p>
                                        Social media is vital for any brand. Your company should  have a presence on the main social media platforms, such as FaceBook, at a bare minimum. Your consistent brand identity on those sites is critical, including your company name, your message, your logo, and your product/service benefits. Social media creates opportunities for your brand to reach new customers and encourage them to visit your website or get them in the door of your local business to sell your product/service to them.                                    
                                    </p>
                                    <h3>Conclusion</h3>
                                    <p>
                                        Your brand on your website and social media should be cohesive. It is important for your website and social media to align. The logos need to match, the mission statement and tagline need to be the same. The color scheme and fonts need to be similar so that no matter what platform someone looks at, they see the same brand and get the message.
                                    </p>
                                    <p>
                                        Remember branding extends way beyond just a logo or a graphic element.  Don't be like the millions of small organizations and start-ups who neglect to spend necessary time thinking about their brand in this broad sense and the impact it has on their business. With over 7+ years experience Nerd Stack can help you establish your brand or help you improve your brand so that you can take your business to the next level. 
                                    </p>
                            

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
      </TextWrapper>
    </Container>
    </ContentWrapper>
  </SectionWrapper>
            
  );
};

DetailsBlog.propTypes = {
  sectionSubTitle: PropTypes.object,
  h1: PropTypes.object,
}

DetailsBlog.defaultProps = {
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
  h1: {
    color: '#2a6fe2',
    fontSize: '36px',
  }
}

export default DetailsBlog;
