import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import BlogPost from 'common/components/BlogPost';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './workSection.style';

import { openingLine } from 'common/data/Portfolio/data.js'; 

const WorkSection = () => {
  const { title, slogan } = openingLine;
  return (
    <SectionWrapper id="work">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
      </Container>
    </SectionWrapper>
  );
};

export default WorkSection;
