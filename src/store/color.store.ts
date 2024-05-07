import { create } from "zustand";
import {Theme, ThemeStore} from "@/type/colorTheme";


export const useThemeStore = create<ThemeStore>((set, get) => ({
  color: null,
  setColor: (value) => set(() => ({ color: value })),

  defineInitialColor: function () {
    const { setColor } = get();
    let color: Theme;
    const localColor = localStorage.getItem("colorScheme");

    if (!localColor) {
      color = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else if (localColor === "light") {
      color = "light";
    } else {
      color = "dark";
    }
    setColor(color);
  },

  toggleColorTheme: function() {
    const { color, setColor } = get();
    const newColor: Theme = color === "light" ? "dark" : "light";
    localStorage.setItem("colorScheme", newColor);
    setColor(newColor);
}
}));
