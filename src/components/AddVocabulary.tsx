import { useState } from "react";
import { AddVocabularyForm } from "./AddVocabularyForm";

export const AddVocabulary = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <section className="text-center flex justify-center items-center">
        <div className="md:w-1/2 w-full h-fit bg-sky-950 rounded-xl md:p-1 p-5 my-5 items-center flex justify-normal">
          {toggle ? (
            <button
              className="text-white font-semibold text-lg bg-gradient-to-r from-sky-700 to-sky-950 py-2 px-4 rounded-lg ml-2
        hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-700 transition ease delay-300"
              onClick={() => setToggle(false)}
            >
              Add more vocabulary
            </button>
          ) : (
            <AddVocabularyForm />
          )}
        </div>
      </section>
    </div>
  );
};
