import * as z from "zod";
import { AddVocabularyFormSchema } from "../util/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type AddVocabularyFormInputs = z.infer<typeof AddVocabularyFormSchema>;

export const AddVocabularyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddVocabularyFormInputs>({
    resolver: zodResolver(AddVocabularyFormSchema),
  });

  const processForm: SubmitHandler<AddVocabularyFormInputs> = async (data) => {
    console.log(data);
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
          className="rounded-xl p-1 w-full bg-gradient-to-r from-slate-400 to-gray-200 placeholder:text-slate-600"
          placeholder="Write the word you want to learn"
        />
        <label className="text-white ml-2">Meaning:</label>
        <input
          {...register("meaning")}
          type="text"
          className="rounded-xl p-1 w-full bg-gradient-to-r from-slate-400 to-gray-200 placeholder:text-slate-600"
          id="meaning"
          placeholder="Give meaning to it"
        />
        <button
          className="text-white font-semibold text-lg bg-gradient-to-r from-sky-700 to-sky-950 py-2 px-4 rounded-lg ml-2
          hover:bg-gradient-to-r hover:from-sky-950 hover:to-sky-700 transition ease delay-300"
        >
          Add
        </button>
      </form>
      {errors.word?.message && (
        <p className="my-1 text-lg text-rose-600">{errors.word.message}</p>
      )}
      {errors.meaning?.message && (
        <p className="my-1 text-lg text-rose-600">{errors.meaning.message}</p>
      )}
    </div>
  );
};
