import { create } from 'zustand';

const useColorSchemeStore = create((set) => ({
  colorScheme: 'light',
  toggleColorScheme: () =>
    set((state) => ({
      colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
    })),
}));

export { useColorSchemeStore };
