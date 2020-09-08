import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const AsideLogo = styled.img`
  width: auto;
  position: absolute;
  right: 0px;
  top: 300px;
  height: 200px;
  width: auto;
  ${mediaQueries("xs")`
    height: 250px;
    right: 30px;
  `}

  ${mediaQueries("md")`
    right: 50px;
  top: 220px;
  `}
`;

export const ContactAsideLogo = styled(AsideLogo)`
  top: 140px;
  ${mediaQueries("md")`
    right: 0px;
  top: 140px;
  `}
`;
export const ProductAsideLogo = styled(AsideLogo)`
  top: 40px;
  display: none;
  ${mediaQueries("md")`
    display: block;
    right: 0px;
    top: 0px;
  `}
`;
