import MemoryCard from "../MemoryCard";
import { MainContainer } from "./styles";

const cards = [
  {
    id: "1",
    text: "Teste a",
  },
  {
    id: "2",
    text: "Teste b",
  },
  {
    id: "3",
    text: "Teste c",
  },
  {
    id: "4",
    text: "Teste d",
  },
  {
    id: "5",
    text: "Teste e",
  },
  {
    id: "6",
    text: "Teste a",
  },
  {
    id: "7",
    text: "Teste b",
  },
  {
    id: "8",
    text: "Teste c",
  },
  {
    id: "9",
    text: "Teste d",
  },
  {
    id: "10",
    text: "Teste e",
  },
];

const MainInterface = () => {
  return (
    <MainContainer>
      {cards.map((card) => (
        <MemoryCard cardInfo={card} key={card.id} />
      ))}
    </MainContainer>
  );
};

export default MainInterface;
