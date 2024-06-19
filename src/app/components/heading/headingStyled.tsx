import styled, { css } from "styled-components";
import React from "react";

export interface HeadingProps {
  variant: "primaryHeading";
  fontSize: number;
  fontcolor: string;
  alignment?: string;
  children: React.ReactNode;
  className?: string;
}

const primaryHeading = css<HeadingProps>`
  font-size: ${({ fontSize }) => fontSize ?? 10}px;
  color: ${({ fontcolor }) => fontcolor};
  font-family: "Quicksand", sans-serif;
  line-height: normal;
  margin-bottom: 0px;
  /* Additional styles as needed */
`;

export const StyledHeading = styled.h2<HeadingProps>`
  ${(props) => props.variant === "primaryHeading" && primaryHeading};
`;
