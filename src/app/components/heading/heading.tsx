import React, { PropsWithChildren } from "react";
import { HeadingProps, StyledHeading } from "./headingStyled";

const Headings = ({ children, ...rest }: PropsWithChildren<HeadingProps>) => {
  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

export default Headings;
