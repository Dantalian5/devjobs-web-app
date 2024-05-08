import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/Header';
import Jobs from '@/components/Jobs';

import { useColorSchemeStore } from '@/store/colorScheme.store';

type Theme = 'dark' | 'light';

function App() {
  const [colorScheme, setColorScheme] = useState<Theme>('light');
  useEffect(() => {
    setColorScheme(() => {
      const localScheme = localStorage.getItem('colorScheme');

      switch (localScheme) {
        case 'light':
          return 'light';
        case 'dark':
          return 'dark';
        default:
          return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
      }
    });
  }, []);
  function toggleColorScheme() {
    const newColor: Theme = colorScheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('colorScheme', newColor);
    setColorScheme(newColor);
  }

  return (
    <div className={`main-container theme-${colorScheme}`}>
      <BrowserRouter basename='/'>
        <Header colorScheme={colorScheme} colorSchemeFn={toggleColorScheme} />
        <Jobs />
      </BrowserRouter>
    </div>
  );
}

export default App;
