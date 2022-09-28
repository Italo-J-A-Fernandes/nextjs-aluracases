import Link from "../components/Link";

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
          font-family: sans-serif;
        }
      `}</style>
    </>
  )
}

const HomePage = () => {
  return (
    <div>
        <Title type="h1">Alura Cases - Home Page</Title>
        <Link href="/faq">
          Ir para FAQ
        </Link>
    </div>
  );
}

export default HomePage;