export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Aulas Online de TI e IA</h1>
      <p className="mt-4 text-lg">
        Aprenda tecnologias como Git, JavaScript, Next.js, PostgreSQL e muito
        mais!
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400">
        Quero
      </button>
    </main>
  );
}
