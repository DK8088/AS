import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';

const TextAndImage = ({data}) => {
  return (
    <Section>
        <Card data={data} />
    </Section>
  );
}

export default TextAndImage;