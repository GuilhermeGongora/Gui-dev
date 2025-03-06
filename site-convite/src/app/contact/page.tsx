import Header from "../components/Header";

export default function Contato() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
        <p className="text-lg text-gray-300 mb-4">
          Preencha o formulário ou envie um e-mail para contato@meusite.com
        </p>
        <form className="w-full max-w-md bg-slate-950 p-6 rounded-lg shadow-lg">
          <label className="block mb-2">
            Nome:
            <input
              type="text"
              className="w-full p-2 mt-1 rounded bg-slate-700 text-white border border-slate-600 focus:border-white focus:ring-1 focus:ring-white"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              className="w-full p-2 mt-1 rounded bg-slate-700 text-white border border-slate-600 focus:border-white focus:ring-1 focus:ring-white"
            />
          </label>
          <label className="block mb-4">
            Mensagem:
            <textarea
              rows={4}
              className="w-full p-2 mt-1 rounded bg-slate-700 text-white border border-slate-600 focus:border-white focus:ring-1 focus:ring-white"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-white text-slate-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
