"use client";
import styled from "styled-components";

const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  background-color: #0000002d;
  margin-top: 4em;
  border-radius: 6px;
`;

const Wrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  font-family: "Poiret One";
`;
const Contact = () => {
  const picWidth = 400;

  return (
    <Wrapper>
      <h2
        id={"contact"}
        style={{ paddingTop: "2.5em", fontWeight: "bold", fontSize: "1.8em" }}
      >
        Contact
      </h2>
      <HeroBox>
        {" "}
        <p
          style={{
            fontSize: "1.5em",
            color: "white",
            margin: "0 auto",
            //border: "1px solid red",
            maxWidth: "60vw",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero
          incidunt natus excepturi, expedita, laborum ut porro in aspernatur
          dolores ipsam quisquam, illum maxime doloremque placeat alias quia
          voluptatum cumque. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Eveniet labore officiis at fugiat nam laborum eaque odit earum!
          Repellat eveniet natus nobis, sint eligendi facere repudiandae ullam
          esse quibusdam error.
        </p>
        <form
          ref={""}
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            padding: "1em",
            width: "30vw",
          }}
        >
          <label style={{ fontSize: "1.8em", color: "white" }}>name</label>
          <input
            type="text"
            name="user_name"
            style={{ padding: "1em", borderRadius: "5px" }}
          />

          <label style={{ fontSize: "1.8em", color: "white" }}>email</label>
          <input type="email" name="user_email" />
          <label style={{ fontSize: "1.8em", color: "white" }}>message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </HeroBox>
    </Wrapper>
  );
};
export default Contact;
