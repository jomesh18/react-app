import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name?:
    | "alert alert-warning alert-dismissible fade show"
    | "alert alert-primary";
}
const Alert = ({ children, name = "alert alert-primary" }: Props) => {
  return <div className={name}>{children}</div>;
};

export default Alert;
