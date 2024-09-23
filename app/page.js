import React from "react";
import { Jumbotron, HomePage, Main, MainBox, Box } from "./styles/home";
import Link from "next/link";

const page = () => {
  return (
    <HomePage>
      <Jumbotron>PARAGON TWEAKS</Jumbotron>
      <Main>Main Features</Main>
      <MainBox>
        <Box>
          <Link href="/features">Feature 1</Link>
        </Box>
        <Box>
          <Link href="/features">Feature 2</Link>
        </Box>
        <Box>
          <Link href="/features">Feature 3</Link>
        </Box>
      </MainBox>
      <MainBox>
        <Box>
          <Link href="/aboutUs">About Us</Link>
        </Box>
      </MainBox>
    </HomePage>
  );
};

export default page;
