"use client";
import styled from "styled-components";
import Link from "next/link";
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid rgb(255, 244, 244);
  padding-bottom: 1em;
  font-family: "Poiret One", sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  max-width: 80%;
  margin: 0 auto;
  color: rgb(255, 244, 244);
`;
const Button = styled.button``;
const MenuBar = () => {
  return (
    <Menu>
      <Link href={""}>Gallery</Link>
      <Button type="button" onClick={() => (location.hash = "#about")}>
        About
      </Button>
      <Link href={""}>Contact</Link>
    </Menu>
  );
};

export default MenuBar;
