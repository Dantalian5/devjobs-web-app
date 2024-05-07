export type Theme = "dark" | "light" | null;

export interface ThemeState {
    color: Theme;
    setColor: (newColor: Theme) => void;
}

export type InitialColor = {
    defineInitialColor: () => void;
};
export type ToggleColorTheme = {
    toggleColorTheme: () => void;
};

export interface ThemeStore
    extends ThemeState,
        ToggleColorTheme,
        InitialColor {}
