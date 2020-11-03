import Head from "next/head";

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>MDcube.io 2020</title>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <header>Header Navegador</header>

        {children}
      </main>

      <footer>Todos los derechos reservados</footer>
    </>
  );
}
