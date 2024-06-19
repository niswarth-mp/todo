import { PropsWithChildren } from "react";
import { ParagraphProps, StyledParagraph } from "./paragraphStyled";

const Paragraph = ({
  children,
  ...rest
}: PropsWithChildren<ParagraphProps>) => {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};
export default Paragraph;
