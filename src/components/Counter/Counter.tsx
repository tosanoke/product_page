import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Spacer } from "../Spacer";
import { QtyController } from "./style";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    count >= 0 && count < 10 && setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 && count <= 10 && setCount(count - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <QtyController>
        <button onClick={handleDecrement}>
          <FaMinus />
        </button>
        <Spacer width={15} />

        <input type="number" value={count} onChange={handleChange} />
        <Spacer width={15} />
        <button onClick={handleIncrement}>
          <FaPlus />
        </button>
      </QtyController>
    </>
  );
};
