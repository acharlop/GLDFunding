import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../components';

const variants = [
  'default',
  'primary',
  'outline',
  'solid',
  'clear'
]

storiesOf('Buttons', module).add('Variants', () => (
  <>
    {variants.map(el=>(
        <Button onClick={action('clicked')} variant={el} my={1} key={el}>
        {el}
        </Button>
    ))}
  </>
));
