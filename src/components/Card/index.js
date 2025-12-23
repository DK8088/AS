import React from 'react';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Spacer from '../../components/Spacer';
import GridRow from '../../components/GridRow';
import GridColumn from '../../components/GridColumn';
import Button from '../../components/Button';

const Card = ({className='',direction='' ,data=null }) => {
    return (
        <div className='cardWrapper'>
            <GridRow direction={direction} >
                <GridColumn col='col50'>
                    <Image className='textAndImageImg' src={data.src} alt={data.alt} />
                </GridColumn>
                <GridColumn col='col50'>
                    <Title value={data.title} size='fs50' />
                    <Spacer space='30' />
                    <Text value={data.desc} />
                    <Spacer space='30' />
                    <Button color='lightWhite'/>
                </GridColumn>
            </GridRow>
        </div>
    )
}

export default Card;