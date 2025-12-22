import React from 'react'
import style from './style.module.css';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';

function ParallaxBanner() {
  return (
    <Section className='parallaxBanner'>
        <Image className='parallaxImage' src='' alt=''/>
        <Title value='Banner Title'></Title>
        <Text value='Lorem'></Text>
    </Section>
  )
}

export default ParallaxBanner;