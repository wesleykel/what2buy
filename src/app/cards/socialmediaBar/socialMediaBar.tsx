"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import instagramLogo from "./instagram.svg";

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 99%;
  padding-top: 10px;
`;

const SocialMediaBar = () => {
  return (
    <LogoBox>
      <Link
        href={
          "https://www.instagram.com/jn__clay?igsh=NHRpZnBhcDdqdmwx&utm_source=qr"
        }
      >
        <Image src={instagramLogo} alt="instagram logo" width={30} />
      </Link>
    </LogoBox>
  );
};
export default SocialMediaBar;
