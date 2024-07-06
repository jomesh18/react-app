import styles from "./Button.module.css";

interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

function Button({ color = "primary", onClick, children }: Props) {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
