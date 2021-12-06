import Head from 'next/head'
import Header from './Header'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from './footer/Footer'

const THEME = createTheme({
  typography: {
    fontFamily: `"Mulish","Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    text: {
      primary: '#1E3240',
    },
  },
})

export default function Layout({ title, keywords, description, children }) {
  return (
    <ThemeProvider theme={THEME}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
    </ThemeProvider>
  )
}

Layout.defaultProps = {
  title: 'LUGAR | Real Estate Firm',
  description:
    'Real estate firm that makes your dreams come true, based in Dubai',
  keywords: 'real estate, Dubai, firm, company, build, home',
}
