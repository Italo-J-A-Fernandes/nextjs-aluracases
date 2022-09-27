import Link from "next/link";

function pages() {
  return (
    <div>
        <h1>Alura Cases - Home Page</h1>
        <Link href="/faq">
          <a>Ir para FAQ</a>
        </Link>
    </div>
  );
}

export default pages;