import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

function UserChanger() {
  let { username, setUsername } = useContext(AppContext);
  const changeUser = () => {
    if (setUsername) {
      setUsername("new username");
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          changeUser();
        }}
      >
        change {username}
      </button>
    </div>
  );
}

export default UserChanger;
