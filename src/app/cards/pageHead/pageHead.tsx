"use client";
import styled from "styled-components";
import Image from "next/image";
import logo from "./julia_logo_transparent.png";
const Title = styled.div`
  display: flex;
  flex-direction: column;
  //border: 1px solid red;
  align-content: center;
  max-width: fit-content;
  align-items: center;
  margin: 0 auto;
`;

const EstContent = styled.div`
  // border: 1px solid blue;
  max-width: fit-content;
  padding: 1.1em;
  font-size: 1.4em;
  font-family: "Poiret One", sans-serif;
  font-weight: bold;
  color: rgb(255, 244, 244);
`;

const Content = styled.div`
  // border: 1px solid blue;
  max-width: fit-content;
  padding: 0.5em;
  font-size: 1.2em;
`;

const Heading = styled.div`
  //border: 1px solid blue;
  max-width: fit-content;
  padding: 0.5em;
  font-family: "Playfair Display";
  font-size: 5em;
  font-weight: bold;
`;
const PageHead = () => {
  return (
    <Title>
      {/* <Heading>J.Nauer Design</Heading>*/}
      <Image src={logo} alt="logo" width={320} height={320} />
      <EstContent>Made in England since 2023</EstContent>
      {/* <Content>Made in England</Content>*/}
    </Title>
  );
};

export default PageHead;
