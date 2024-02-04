// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdDelete } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export const EffectCard = () => {
  const wordsArray = [
    {
      word: "Möglichkeit",
      meaning: "Possibility",
    },
    {
      word: "Freiheit",
      meaning: "Freedom",
    },
    {
      word: "Haus",
      meaning: "House",
    },
    {
      word: "Wasser",
      meaning: "Water",
    },
    {
      word: "Reise",
      meaning: "Journey",
    },
    {
      word: "Kaffee",
      meaning: "Coffee",
    },
    {
      word: "Buch",
      meaning: "Book",
    },
    {
      word: "Blume",
      meaning: "Flower",
    },
    {
      word: "Sonnenuntergang",
      meaning: "Sunset",
    },
    {
      word: "Schule",
      meaning: "School",
    },
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-40 w-72 h-80 md:w-80 md:h-1/2"
      >
        {wordsArray.map((w, i) => (
          <SwiperSlide
            className="flex flex-col items-center justify-center text-xl font-semibold text-white bg-gradient-to-r from-sky-800 to-slate-800 rounded-2xl
          "
            key={i}
          >
            <MdDelete
              className="absolute top-5 right-6 cursor-pointer"
              size={25}
            />
            <h1 className="my-2">Word: {w.word}</h1>
            <p>Meaning: {w.meaning}</p>
            <p></p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
