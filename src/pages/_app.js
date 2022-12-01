import Head from 'next/head';
import GlobalStyled from '../theme/GlobalStyled'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Aqui vai o codigo js - exemplo: Google Analytics
              // window.alert("Este alerta não será mostrado");
            `
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;