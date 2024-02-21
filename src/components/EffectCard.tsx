// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdDelete } from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

type Card = {
  languageId: string;
  meaning: string;
  userId: string;
  word: string;
  __v: number;
  _id: string;
};

export const EffectCard = () => {
  const { id } = useParams();
  const [cards, setCards] = useState<Card[] | []>([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/language/card/${id}`,
          {
            withCredentials: true,
          }
        );
        // cards = res.data.cards;
        setCards(res.data.cards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, [cards]);

  const deleteCard = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/api/language/card/${id}`, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{ height: "600px", width: "300px" }}
      className="m-0 p-0 mx-auto"
    >
      {cards.length > 0 && (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-72 md:h-128 h-82 md:w-80 m-0 p-0"
        >
          {cards.map((w) => (
            <SwiperSlide
              className="flex flex-col items-center justify-center text-xl font-semibold text-white bg-gradient-to-r from-sky-800 to-slate-800 rounded-2xl
          "
              key={w._id}
            >
              <MdDelete
                className="absolute top-5 right-6 cursor-pointer"
                size={25}
                onClick={() => deleteCard(w._id)}
              />
              <h1 className="my-2">Word: {w.word}</h1>
              <p>Meaning:</p>
              <p>{w.meaning}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {cards.length === 0 && (
        <h1 className="text-white font-semibold text-2xl">
          Try to add some cards.
        </h1>
      )}
    </div>
  );
};
