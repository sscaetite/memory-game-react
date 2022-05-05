import styled from "styled-components";

export const MainContainer = styled.div`
  background: linear-gradient(
    331deg,
    rgba(222, 222, 222, 1) 0%,
    rgba(248, 248, 255, 1) 56%,
    rgba(187, 187, 187, 1) 100%
  );
  width: 200px;
  height: 300px;
  box-shadow: -3px 3px 27px -7px rgba(0, 0, 0, 0.71);
  border-radius: 20px;
  transition: all ease-in 0.2s;
  box-sizing: border-box;

  &:hover {
    box-shadow: -12px 12px 27px -7px rgba(0, 0, 0, 0.71);
  }
`;

export const FrontContainer = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  width: 100%;
  height: 100%;
`;

export const BackContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 50%;
  }
`;
