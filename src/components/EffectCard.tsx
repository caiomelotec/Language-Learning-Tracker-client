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
    <div
      style={{ height: "600px", width: "300px" }}
      className="m-0 p-0 mx-auto"
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-72 md:h-128 h-82 md:w-80 m-0 p-0"
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
    </div>
  );
};
