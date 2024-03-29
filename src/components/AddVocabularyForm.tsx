import * as z from "zod";
import { AddVocabularyFormSchema } from "../util/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import axios from "axios";

type AddVocabularyFormInputs = z.infer<typeof AddVocabularyFormSchema>;

export const AddVocabularyForm = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddVocabularyFormInputs>({
    resolver: zodResolver(AddVocabularyFormSchema),
  });

  const processForm: SubmitHandler<AddVocabularyFormInputs> = async (data) => {
    try {
      axios.post("http://localhost:8080/api/language/addcard", data, {
        withCredentials: true,
      });
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-9/10">
      <form
        className="flex gap-4 ml-2 w-full h-fit items-center flex-col md:flex-row"
        onSubmit={handleSubmit(processForm)}
      >
        <label className="text-white ml-2">Word:</label>
        <input
          type="text"
          {...register("word")}
          className={`rounded-xl p-1 w-full bg-gradient-to-r from-slate-400 to-gray-200 ${
            errors.word?.message
              ? "placeholder:text-rose-600"
              : "placeholder:text-slate-600"
          } ${
            errors.word?.message ? "border-2 border-rose-500" : ""
          } focus:outline-none `}
          placeholder={
            errors.word?.message
              ? errors.word.message
              : "Write the word you want to learn"
          }
        />
        <label className="text-white ml-2">Meaning:</label>
        <input
          {...register("meaning")}
          type="text"
          className={`rounded-xl p-1 w-full bg-gradient-to-r from-slate-400 to-gray-200 ${
            errors.meaning?.message
              ? "placeholder:text-rose-600"
              : "placeholder:text-slate-600"
          } ${
            errors.meaning?.message ? "border-2 border-rose-500" : ""
          } focus:outline-none`}
          id="meaning"
          placeholder={
            errors.meaning?.message
              ? errors.meaning.message
              : "Give meaning to it"
          }
        />
        <input type="hidden" {...register("languageId")} value={id} />
        <button
          className="text-white font-semibold text-lg bg-gradient-to-r from-sky-700 to-sky-950 py-2 px-4 rounded-lg ml-2
          hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-700 transition ease delay-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};
