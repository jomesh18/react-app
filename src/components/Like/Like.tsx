import { FaHeart } from "react-icons/fa";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [color, setColor] = useState("0");
  return (
    <FaHeart
      size={50}
      className={styles["color" + color]}
      onClick={() => {
        onClick();
        setColor((1 - parseInt(color)).toString());
      }}
    ></FaHeart>
  );
}

export default Like;
