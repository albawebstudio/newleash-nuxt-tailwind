/** @type {import('tailwindcss').Config} */
const newleash = {
  colors: {
    electric_violet: {
      DEFAULT: '#7C00FE',
      50: '#EFDFFF',
      100: '#E4CBFF',
      200: '#D0A2FF',
      300: '#BB79FF',
      400: '#A651FF',
      500: '#9128FF',
      600: '#7C00FE',
      700: '#6100C6',
      800: '#45008E',
      900: '#2A0056',
      950: '#1C003A'
    },
    fuschia: {
      50: "#fedbf0",
      100: "#feb5e2",
      200: "#fe8cd5",
      300: "#fe58c9",
      400: "#f300b9",
      500: "#c80098",
      600: "#a2007b",
      700: "#840065",
      800: "#550041",
      900: "#420032",
    },
    red_orange: {
      DEFAULT: '#FD3A1E',
      50: '#FFFDFC',
      100: '#FFEBE8',
      200: '#FEC8C0',
      300: '#FEA497',
      400: '#FE816F',
      500: '#FD5D46',
      600: '#FD3A1E',
      700: '#E11E02',
      800: '#A91702',
      900: '#720F01',
      950: '#560B01'
    },
    turbo: {
      DEFAULT: '#FEEA00',
      50: '#FFFDDF',
      100: '#FFFBCB',
      200: '#FFF8A2',
      300: '#FFF479',
      400: '#FFF151',
      500: '#FFEE28',
      600: '#FEEA00',
      700: '#C6B600',
      800: '#8E8300',
      900: '#564F00',
      950: '#3A3500'
    },
    christi: {
      DEFAULT: '#5E940E',
      50: '#CBF48E',
      100: '#C3F37B',
      200: '#B1EF56',
      300: '#A0EC31',
      400: '#8DDF15',
      500: '#76B912',
      600: '#5E940E',
      700: '#3D6109',
      800: '#1D2D04',
      900: '#000000',
      950: '#000000'
    },
    malachite_green: {
      50: "#85fe8f",
      100: "#00e937",
      200: "#00d131",
      300: "#00b32a",
      400: "#009423",
      500: "#00801e",
      600: "#006518",
      700: "#004210",
      800: "#00360d",
      900: "#002609",
    },
    cyan: {
      50: "#0efefb",
      100: "#00e5e3",
      200: "#00c7c4",
      300: "#00a8a6",
      400: "#008f8d",
      500: "#007170",
      600: "#006967",
      700: "#004241",
      800: "#003635",
      900: "#002626",
    },
    sapphire_blue: {
      50: "#e1e3fe",
      100: "#c3c7fe",
      200: "#a4acfe",
      300: "#8590fe",
      400: "#6374fe",
      500: "#3957fe",
      600: "#003ce5",
      700: "#002eaf",
      800: "#00217f",
      900: "#00144c",
    },
  },
}

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: newleash.colors.electric_violet,
        secondary: newleash.colors.fuschia,
        green: newleash.colors.christi,
        blue: newleash.colors.sapphire_blue,
        red: newleash.colors.red_orange,
      },
    },
    fontFamily: {
      'luckiest-guy': ['Luckiest Guy'],
      'ghost-kid': ['GhostKid AOE Pro'],
      'desyrel': ['Desyrel'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

