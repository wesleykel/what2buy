"use client";
import styled from "styled-components";
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid rgb(255, 244, 244);

  font-family: "Poiret One", sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  max-width: 80%;
  margin: 0 auto;
  color: rgb(255, 244, 244);
`;

const MenuBar = () => {
  return (
    <Menu>
      <div>About</div>
      <div>Gallery</div>
      <div>Purchase</div>
      <div>Contact</div>
    </Menu>
  );
};

export default MenuBar;
