import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

type Language = {
  id: string;
  name: string;
  userId: string;
};
type LanguageInfoProps = {
  languages: Language[];
};

export const LanguageInfo = ({ languages }: LanguageInfoProps) => {
  return (
    <>
      {languages.map((language: Language) => (
        <section
          key={language.id}
          className="bg-gradient-to-r from-sky-800 to-slate-800 w-full sm:w-1/3 rounded-lg p-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-between"
        >
          <div className="text-white text-2xl">{language.name}</div>
          <div className="flex gap-4 items-center">
            <MdDelete className="text-white cursor-pointer" size={22} />
            <Link
              to={`/card/${language.id}`}
              className="text-white font-semibold text-lg bg-gradient-to-r from-sky-700 to-sky-950 py-2 px-4 rounded-lg ml-2
              hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-700 transition ease delay-30"
            >
              See Cards
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};
