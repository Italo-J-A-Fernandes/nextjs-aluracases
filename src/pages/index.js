import Link from "../components/Link";

const GlobalStyled = () => {
  return (
    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
  )
}

const Title = ({children, type}) => { 
  const Tag = type
  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: green;
        }
      `}</style>
    </>
  )
}

const HomePage = () => {
  return (
    <div>
      <GlobalStyled />
        <Title type="h1">Alura Cases - Home Page</Title>
        <Link href="/faq">
          Ir para FAQ
        </Link>
    </div>
  );
}

export default HomePage;