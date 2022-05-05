import { useState } from "react";
import { BackContainer, FrontContainer, MainContainer } from "./styles";
import Logo from "../../assets/logo-samu-academy.png";

const MemoryCard = ({ cardInfo }) => {
  const [canShowFront, setCanShowFront] = useState(false);
  return (
    <MainContainer onClick={() => setCanShowFront(!canShowFront)}>
      {canShowFront ? (
        <FrontContainer>{cardInfo.text}</FrontContainer>
      ) : (
        <BackContainer>
          <img src={Logo} alt="Logo Samu Academy" />
        </BackContainer>
      )}
    </MainContainer>
  );
};

export default MemoryCard;
