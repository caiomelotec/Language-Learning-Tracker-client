export const LanguageForms = () => {
  return (
    <>
      {" "}
      <section className="bg-gradient-to-r from-sky-800 to-slate-800 sm:w-1/3 w-full rounded-lg p-3 mt-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <form action="" className="flex justify-between">
          <input
            type="text"
            placeholder="Which language do you want to lern?"
            className="p-2 rounded-lg sm:w-80 w-full  placeholder:text-slate-500 bg-gradient-to-r from-slate-300 to-gray-200"
          />
          <button
            className="text-white font-semibold text-lg bg-gradient-to-r from-sky-700 to-sky-950 py-2 px-4 rounded-lg ml-2
    hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-700 transition ease delay-30"
          >
            Add
          </button>
        </form>
      </section>
    </>
  );
};
