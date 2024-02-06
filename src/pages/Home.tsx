import { LanguageForms } from "../components/LanguageForms";
import { LanguageInfo } from "../components/LanguageInfo";

export const Home = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-10">
      <LanguageForms />
      <LanguageInfo />
      <section className="bg-gradient-to-r from-sky-800 to-slate-800 w-full sm:w-1/3 rounded-lg p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-between">
        <div className="text-white text-2xl">English</div>
        <a
          href=""
          className="text-white font-semibold text-lg bg-gradient-to-r from-sky-700 to-sky-950 py-2 px-4 rounded-lg ml-2
        hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-700 transition ease delay-30"
        >
          See Cards
        </a>
      </section>
    </div>
  );
};
