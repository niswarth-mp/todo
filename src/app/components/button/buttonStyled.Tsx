import styled, { css } from "styled-components";

export interface ButtonProps {
  variant: "primaryButton" | "secondaryButton";
  fontSize?: number;
  fontcolor?: string;
  alignment?: string;
  backgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const primaryButton = css<ButtonProps>`
  font-size: ${(props) => props.fontSize ?? 12}px;
  color: ${(props) => props.fontcolor ?? "black"};
  text-align: ${(props) => props.alignment ?? "center"};
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.297);
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor ?? "MediumSeaGreen"};
`;

const secondaryButton = css<ButtonProps>`
  font-size: ${(props) => props.fontSize ?? 12}px;
  color: ${(props) => props.fontcolor ?? "black"};
  text-align: ${(props) => props.alignment ?? "center"};
  padding: 10px 20px;
  border: 1px solid #e7e7e7;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor ?? "MediumSeaGreen"};
`;

const buttonStyles = {
  primaryButton,
  secondaryButton,
};

export const ButtonStyled = styled.button<ButtonProps>`
  ${(props) =>
    buttonStyles[props.variant as "primaryButton" | "secondaryButton"]}
`;
