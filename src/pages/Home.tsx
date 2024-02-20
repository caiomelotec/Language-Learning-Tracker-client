import { useEffect, useState } from "react";
import { LanguageForms } from "../components/LanguageForms";
import { LanguageInfo } from "../components/LanguageInfo";
import axios from "axios";

type Language = {
  id: string;
  name: string;
  userId: string;
};

export const Home = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/language/fetchlanguages",
          {
            withCredentials: true,
          }
        );
        setLanguages(res.data.lang);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLanguages();
  }, [languages]);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-10">
      <LanguageForms />
      {languages ? <LanguageInfo languages={languages} /> : ""}
    </div>
  );
};
