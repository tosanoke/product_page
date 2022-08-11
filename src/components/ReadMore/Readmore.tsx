import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Spacer } from "../Spacer";
import { Container } from "./style";

export interface Props {
  children?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  extraStyles?: Record<string, string>;
}

export const ReadMore: React.FC<Props> = ({ children }) => {
  const text = children;
  const truncatedText = text?.slice(0, 140) + "...";
  const [isReadMore, setIsReadMore] = useState(true);
  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Container>
      <p>{isReadMore ? truncatedText : text}</p>
      <Spacer height={30} />
      <div onClick={handleReadMore}>
        {isReadMore ? (
          <p className="readmore">
            Read more <FaPlus />
          </p>
        ) : (
          <p className="readmore">
            Show Less <FaMinus />
          </p>
        )}
      </div>
      <Spacer height={30} />
    </Container>
  );
};
