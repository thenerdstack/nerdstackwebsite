import React from 'react';
import { Icon } from 'react-icons-kit';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Text from 'common/components/Text';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import '@reach/accordion/styles.css';
import SectionHeading from '../SectionHeading';
import FeatureWrapper, { FeatureContent, Content, Ipad } from './feature.style';
import { servicesPage } from 'common/data/Portfolio/data.js'; 
import iPad from 'common/assets/image/Portfolio/ipad.png';

const Feature = () => {
  return (
    <FeatureWrapper id="features" style={{paddingTop: '120px'}}>
      <Ipad>
        <Image src={iPad} alt="" />
      </Ipad>
      <Container>
        <FeatureContent>
          <SectionHeading
            mb="20px"
            slogan="OUR SERVICES"
            title="Check out our services"
            textAlign="left"
          />
          <Content>
            <Text
              className="caption"
              content="Nerd Stack offers a variety of services to better help suit your needs."
            />
            <Accordion>
              {servicesPage.map((item) => {
                return (
                  <AccordionItem key={item.id}>
                    <AccordionButton>
                      {item.title} <Icon icon={thinRight} />
                    </AccordionButton>
                    <AccordionPanel>{item.desc}</AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Content>
        </FeatureContent>
      </Container>
    </FeatureWrapper>
  );
};

export default Feature;
