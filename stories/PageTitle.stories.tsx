import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PageTitle } from '../components';


storiesOf('PageTitle', module).add('default', () => (
  <PageTitle title="testing" src="about"/>
));
