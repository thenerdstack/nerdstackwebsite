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
} from './aboutUs.style';
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
          <Text content="Top 5 Reasons Your Company Needs a Website" {...sectionSubTitle} />
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
                                                May 5, 2021
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
                                    <h1 style={{...h1}}>Top 5 Reasons Your Company Needs a Website</h1>
                                    <p>Starting a new company is very exciting, but it also comes with some stress and takes a lot of work. One of the essential ingredients in creating a solid foundation for a successful company is to have a website. You might be asking yourself, does my company need a website? YES. An online presence is essential for success in today’s digital world. A website provides brand credibility. It allows you to showcase your products or services, allows organic customers to find you through Google and other social media. It is an integral part of marketing and ensures the success of your company over the long term. </p>
                                   
                                    <h3>1.) A Website Proves Your Brand Credibility</h3>
                                    <p>
                                        Every new company needs to establish a brand. That brand must clearly define who you are, differentiate your product or service, and resonate with your customers. This brand should be evident and draw customers online, responsive to the way the customer buys in today’s marketplace. Without a strong brand and an online presence, the customers will question the credibility of your company. NerdStack can help you establish your online brand, solidifying your company’s credibility. 
                                    </p>
                                   
                                    <h3>2.) You can clearly showcase your products and services</h3>
                                    <p>
                                        A creative website will allow you to profile your products and services in their best light. You have a platform to highlight all the best you have to offer, controlling the narrative so that you excite your customers and present exactly what they can expect from your company. It also sets up an environment where you can connect and engage with your customers easily. Customer engagement is the key to serving and retaining a loyal customer base. Our talented designers at NerdStack will help you showcase your products and services.
                                    </p>
                                    
                                    <h3>3.) You can benefit from Google Searches</h3>
                                    <p>
                                        A lot of buyers use Google to search online. Google’s algorithm ranks websites based on their relevance to the search. A well-optimized website will increase your  business rank for your products and services by leveraging the most critical search terms customers would use to find you, and will attract a steady stream of organic customers. NerdStack will support this optimization of your website on an ongoing basis.
                                    </p>
                                   
                                    <h3>4.) A website is an integral part of online marketing</h3>
                                    <p>
                                        A growing and thriving business relies heavily on a marketing plan to generate new customers. The website is a critical component of that plan. It stakes your claim in the vast internet world as proof of your existence and strategically distributes your message to your targeted customers.  That website enables you to continually iterate your marketing message as your company and your customer base evolve and helps you strategically target your customers. NerdStack can help you create that platform for your marketing message.
                                    </p>
                                   
                                    <h3>5.) A website ensures your success over the long term</h3>
                                    <p>
                                        Let’s face it, the internet is not going away. In 2020, it is estimated that almost 4.5 billion people, roughly 58% of the global population, were online using the internet.To stay competitive in this connected world of technology, your business must have an online presence. NerdStack’s brand and mission is to help your new or growing company get the most out of that presence.
                                    </p>
                                    <br/>
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
