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
