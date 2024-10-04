import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const lightTheme = {
  dark: false,
  colors: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    background: "#FFFFFF",
    // surface: "#FFFFFF",
  },
}
const darkTheme = {
  dark: true,
  colors: {
    primary: "#1976D2",
    secondary: "#03DAC6",
    accent: "#3700B3",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    background: "#121212",
    // surface: "#121212",
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light:lightTheme,
      dark:darkTheme,
    },
  },
});

export default vuetify;
