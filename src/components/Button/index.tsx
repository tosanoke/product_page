import { StyledButton } from "./styles";

export interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  extraStyles?: Record<string, string>;
}

export const Button: React.FC<Props> = ({
  loading,
  children,
  onClick,
  disabled,
  extraStyles,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      style={extraStyles}
    >
      {children}
    </StyledButton>
  );
};
