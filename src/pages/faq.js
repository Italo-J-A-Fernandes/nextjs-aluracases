import FAQScreen from '../screens/FAQScreen';

export default FAQScreen; 

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