import React, { useEffect } from 'react';
import { GlobalStyles, theme } from './global-styles';
import { ThemeProvider } from 'styled-components';

function App(): JSX.Element {
  const height = 500;
  const width = 500;
  useEffect(() => {
    const canvas = document.getElementById('c');
    if (!canvas) {
      console.error('No canvas found');
      return;
    }
    const context = (canvas as HTMLCanvasElement).getContext('2d');
    if (!context) {
      console.error('Could not get context');
      return;
    }
    for (let x = 0; x < 256; x++) {
      for (let y = 0; y < 256; y++) {
        if ((x ^ y) % 9) {
          context.fillRect(x * 4, y * 4, 4, 4);
        }
      }
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Alien Art</h1>
      <span>
        from https://twitter.com/aemkei/status/1378106734871461890?s=09
      </span>
      <canvas id="c" width={width} height={height} />
    </ThemeProvider>
  );
}

export default App;
