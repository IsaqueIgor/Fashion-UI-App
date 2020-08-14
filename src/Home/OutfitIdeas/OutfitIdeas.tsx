import React, {useState} from 'react';
import {useTransition} from 'react-native-redash';
import {sub} from 'react-native-reanimated';

import {Box, Header, HomeNavigationProps} from '../../components';
import Background from './Background';
import Card from './Card';

const cards = [
  {
    index: 3,
    source: require('../../Authentication/assets/images/4.png'),
  },
  {
    index: 2,
    source: require('../../Authentication/assets/images/3.png'),
  },
  {
    index: 1,
    source: require('../../Authentication/assets/images/2.png'),
  },
  {
    index: 0,
    source: require('../../Authentication/assets/images/1.png'),
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({navigation}: HomeNavigationProps<'OutfitIdeas'>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
        right={{icon: 'shopping-bag', onPress: () => true}}
        title="Outfit Ideas"
      />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({index, source}) =>
            currentIndex <= index * step + step && (
              <Card
                key={index}
                position={sub(index * step, animatedIndex)}
                {...{source, step}}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            ),
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
