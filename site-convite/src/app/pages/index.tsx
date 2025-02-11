import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aulas de TI e IA</title>
        <meta
          name="description"
          content="Aprenda Git, Next.js, PostgreSQL, e mais!"
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
        <h1 className="text-4xl font-bold">🚀 Aulas Online de TI e IA</h1>
        <p className="mt-4 text-lg text-center max-w-xl">
          Aprenda tecnologias como Git, JavaScript, Next.js, PostgreSQL e muito
          mais!
        </p>

        <a
          href="#contato"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Quero me inscrever
        </a>
      </main>
    </>
  );
}
