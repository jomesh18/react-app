interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

function Button({ color = "primary", onClick, children }: Props) {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
