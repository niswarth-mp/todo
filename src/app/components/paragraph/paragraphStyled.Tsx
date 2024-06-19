import styled, { css } from "styled-components";
import React from "react";

export interface ParagraphProps {
  variant: string;
  fontSize: number;
  fontcolor: string;
  alignment?: string;
  children: React.ReactNode;
  className?: string;
}

const primaryParagraph = css<ParagraphProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ fontcolor }) => fontcolor};
  font-family: "Quicksand", sans-serif;
  line-height: normal;
  margin-top: 0px;
  /* Additional styles as needed */
`;

export const StyledParagraph = styled.p<ParagraphProps>`
  ${(props) => props.variant === "primaryParagraph" && primaryParagraph};
`;
