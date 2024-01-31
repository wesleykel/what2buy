"use client";
import Image from "next/image";
import styled from "styled-components";
import heroCups from "./juliaCupImage.png";
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 80vw;
  padding-top: 5em;
  margin: 0 auto;
`;

const Hero = () => {
  return (
    <ImageContainer>
      <Image src={heroCups} alt={"stack of handmade cups"} width={500} />
    </ImageContainer>
  );
};

export default Hero;
