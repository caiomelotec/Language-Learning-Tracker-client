import { AddVocabulary } from "../components/AddVocabulary.tsx";
import { EffectCard } from "../components/EffectCard.tsx";

export const Cards = () => {
  return (
    <div className="bg-gradient-to-r from-sky-800 to-slate-800">
      <AddVocabulary />
      <EffectCard />
    </div>
  );
};
