import { create } from 'zustand';

interface ColorScheme {
  colorScheme: 'light' | 'dark';
  toggleColorScheme: () => void;
}

const useColorSchemeStore = create<ColorScheme>((set, get) => ({
  colorScheme: (() => {
    const localScheme = localStorage.getItem('colorScheme');
    if (localScheme === 'light' || localScheme === 'dark') {
      return localScheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  })(),
  toggleColorScheme: () => {
    const { colorScheme } = get();
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    set({ colorScheme: newColorScheme });
    localStorage.setItem('colorScheme', newColorScheme);
  },
}));

export { useColorSchemeStore };
