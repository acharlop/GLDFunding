import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from 'rebass';

import { Carousel } from '../components';

storiesOf('Carousel', module).add('default', () => (
  <Carousel showDots>
    <Flex alignItems="center" justifyContent="center" minHeight="10rem" bg="gray500" color="white">
      Hey!
    </Flex>
    <Flex alignItems="center" justifyContent="center" minHeight="10rem" bg="gray300" color="white">
      Ho!
    </Flex>
  </Carousel>
));
