import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../theme';
import { GlobalStyles } from '../theme/globalStyles';
// automatically import all files ending in *.stories.tsx
// configure(require.context('../stories', true, /\.stories\.tsx?$/), module);

const req = require.context('../stories', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ padding: '2rem', position: 'relative' }}>{storyFn()}</div>
  </ThemeProvider>
);
addDecorator(ThemeDecorator);

configure(loadStories, module);
