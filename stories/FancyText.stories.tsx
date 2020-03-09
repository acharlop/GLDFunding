import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from 'rebass';
import { FancyText } from '../components';

storiesOf('FancyText', module).add('default', () => (
  <Text as="h1" fontSize={[3, 4]} fontFamily="heading">
    Hey Ho !{` `}
    <FancyText words={['lets!', 'Go!']} animate />
  </Text>
));
