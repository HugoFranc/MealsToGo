import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Spacer} from '../../../components/spacer/spacer.component';
import {Text} from '../../../components/typography/text.component';
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
} from './restaurant_info_card.styles';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg',
    ],
    address = 'Mexico City',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover key={name} source={{uri: photos[0]}} />
        <Info>
          <Text variant={'label'}> {name} </Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                  key={`star-${placeId}-${i}`}
                />
              ))}
            </Rating>
            <SectionEnd>
              <Text variant={'caption'} style={{color: 'red'}}>
                {isClosedTemporarily && 'CLOSED TEMPORARILY'}
              </Text>
              <Spacer position={'left'} size={'large'} />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position={'left'} size={'large'}>
                <Icon source={{uri: icon}} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Text variant={'body'}> {address} </Text>
        </Info>
      </RestaurantCard>
    </>
  );
};
