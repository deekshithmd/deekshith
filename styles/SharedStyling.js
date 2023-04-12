import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#000"};
  padding: ${(props) => props.padding || "0px"};
  text-transform: ${(props) => props.textTransform || "none"};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#000"};
  padding: ${(props) => props.padding || "0px"};
  text-transform: ${(props) => props.textTransform || "none"};
`;

export const Span = styled.span`
  padding: ${(props) => props.padding || "0px"};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#000"};
`;

export const Button = styled.button`
  padding: ${(props) => props.padding || "0.7rem 3rem"};
  background: ${(props) => props.theme.default.secondaryBackground};
  color: ${(props) => props.theme.default.color};
  cursor: pointer;
  margin-top: 1rem;
  font-size: 2rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  margin-right: ${(props) => props.marginRight || "0px"};
  box-shadow: ${(props) => props.theme.default.boxShadow},
    ${(props) => props.theme.default.boxInsetShadow};
  &:hover {
    background: ${(props) => props.theme.default.selected};
    color: #fff;
  }
`;

export const Header = styled(H1)`
  text-align: center;
  margin: 0 6rem;
  font-size: 4rem;
  padding: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.default.border};
  color: ${(props) => props.theme.default.color};
  @media (max-width: 480px) {
    margin: 0 3rem;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0rem;
  padding-top: 2rem;
  background: ${(props) => props.theme.default.background};
  z-index: 10;
  @media (max-width: 480px) {
    position: sticky;
    top: 0rem;
    z-index: 10;
  }
`;
