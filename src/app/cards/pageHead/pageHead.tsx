"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

//import instaLogo from "./instagram.svg";
const Title = styled.div`
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  align-content: center;
  max-width: fit-content;
  align-items: center;
  margin: 0 auto;
`;

const EstContent = styled.div`
  // border: 1px solid blue;
  max-width: fit-content;
  padding-top: 1.1em;
  padding-bottom: 2.5em;
  font-size: 1.4em;
  font-family: "Poiret One", sans-serif;
  font-weight: bold;
  color: rgb(255, 244, 244);
`;

const Container = styled.div`
  //border: 1px solid blue;
  max-width: 90vw;
  display: grid;
  grid-template-columns: 1fr 25px;
  //flex-direction: row;
  // align-content: center;
  // justify-content: flex-end;
  margin: 0 auto;
`;

const PageHead = () => {
  return (
    <>
      <Container>
        <Title>
          {/* <Heading>J.Nauer Design</Heading>*/}
          <Image src={logo} alt="logo" width={300} />
          <EstContent>Hand made in England, since 2023</EstContent>
          {/* <Content>Made in England</Content>*/}
        </Title>
        <div
          style={{
            //display: "inline-flex",
            //maxWidth: "fit-content",
            ///border: "1px solid red",
            //paddingRight: "1.5em",
            paddingTop: "1em",
            //marginRight: "30px",
            zIndex: "2",
          }}
        >
          <Link
            href={
              "https://www.instagram.com/jn__clay?igsh=NHRpZnBhcDdqdmwx&utm_source=qr"
            }
          >
            <Image src={""} alt="instagram logo" width={30} />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default PageHead;
