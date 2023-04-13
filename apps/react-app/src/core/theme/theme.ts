const BASE_SPACING = 4;

export const theme = {
  palette: {
    primary: {
      50: '#EAF3F3',
      100: '#BCD9DB',
      200: '#9CC7CA',
      300: '#6FAEB1',
      400: '#539EA2',
      500: '#28868B',
      600: '#247A7E',
      700: '#1C5F63',
      800: '#164A4C',
      900: '#11383A',
    },
    secondary: {
      50: '#FCEFEB',
      100: '#F6CDC0',
      200: '#F1B5A2',
      300: '#EB9477',
      400: '#E77F5D',
      500: '#E15F34',
      600: '#CD562F',
      700: '#A04325',
      800: '#7C341D',
      900: '#5F2816',
    },
    commons: {
      black: '#000',
      white: '#fff',
    },
  },
  typography: {
    desktop: {
      h1: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '72px',
        lineHeight: '96px',
        fontFamily: 'Sanchez',
      },
    },
  },
  spacing: (multiplier: number = 1) => `${multiplier * BASE_SPACING}px`,
};
