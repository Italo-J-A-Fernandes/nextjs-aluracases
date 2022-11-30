import { useEffect, useState } from "react";
import Link from "../components/Link";

const FAQPage = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    fetch(FAQ_API_URL).then((response) => {
      return response.json()
    }).then((response) => {
      console.log(response);
      setFaq(response)
    })
  }, [])
  return (
    <div>
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