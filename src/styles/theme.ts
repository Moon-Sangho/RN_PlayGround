import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

type AppTheme = typeof theme;

export const theme = {
  colors: {
    main: '#2FB7B7',
    black: '#000000',
    white: '#ffffff',
    red: '#EE4009',
    lightGray: '#eaeaea',
    deepGray: '#555555',
    active: '#313C54',
    inactive: '#e5e5e5',
    disabled: '#a8a8a8',
  },
};
