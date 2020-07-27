import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import { Text } from '../../components/Theme';

interface SubslideProps {
  subTitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

const Subslide = ({ subTitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant='title2'>{subTitle}</Text>
      <Text variant='body' style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 18,
    paddingTop: 0,
  },
  description: {
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default Subslide;
