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



// import { aboutData } from 'common/data/Interior';

const DetailsBlog = ({sectionSubTitle, h1}) => {


  return (
    <SectionWrapper>
        <GlobalStyle/>
        <ContentWrapper>
      <Container>
        <TextWrapper>
          <Fade right>
          <Text content="What is Blockchain Technology?" {...sectionSubTitle} />
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
                                                July 21, 2021
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
                                    <h1 style={{...h1}}>What is Blockchain Technology?</h1>
                                    <p>
                                        With the rise of cryptocurrencies you might have heard of the term blockchain, but what is a blockchain? And how will it affect the future? 
                                    </p>
                                   
                                    <p>
                                        Cryptocurrency is a digital asset that is distributed across a number of decentralized computers, making it difficult for the asset to be manipulated or controlled. Blockchains are the technology which ensures the authenticity and integrity of the cryptocurrency transactions. Blockchain was initially developed for use by the original cryptocurrency Bitcoin and is now prevalently used across all cryptocurrencies.  A blockchain stores data in a way that makes it difficult, next to impossible, to hack or alter. On a public blockchain network such as Ethereum, the most common way data is stored is as a ledger for transactions. The technology allows a secure way for individuals to deal directly with each other without an intermediary like a government, bank or other third party.
                                    </p>
                                   
                                    <p>
                                        The blockchain is made up of linked batches of data known as blocks, and an identical copy is stored on each of the computers (nodes) that make up the blockchain network. The growing list of records, called blocks, is linked together using cryptography. On the Ethereum blockchain the ledger is cryptographically signed to prove that the person transferring virtual coins is the actual owner of those coins. But, no one can spend coins twice because once a transaction is recorded in the ledger every node in the network will know about it. Every transaction is independently verified by peer-to-peer computer networks, time-stamped and added to a growing chain of data. Once recorded, the data cannot be altered.
                                    </p>
                                    
                                    <h3>Where is blockchain technology used now?</h3>
                                    <p>
                                        Blockchain technology is often used to store information like a ledger for transactions. But, it is actually a reliable way of storing data about other types of transactions as well. For example IBM has developed the Food Trust blockchain to trace the journey of your food. Why do this? The food industry has seen countless outbreaks of E. coli, salmonella, and listeria, as well as hazardous materials accidentally introduced into foods. In the past, it has taken weeks to find the source of these outbreaks or the cause of food-borne illness. Blockchain can track a defective food product’s route from its origin, through each stop it makes, and to its final delivery point for quick, accurate identification of cause of contamination and the location of every contaminated shipment.
                                    </p>
                                   
                                    <p>
                                        Banking and Finance utilize blockchain technology. South Korea’s Shinhan bank is using blockchain technology to speed up loan issuance. Banks are also exploring CBDC(Central Bank Digital Currency). Pilot programs that test the potential uses of a U.S. central bank digital currency are just starting in the US and all over the world. The Bank of Korea recently announced that they will use Kakao’s blockchain for its digital currency pilots. 
                                    </p>

                                    <p>
                                        A big trend on the Ethereum blockchain is Decentralized Finance (DeFi) and using smart contracts. Smart contracts are computer code that can be built into the blockchain to facilitate, verify, or negotiate a contract agreement. Smart contracts operate under a set of conditions that users agree to. When those conditions are met, the terms of the agreement are automatically carried out. These smart contracts allow for decentralized financial services to be offered. 
                                    </p>
                                    <h3>The future of blockchain</h3>
                                    <p>
                                        So what does this mean for the future of technology? Blockchain technology will be used for industries other than the financial sector. It will be used in real estate to keep detailed records about titles. Medical industries will use it for patient health history and records, the art industry will use it to help eliminate forgeries and prove authenticity. Warehouses and retail companies will use it for supply chain management and inventory control. Blockchain technology will change the way business is done and will revolutionize technology to become more transparent and secure in a fully digital world. 
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
