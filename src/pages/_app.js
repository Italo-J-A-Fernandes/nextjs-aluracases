import GlobalStyled from '../theme/GlobalStyled'

function MyApp({Component, pageProps}) {
  return (
    <>
        <GlobalStyled />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp;