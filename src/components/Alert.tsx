import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name?: "alert alert-warning alert-dismissible" | "alert alert-primary";
  onClose: () => void;
}
const Alert = ({
  children,
  name = "alert alert-warning alert-dismissible",
  onClose,
}: Props) => {
  return (
    <div className={name}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
