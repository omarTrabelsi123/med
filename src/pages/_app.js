import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';



export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#080341"
      },
      grey: {
        main: "#8E8EA9"
      },
     
    },
  });
  return <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
}
