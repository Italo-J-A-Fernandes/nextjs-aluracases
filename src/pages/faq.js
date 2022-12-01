import Head from 'next/head';
import Link from "../components/Link";

// SSG - Static Side Genaration
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// getStaticProps para conteúdos que nunca vai mudar de fato estaticos que serão gerados somente no build do projeto
// getServerSideProps pegar alterações, roda a cada novo acesso
// em modo dev sempre roda a cada acesso

export async function getServerSideProps() {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL).then((response) => {
    return response.json()
  }).then((response) => {
    return response;
  })
  return {
    props: {
      faq
    },
  }
}

const FAQPage = ({ faq }) => {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Site de Campanha</title>
      </Head>
      <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
      <Link href="/">
          Ir para Home
      </Link>
      <ul>
        {faq.map(({question, answer}) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;