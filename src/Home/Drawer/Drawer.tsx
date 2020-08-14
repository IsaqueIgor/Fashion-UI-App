import React from 'react';
import {Box, useTheme, Text, Header} from '../../components';
import {Dimensions, Image} from 'react-native';
import DrawerItem, {DrawerProps} from './DrawerItem';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const {width} = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 0.35;
const height = width * aspectRatio;

const items: DrawerProps[] = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favourite Outfit',
    screen: 'FavouriteOutfit',
    color: 'orange',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'Edit Profile',
    color: 'yellow',
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'pink',
  },
  {
    icon: 'settings',
    label: 'Notification Settings',
    screen: 'NotificationSettings',
    color: 'violet',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary',
  },
];

export const assets = [require('./assets/drawer.png')];

const Drawer = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary">
          <Header
            left={{
              icon: 'x',
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{icon: 'shopping-bag', onPress: () => true}}
            title="Menu"
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          backgroundColor="white"
          justifyContent="center"
          padding="xl">
          <Box
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            backgroundColor="primary"
            height={100}
            width={100}
            style={{borderRadius: 50}}
            alignSelf="center"
          />
          <Box marginVertical="l">
            <Text variant="title1" textAlign="center">
              Ragnar Lothbrok
            </Text>
            <Text variant="body" textAlign="center">
              ragnarlothbrok@gmail.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        height={height * 0.61}
        width={DRAWER_WIDTH}
        overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            height,
            width: DRAWER_WIDTH,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
