import { create } from 'zustand';
import type { Filter } from '@/types/filter';

interface FilterStore {
  filter: Filter;
  updateFilter: (filter: Filter) => void;
}
const useFilterStore = create<FilterStore>((set) => ({
  filter: {
    title: '',
    location: '',
    time: false,
  },
  updateFilter: (newFilter) => {
    set({ filter: newFilter });
  },
}));

export { useFilterStore };
