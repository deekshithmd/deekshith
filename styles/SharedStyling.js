import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#000"};
  padding: ${(props) => props.padding || "0px"};
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#000"};
  padding: ${(props) => props.padding || "0px"};
`;

export const Span = styled.span`
  padding: ${(props) => props.padding || "0px"};
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || "#000"};
`;

export const Button = styled.button`
  padding: 0.7rem 3rem;
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
