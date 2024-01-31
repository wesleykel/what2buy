"use client";
import styled from "styled-components";
import Image from "next/image";
import JuliaHero from "./julia_Hero.png";
const HeroBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 80vw;
  padding-top: 5em;
  margin: 0 auto;
  background-color: #0000002d;
  margin-top: 4em;
  border-radius: 6px;
`;

const About = () => {
  const picWidth = 400;

  return (
    <HeroBox id={"about"}>
      <Image
        style={{ borderRadius: "15px" }}
        src={JuliaHero}
        alt="potter at potters wheel"
        width={picWidth}
      />
      <p
        style={{
          maxWidth: "40vw",
          fontSize: "15px",
          color: "white",
          fontFamily: "Poiret One",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatibus nobis est reiciendis tempore modi excepturi saepe, corporis
        deleniti, delectus necessitatibus vero accusantium repellendus quibusdam
        libero. Eum sequi dicta nisi! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum voluptatibus vero architecto. Iure, doloribus
        culpa laudantium, temporibus expedita accusantium modi asperiores
        assumenda inventore praesentium nihil quod sint obcaecati quisquam
        nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        quibusdam alias voluptatem incidunt consectetur ullam pariatur veritatis
        aut, iste a distinctio repudiandae libero modi sit cupiditate quis eius
        reprehenderit voluptatibus.
      </p>
    </HeroBox>
  );
};
export default About;
