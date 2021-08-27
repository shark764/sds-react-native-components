import React, { useState } from 'react';
// eslint-disable-next-line import/extensions
// import Storybook from '../storybook';
import AppThemeProvider from './providers/appThemeProvider';

// export { default } from '../storybook';

export function App () {
  const [themeMode] = useState('light');

  return (
    <AppThemeProvider mode={themeMode}>{/* <Storybook /> */}</AppThemeProvider>
  );
}

export default App;
