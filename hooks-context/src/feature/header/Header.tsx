import { useContext } from "react";
import { AppContext } from "../../AppContext";

export const Header = () => {
  const { appName, username } = useContext(AppContext);
  return (
    <header>
      <h3>{appName}</h3>
      <p>
        <span> - </span>
        <strong>{username}</strong>
        <span> - </span>
      </p>
    </header>
  );
};
