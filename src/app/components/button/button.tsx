import React from "react";
import { ButtonProps, ButtonStyled } from "./buttonStyled";

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...rest
}) => {
  return (
    <ButtonStyled className={className} variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
